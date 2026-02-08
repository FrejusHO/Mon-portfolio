const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Seules les requêtes POST sont autorisées' });
  }

  const { name, email, message } = req.body;

  // Configuration du transporteur (Exemple avec Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Utilisez un "Mot de passe d'application"
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ status: 'Succès', message: 'Email envoyé !' });
  } catch (error) {
    return res.status(500).json({ status: 'Erreur', error: error.message });
  }
}