import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  console.log("🔁 Richiesta ricevuta a /api/contact");

  // 1. ✅ Verifica API Key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("❌ RESEND_API_KEY non trovata nel process.env");
    return NextResponse.json(
      { error: "API key mancante nel backend" },
      { status: 500 }
    );
  }

  console.log("✅ RESEND_API_KEY presente.");

  // 2. ✅ Inizializza Resend
  const resend = new Resend(resendApiKey);

  try {
    // 3. ✅ Ricevi il JSON dal body
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
    console.log("📨 Dati parsati:", { name, email, phone, message });

    // 4. ⚠️ Verifica i campi obbligatori
    if (!name || !email || !message) {
      console.warn("⚠️ Dati obbligatori mancanti.");
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori" },
        { status: 400 }
      );
    }

    // 5. ✨ Simulazione invio (NO RESEND VERA)
    console.log("📤 Simulazione invio... Tutto OK fino a qui.");
    const data = { id: "simulated-id-12345" };
    return NextResponse.json({ success: true, messageId: data.id });

  } catch (error) {
    console.error("❌ Errore inatteso:", error);
    return NextResponse.json(
      { error: "Errore interno del server", details: String(error) },
      { status: 500 }
    );
  }
}
