import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: `Dear Bot <contato@crievo.tech>`,
      to: 'dilanlopez009@gmail.com',
      subject: `[Dear Bot] Novo contato: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #00e66d;">Novo contato via Landing Page</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Nome:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">E-mail:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">WhatsApp:</td>
              <td style="padding: 8px 0;">${phone || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Mensagem:</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
          </table>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail' },
      { status: 500 }
    )
  }
}
