import './styles.css';

(() => {
  const SUBMIT_URL = 'http://localhost:3000/api/contact-form';

  const $form = document.querySelector('form');
  $form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if ($form.action !== SUBMIT_URL && !$form.action.endsWith('/api/contact-form')) {
      alert('Incorrect form action value');
      return;
    }

    if ($form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value');
      return;
    }

    try {
      const formData = new FormData($form);
      const response = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message || 'Form submitted successfully!');
      } else {
        alert(data.error || 'Error submitting form!');
      }
    } catch (_) {
      alert('Error submitting form!');
    }
  });
})();

