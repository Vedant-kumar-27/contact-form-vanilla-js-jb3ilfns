# Contact Form — Solution Guide

Let's walk through a clear, practical approach to implement the contact form. We will build using pure HTML and native form submission, keeping things simple and accessible.

## Table of Contents

1. The Big Picture
2. Approach Overview
3. Architecture Flow
4. Step 1: Understanding the Form Structure
5. Step 2: Adding Form Attributes
6. Step 3: Creating Form Fields
7. Step 4: Adding Labels
8. Step 5: Adding the Submit Button
9. Complete Implementation View
10. Testing Your Solution
11. Common Pitfalls
12. Summary and Next Steps

---

## The Big Picture

The contact form allows users to submit their name, email, and message to an API endpoint using native HTML form submission. The form uses the browser's built-in form handling capabilities, requiring no JavaScript for the submission process itself. When the user clicks "Send", the browser automatically collects the form data and sends it to the specified endpoint.

---

## Approach Overview

Break the solution into layers:

### Layer 1: Form Container
Purpose: Create the form element with proper attributes.  
Analogy: Setting up a mailbox with the correct address and delivery method.

### Layer 2: Form Fields
Purpose: Add input fields for name, email, and message.  
Analogy: Adding slots for different types of mail (letters, packages, etc.).

### Layer 3: Labels
Purpose: Provide accessible labels for each field.  
Analogy: Clear signage indicating what goes in each slot.

### Layer 4: Submit Button
Purpose: Add a button to trigger form submission.  
Analogy: A button to send the mail.

---

## Architecture Flow

```
User fills form fields
    ↓
User clicks "Send" button
    ↓
Browser collects form data
    ↓
Browser sends POST request to action URL
    ↓
recompose intercepts to verify attributes
    ↓
API processes request
    ↓
Success message displayed
```

---

## Step 1: Understanding the Form Structure

The form needs to be wrapped in a `<form>` element. This element will have:
- `action` attribute: The URL where the form data will be sent
- `method` attribute: The HTTP method to use (POST in this case)

The API endpoint is: `http://localhost:3000/api/contact-form` (local server running on port 3000)

---

## Step 2: Adding Form Attributes

Set the form's `action` and `method` attributes:

```html
<form
  action="http://localhost:3000/api/contact-form"
  method="post"
>
  <!-- Form fields go here -->
</form>
```

---

## Step 3: Creating Form Fields

Add the three required fields:

1. **Name field**: A text input
2. **Email field**: An email input (for basic browser validation)
3. **Message field**: A textarea (since messages can be long)

Each field needs:
- An `id` attribute (for label association)
- A `name` attribute (for form data collection)
- The appropriate `type` attribute

```html
<input id="name-input" name="name" type="text" />
<input id="email-input" name="email" type="email" />
<textarea id="message-input" name="message"></textarea>
```

---

## Step 4: Adding Labels

Add `<label>` elements for each field. Labels should:
- Have a `htmlFor` attribute matching the input's `id`
- Contain descriptive text
- Be placed before or near their corresponding input

```html
<label htmlFor="name-input">Name</label>
<input id="name-input" name="name" type="text" />

<label htmlFor="email-input">Email</label>
<input id="email-input" name="email" type="email" />

<label htmlFor="message-input">Message</label>
<textarea id="message-input" name="message"></textarea>
```

---

## Step 5: Adding the Submit Button

Add a submit button with the text "Send". The button should be inside the form:

```html
<button>Send</button>
```

By default, buttons inside forms have `type="submit"`, so this will trigger form submission when clicked.

---

## Complete Implementation View

Here's the complete form structure:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>Contact Form</title>
  </head>
  <body>
    <form
      action="http://localhost:3000/api/contact-form"
      method="post"
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea id="message-input" name="message"></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
    <script type="module" src="src/index.js"></script>
  </body>
</html>
```

---

## Testing Your Solution

### Manual Testing

1. Open the page in a browser
2. Verify all three fields are present (name, email, message)
3. Verify labels are visible and properly positioned
4. Click on a label and verify the corresponding input receives focus
5. Fill in the form fields
6. Click "Send" button
7. Verify form submission (recompose will intercept to verify attributes)
8. Check browser console for errors

### Automated Testing

Run the test suite:
```bash
npm run test
```

The tests verify:
- All required fields are present
- Form has correct action and method attributes
- Labels are properly associated with inputs
- Submit button contains "Send" text
- Form structure is correct

---

## Common Pitfalls

1. **Missing form attributes**
   - Solution: Ensure `action` and `method` are set on the `<form>` element

2. **Incorrect field names**
   - Solution: Use `name="name"`, `name="email"`, and `name="message"` exactly as expected by the API

3. **Labels not linked to inputs**
   - Solution: Use `htmlFor` on labels matching the `id` on inputs

4. **Using wrong input type**
   - Solution: Use `type="text"` for name, `type="email"` for email, and `<textarea>` for message

5. **Submit button text incorrect**
   - Solution: Button should contain exactly "Send"

6. **Missing name attributes**
   - Solution: All form fields must have `name` attributes for data collection

---

## Summary and Next Steps

You've built a functional contact form that:
- Uses native HTML form submission
- Has proper form structure with action and method
- Includes accessible labels linked to inputs
- Submits data to the API endpoint

Next steps to explore:
- Add CSS styling for better visual appearance
- Add client-side validation with JavaScript
- Add form validation feedback
- Implement loading states during submission
- Add success/error message display

---

_Good luck with your implementation!_

