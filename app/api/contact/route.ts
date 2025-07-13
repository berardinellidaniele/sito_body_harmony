import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  console.log("🔁 Richiesta ricevuta a /api/contact");

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("❌ RESEND_API_KEY non trovata");
    return NextResponse.json({ error: "API key mancante nel backend" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  console.log("✅ RESEND inizializzato");

  try {
    const bodyText = await request.text();
    console.log("📨 Raw body ricevuto:", bodyText);

    let parsed;
    try {
      parsed = JSON.parse(bodyText);
    } catch (err) {
      console.error("❌ JSON malformato:", err);
      return NextResponse.json({ error: "JSON malformato" }, { status: 400 });
    }

    const { name, email, phone, message } = parsed;
    console.log("✅ Dati parsati:", { name, email, phone, message });

    if (!name || !email || !message) {
      console.warn("⚠️ Dati mancanti");
      return NextResponse.json({ error: "Nome, email e messaggio sono obbligatori" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Body Harmony Gym <info@palestrabodyharmony.it>",
      to: ["newbodyharmony@libero.it"],
      replyTo: email,
      subject: `🏋️ Nuovo Contatto da ${name} - Body Harmony Gym`,
      html: `
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif;">
          <h2 style="color:#ea580c;">🏋️ Body Harmony Gym</h2>
          <p><strong>👤 Nome:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📱 Telefono:</strong> ${phone || "Non fornito"}</p>
          <p><strong>💬 Messaggio:</strong><br>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <small>Ricevuto il ${new Date().toLocaleString("it-IT")}</small>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("❌ Errore Resend:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: error.message || "Errore invio", details: error },
        { status: 500 }
      );
    }

    console.log("✅ Email inviata. ID:", data?.id);
    return NextResponse.json({ success: true, messageId: data?.id });

  } catch (err) {
    console.error("❌ Errore inatteso:", err);
    return NextResponse.json({ error: "Errore interno", details: String(err) }, { status: 500 });
  }
}
