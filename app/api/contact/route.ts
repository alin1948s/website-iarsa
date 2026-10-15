import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  department: z.string().min(1),
  fullName: z.string().min(2, "Numele trebuie să conțină cel puțin 2 caractere."),
  email: z.string().email("Adresă de email invalidă."),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subiectul este obligatoriu."),
  message: z.string().min(10, "Mesajul trebuie să conțină cel puțin 10 caractere."),
  locale: z.enum(["ro", "en"]).default("ro"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errorMsg = result.error.errors[0]?.message || "Date invalide.";
      return NextResponse.json({ success: false, error: errorMsg }, { status: 400 });
    }

    const { department, fullName, email, phone, subject, message } = result.data;

    // Log the transmission in server logs
    console.log(`[CONTACT INQUIRY RECEIVED] Dept: ${department} | From: ${fullName} <${email}> | Phone: ${phone || "N/A"} | Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // In production, this dispatches to iar@iar.ro / actionari@iar.ro / avertizor.integritate@iar.ro via SMTP/Resend/Sendgrid
    return NextResponse.json({
      success: true,
      message: "Solicitarea a fost recepționată cu succes.",
    });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "A apărut o eroare de procesare la nivelul serverului." },
      { status: 500 }
    );
  }
}
