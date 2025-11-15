# Commands Reference

This document contains all commands needed to work with the Contact Form composition (vanilla-js variant). Use this as a quick reference for development, testing, and deployment.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Git Workflow](#git-workflow)
- [Troubleshooting](#troubleshooting)

**Note**: Docker commands are not included. Dockerfiles are provided for CI/grading purposes only and should not be used for local development.

## Installation

Install all project dependencies:

```bash
# From project root
npm install
```

This will install all dependencies including:
- Express and CORS for the server
- Vite for the frontend
- Jest and testing libraries
- ESLint and Prettier for code quality

## Development

### Running the Application

This is a full-stack application with both client and server components.

**Option 1: Run both client and server (recommended)**

Terminal A (Server):
```bash
# Start the Express server on port 3000
npm run server
```

Terminal B (Client):
```bash
# Start the Vite dev server on port 5173
npm run dev
```

Then open `http://localhost:5173` in your browser.

**Option 2: Run only the frontend**

```bash
# Start only the Vite dev server
npm run dev
```

Note: The form will not submit successfully without the server running.

**Option 3: Run only the backend**

```bash
# Start only the Express server
npm run server
```

The API will be available at `http://localhost:3000/api/contact-form`.

### Development Servers

- **Frontend (Vite)**: `http://localhost:5173`
- **Backend (Express)**: `http://localhost:3000`
- **API Endpoint**: `POST http://localhost:3000/api/contact-form`

## Building

Build the application for production:

```bash
# Build the frontend for production
npm run build
```

This will:
- Compile and optimize the frontend code
- Output the built files to the `dist/` directory

Preview the production build:

```bash
# Preview the production build locally
npm run preview
```

## Testing

Run the test suite:

```bash
# Run all tests once
npm run test
```

Run tests in watch mode (recommended during development):

```bash
# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

Tests are located in `src/__tests__/` and use Jest with jsdom environment.

## Code Quality

### Linting

Check code for linting errors:

```bash
# Check for ESLint errors
npm run lint
```

### Formatting

Format code with Prettier:

```bash
# Format all code files
npm run format
```

This will format:
- JavaScript files (`**/*.js`)
- JSX files (`**/*.jsx`)
- JSON files (`**/*.json`)
- CSS files (`**/*.css`)

## Git Workflow

Recommended git workflow:

```bash
# Create a feature branch
git checkout -b feature/contact-form

# Stage all changes
git add .

# Commit with conventional message
git commit -m "feat: implement contact form"

# Push to remote
git push origin feature/contact-form
```

## Troubleshooting

### Port Already in Use

**Problem**: Port 5173 (frontend) or 3000 (backend) is already in use.

**Solution**:
```bash
# Find process using port 5173
lsof -ti:5173 | xargs kill -9

# Find process using port 3000
lsof -ti:3000 | xargs kill -9
```

Or change the port in `vite.config.js` for the frontend.

### npm install Fails

**Problem**: `npm install` fails with errors.

**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Tests Fail Unexpectedly

**Problem**: Tests fail or behave unexpectedly.

**Solution**:
```bash
# Run tests in watch mode to see detailed output
npm run test:watch

# Clear Jest cache
npm test -- --clearCache
```

### Form Submission Not Working

**Problem**: Form submission fails or shows errors.

**Solution**:
1. Ensure the server is running: `npm run server`
2. Check that the server is on port 3000
3. Verify the form action is set to `http://localhost:3000/api/contact-form`
4. Check browser console for errors
5. Verify all form fields have proper `name` attributes

### Module Not Found Errors

**Problem**: Import errors or module not found.

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## Quick Reference

**Most Common Commands:**

```bash
# Start development (run in two terminals)
npm run server    # Terminal 1: Backend
npm run dev       # Terminal 2: Frontend

# Run tests
npm run test:watch

# Format code
npm run format

# Build for production
npm run build
```

**Project Structure:**
```
contact-form/
├── index.html           # Main HTML file (user implements form here)
├── src/
│   ├── index.js        # JavaScript for form interception (provided)
│   ├── styles.css      # CSS styles
│   └── __tests__/      # Test files
├── server/              # Express API server (read-only, for testing)
│   ├── index.js        # Server entry point
│   └── routes/         # API routes
└── package.json         # Dependencies and scripts
```

