const Contact = require('../models/Contact');
const { sendEmail } = require('../utils/email');

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    // Create contact entry
    const contact = await Contact.create({
      name,
      email,
      company,
      subject,
      message
    });

    // Send email notification
    try {
      await sendEmail({
        to: process.env.EMAIL_TO,
        subject: `New Portfolio Contact: ${subject || 'No Subject'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
            <div style="background: #1E293B; padding: 20px; border-radius: 8px; color: #E2E8F0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="background: #0F172A; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            <p style="color: #94A3B8; font-size: 12px; margin-top: 20px;">
              Sent from your portfolio website
            </p>
          </div>
        `
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: { id: contact._id }
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      error: 'Failed to submit message. Please try again later.'
    });
  }
};
