# Contact Form — HTML Forms and Native Form Submission

Welcome to your next composition! I'm your mentor, and I'll guide you step-by-step to learn HTML forms and native form submission with a modern vanilla JavaScript setup.

Difficulty: Beginner  
Estimated time: 1–2 hours

## Summary

Build a basic "Contact Us" form from scratch using pure HTML and native form submission. Master form elements, labels, form attributes, and understand how the web platform handles form submissions without JavaScript. Perfect for understanding the fundamentals of web forms.

## What is a Contact Form?

A contact form is a common UI pattern found on marketing websites that allows visitors to ask questions or provide feedback. It typically includes fields for name, email, and a message. Think of it like a digital mailbox where visitors can drop off their inquiries.

**Why Contact Forms Matter:**
- They're one of the most common patterns in web development
- Understanding native HTML form submission is fundamental to web development
- They teach you about form validation, accessibility, and semantic HTML
- Many frameworks build on top of these native capabilities

## Learning Outcomes

- Understand HTML form elements and their attributes
- Implement proper form structure with labels and inputs
- Use native form submission without JavaScript
- Understand the relationship between form action, method, and submission
- Build accessible forms with proper label-input associations

## Prerequisites # it is the prior learning knowledge

- Node.js 18+ installed
- Basic knowledge of HTML and CSS
- Comfort with the terminal and `npm`
- Understanding of HTML form elements

## Before You Begin (Environment Checklist)

- `npm --version` works
- Port available: 5173 (Vite dev server)
- Git configured (`git --version`)
- Editor with JavaScript and ESLint plugins

---

## Getting Started

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Start the app

- Full-stack (client + server):
  - Terminal A (server): `npm run server` → should start on `http://localhost:3000`
  - Terminal B (client): `npm run dev` → open `http://localhost:5173`

- Frontend-only:
  - `npm run dev` → open `http://localhost:5173`

- Backend-only:
  - `npm run server` → API on `http://localhost:3000`

**Note:** The server code in `server/` is provided for running and testing purposes only. You should not modify it. Focus on implementing the form in `index.html`.

### Step 3: Run tests

- Unit/Integration (Jest):
  ```bash
  npm run test
  ```
- Watch mode:
  ```bash
  npm run test:watch
  ```

### Step 4: Format and lint

```bash
npm run format
npm run lint
```

---

## Project Structure

```
contact-form/
├── index.html           # Main HTML file
├── src/
│   ├── index.js        # JavaScript for form interception (provided)
│   ├── styles.css      # CSS styles
│   └── __tests__/      # Test files
├── server/              # Express API server (read-only, for testing)
│   ├── index.js        # Server entry point
│   └── routes/         # API routes
├── docs/               # Documentation
└── package.json        # Dependencies and scripts
```

---

## Standard Ports and Endpoints

- Frontend (Vite): `http://localhost:5173`
- Backend (Express): `http://localhost:3000`
- All API routes prefixed with `/api` (RESTful). Example:
  - `POST /api/contact-form`

---

## Scripts (package.json)

- `dev`: Vite dev server (client)
- `server`: Start backend (Express)
- `build`: Build for production
- `lint`: ESLint check
- `format`: Prettier write
- `test`: Jest (unit/integration)
- `test:watch`: Jest watch mode
- `preview`: Vite preview (built app)

---

## Configuration Files

Always include:
- `vite.config.js` (Vite configuration)
- `jest.config.js` (Jest configuration for jsdom)
- `eslint.config.js`
- `.prettierrc`
- `.gitignore`
- `Dockerfile` (for CI/grading)

---

## Requirements Checklist

Tailor per composition. Mark completed items with `[x]`.

### Frontend
- [ ] Form contains name field with proper label
- [ ] Form contains email field with proper label
- [ ] Form contains message textarea with proper label
- [ ] Submit button contains the text "Send"
- [ ] Form has correct action attribute pointing to the API URL
- [ ] Form has correct method attribute set to "post"
- [ ] All form fields have name attributes (name, email, message)
- [ ] Labels are properly linked to inputs using htmlFor/id
- [ ] Form submission works without JavaScript
- [ ] No console errors

---

## Acceptance Criteria

Your solution is complete when:
1. ✓ Form contains all required fields (name, email, message)
2. ✓ Submit button displays "Send"
3. ✓ Form action and method are correctly set
4. ✓ Labels are properly associated with inputs
5. ✓ Form can be submitted (recompose will intercept to verify)
6. ✓ No console errors
7. ✓ All tests pass

---

## Grading Criteria

- Functionality: 50%
- Code Structure: 20%
- Accessibility: 15%
- Testing: 10%
- Code Quality (lint/format): 5%

---

## Hints

Start simple, then refine. Layered guidance:
- First nudge: "Use the `<form>` element with `action` and `method` attributes."
- Deeper: "Add `<label>` elements with `htmlFor` attributes linked to input `id` attributes."
- Deepest: "Ensure all form fields have `name` attributes that match the API expected fields: name, email, message."

---

## Troubleshooting

- Problem: `npm install` fails  
  Solution: Ensure Node 18+ is installed and try `rm -rf node_modules && npm cache clean --force && npm install`.

- Problem: Frontend 5173 already in use  
  Solution: Stop the conflicting process or change the Vite port in `vite.config.js`.

- Problem: Tests fail unexpectedly  
  Solution: Run `npm run test:watch` and read failing test expectations; ensure form attributes are correct.

- Problem: Form doesn't submit  
  Solution: Check that `action` and `method` attributes are set correctly on the `<form>` element.

---

## Git Workflow

Recommended flow:
1. Create a feature branch:
   ```bash
   git checkout -b feature/contact-form
   ```
2. Commit with conventional messages:
   ```bash
   git add .
   git commit -m "feat: implement contact form"
   ```
3. Push:
   ```bash
   git push origin feature/contact-form
   ```

---

## Code Quality

- Run `npm run lint` and `npm run format` before committing
- Prefer clear, readable code
- Use meaningful variable names
- Add comments where logic is complex

### TODO Conventions

- Use `// TODO:` (short, task-focused)
- Place inline where the change is needed
- Keep TODOs concise

---

## Key Concepts You'll Learn

- HTML Forms: Understanding form elements and attributes
- Form Submission: Native browser form handling
- Accessibility: Proper label-input associations
- Semantic HTML: Using the right elements for the right purpose

---

## Next Steps

After finishing:
- Add client-side validation with JavaScript
- Style the form with CSS
- Add form validation feedback
- Implement loading states during submission

---

## Documentation (docs/description.md)

Include:
- Problem Statement and Details
- Use Cases (Primary/Secondary)
- Constraints (Technical + Business Rules)
- Test Data (schemas and examples)
- Requirements Checklist
- Examples and Edge Cases
- Acceptance Criteria
- Hints

---

_Good luck, and happy building!_

