import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_5xKhyjhu_9xaHgD7dQDko83buqUUNJg8D")

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validazione base
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e messaggio sono obbligatori" }, { status: 400 })
    }

    // Invia email
    const { data, error } = await resend.emails.send({
      from: "Body Harmony Gym <noreply@bodyharmonygym.com>",
      to: ["newbodyharmony@libero.it"],
      replyTo: email,
      subject: `🏋️ Nuovo Contatto da ${name} - Body Harmony Gym`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #f97316; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #f97316; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏋️ Body Harmony Gym</h1>
              <p>Nuova richiesta di contatto ricevuta</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nome:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">📱 Telefono:</div>
                <div class="value">${phone || "Non fornito"}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Messaggio:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <div class="footer">
                <p>Ricevuto il ${new Date().toLocaleString("it-IT")}</p>
                <p>Body Harmony Gym - Via Marina, 63, Marina Di Montemarciano</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error("Errore Resend:", error)
      return NextResponse.json({ error: "Errore nell'invio dell'email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error("Errore API:", error)
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 })
  }
}
