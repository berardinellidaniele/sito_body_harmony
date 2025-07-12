import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  // 1. Verifica se la API key è presente
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("❌ RESEND_API_KEY non trovata nel process.env");
    return NextResponse.json({ error: "API key mancante" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  console.log("✅ RESEND_API_KEY caricata correttamente");

  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      console.warn("⚠️ Dati mancanti nel body:", { name, email, message });
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori" },
        { status: 400 }
      );
    }

    // 2. Log diagnostico invio
    console.log("📨 Inizio invio email da:", email);

    const { data, error } = await resend.emails.send({
      from: "Body Harmony Gym <onboarding@resend.dev>", // Fallback mittente sicuro
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
        {
          error: error.message || "Errore nell'invio dell'email",
          details: error,
        },
        { status: 500 }
      );
    }

    console.log("✅ Email inviata con successo! ID:", data?.id);
    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("❌ Errore API generale:", error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
