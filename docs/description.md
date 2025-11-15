# Contact Form

## Metadata

- Title: Contact Form
- Primary Concept: HTML Forms and Native Form Submission
- Difficulty: Beginner
- Estimated Duration: 1–2 hours

## Problem Statement

Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback. The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.

## Problem Details

1. Form must contain a name field with proper label
2. Form must contain an email field with proper label
3. Form must contain a message textarea field with proper label
4. Form must have a submit button containing the text "Send"
5. Form must have correct action attribute pointing to the API URL
6. Form must have correct method attribute set to "post"
7. All form fields must have name attributes (name, email, message)
8. Labels must be properly linked to inputs using htmlFor/id
9. There is no need to do any client-side validation on the fields
10. Form submission should work using native HTML form submission

## Use Cases

### Primary Use Case

A user visits a page with a contact form. The form contains name, email, and message fields, each with a proper label. The user fills in all fields and clicks the "Send" button. The form submits to the API endpoint using native HTML form submission. If all fields are correctly filled, the user sees a success message.

### Secondary Use Cases

- User fills form and presses Enter on a field → Form submits (except in textarea which adds new line)
- User clicks on a label → Corresponding input field receives focus
- User submits form with empty fields → Browser shows native validation (if input types require it)
- Form submission triggers → Data is sent to the API endpoint

## Constraints

### Technical Constraints

| Constraint | Value | Description |
|-----------|-------|-------------|
| Frontend Port | `5173` | Vite development server |
| Language | HTML only | No JavaScript for form submission |
| Form Action | `http://localhost:3000/api/contact-form` | API endpoint URL (local server) |
| Backend Port | `3000` | Express API server |
| Form Method | `POST` | HTTP method for submission |
| Validation | Server-side only | No client-side validation required |

### Business Rules

1. Form must use native HTML form submission
2. All fields must have name attributes matching API expectations: name, email, message
3. Submit button must display the text "Send"
4. Labels must be accessible and properly linked to inputs
5. No JavaScript required for form functionality

### Focus and Limitations

- Do:
  - Focus on HTML form structure and attributes
  - Use semantic HTML elements
  - Ensure proper label-input associations
  - Use native form submission
- Don't:
  - Don't use JavaScript for form submission
  - Don't add client-side validation
  - Don't use framework-specific features
  - Don't modify the provided JavaScript interception code

## Input/Output Contract

### HTML Structure

The form should have the following structure:

```html
<form action="..." method="post">
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
```

### API Endpoint

- Method: POST  
  Path: `http://localhost:3000/api/contact-form`  
  Headers: `Content-Type: application/json`  
  Request Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I have a question..."
  }
  ```
  Success (200):
  ```json
  {
    "success": true,
    "message": "Form submitted successfully!"
  }
  ```
  Error (400/500):
  ```json
  {
    "success": false,
    "error": "All fields are required"
  }
  ```

## Test Data

No external dataset is used. The form accepts user input for:
- name: string
- email: string
- message: string

## Project Structure

```
contact-form/
├── index.html           # Main HTML file
├── src/
│   ├── index.js        # JavaScript for form interception (provided)
│   ├── styles.css      # CSS styles
│   └── __tests__/      # Test files
└── docs/               # Documentation
```

## Provided Assets

- HTML structure template in `index.html`
- CSS styles in `src/styles.css`
- JavaScript interception code in `src/index.js` (used by recompose to verify solution)
- Express server in `server/` (read-only, for running and testing purposes)

## Requirements Checklist

### Frontend Requirements
- [ ] Form contains name field with proper label
- [ ] Form contains email field with proper label
- [ ] Form contains message textarea with proper label
- [ ] Submit button contains the text "Send"
- [ ] Form has correct action attribute
- [ ] Form has correct method attribute
- [ ] All form fields have name attributes
- [ ] Labels are properly linked to inputs
- [ ] Form submission works without JavaScript
- [ ] No console errors

## Examples

### Example 1: Successful Form Submission

**Input:**  
User fills in:
- Name: "John Doe"
- Email: "john@example.com"
- Message: "Hello, I have a question about your services."

**Process:**  
1. User clicks "Send" button
2. Browser submits form using native HTML form submission
3. Form data is sent to the API endpoint
4. recompose intercepts and verifies form attributes

**Output:**  
Success alert is displayed if all fields are correctly filled

### Example 2: Label-Input Association

**Input:**  
User clicks on the "Name" label

**Process:**  
1. Label has `htmlFor="name-input"`
2. Input has `id="name-input"`
3. Browser focuses the corresponding input field

**Output:**  
Name input field receives focus

## Key Concepts to Understand

1. **HTML Forms** — Using `<form>`, `<input>`, `<textarea>`, and `<button>` elements
2. **Form Attributes** — Understanding `action` and `method` attributes
3. **Label-Input Association** — Using `htmlFor` and `id` to link labels to inputs
4. **Native Form Submission** — How browsers handle form submission without JavaScript

## Acceptance Criteria

Your solution is complete when:
1. Core functionality works end-to-end without errors
2. All required fields are present with proper labels
3. Form action and method are correctly set
4. Labels are properly associated with inputs
5. Form can be submitted using native HTML
6. No console errors
7. All tests pass

## Success Signals

- On page load, form displays with all required fields
- Clicking a label focuses the corresponding input
- Filling form and clicking "Send" submits the form
- Form action and method are verified by recompose interception
- No JavaScript errors in console

## Hints

Offer layered nudges to help learners get unstuck:

- Start by adding the form fields (name, email, message) inside the `<form>` element
- Add `action` and `method` attributes to the `<form>` element
- Use `<label>` elements with `htmlFor` attributes linked to input `id` attributes
- Ensure all inputs have `name` attributes matching the API expected fields
- Use `<textarea>` for the message field since it can be long

## Performance Notes

- Native form submission is handled efficiently by the browser
- No additional JavaScript overhead for form submission
- Form validation can be handled by browser-native HTML5 validation if needed

## Next Steps After Completion

Suggest natural follow-ups that deepen the concept:

- Add client-side validation with JavaScript
- Style the form with CSS for better UX
- Add form validation feedback messages
- Implement loading states during submission
- Add success/error message display

