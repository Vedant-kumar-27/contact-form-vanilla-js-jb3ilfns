import express from 'express';

const router = express.Router();

router.post('/contact-form', (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    // Validate field types
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Invalid field types',
      });
    }

    // Validate email format (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
      });
    }

    // Validate field lengths
    if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Fields cannot be empty',
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;

