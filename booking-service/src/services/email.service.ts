import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendBookingConfirmationEmail = async (
  email: string,
  name: string,
  meetingAgenda: string,
  meetingDate: string
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Booking Confirmation - AI Consulting Session",
    html: `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px; padding:20px;">
        
        <h2 style="color:#2c3e50;">
          🎉 Booking Confirmed
        </h2>

        <p>Hello <strong>${name}</strong>,</p>

        <p>
          Thank you for booking your <strong>AI Consulting Session</strong>.
          Your booking has been successfully confirmed.
        </p>

        <h3>Meeting Details</h3>

        <table style="border-collapse: collapse; width:100%;">
          <tr>
            <td style="border:1px solid #ddd;padding:8px;"><strong>Name</strong></td>
            <td style="border:1px solid #ddd;padding:8px;">${name}</td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd;padding:8px;"><strong>Agenda</strong></td>
            <td style="border:1px solid #ddd;padding:8px;">${meetingAgenda}</td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd;padding:8px;"><strong>Date & Time</strong></td>
            <td style="border:1px solid #ddd;padding:8px;">${meetingDate}</td>
          </tr>
        </table>

        <br>

        <p>
          Please join the meeting on time.
        </p>

        <hr>

        <p style="font-size:14px;color:gray;">
          Regards,<br>
          Venture Builders Team
        </p>

      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};