# 🚀 Venture Builders Assessment

A Microservices-based AI SaaS application built with **Next.js**, **Node.js**, **Express.js**, and **Groq AI**.

The project consists of three independent microservices:

- 📅 Booking Service
- 🤖 AI Query Assistant
- 📄 AI Resume Builder

---

# 📌 Project Architecture

```
venture-builders-assessment/

│── frontend/                 (Next.js)
│
├── booking-service/
│
├── ai-service/
│
├── resume-service/
│
└── README.md
```

---

# 🛠 Tech Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Axios
- Framer Motion
- Tiptap Editor
- React Hot Toast
- html2canvas
- jsPDF

---

## Backend

- Node.js
- Express.js
- TypeScript
- Multer
- Nodemailer
- Razorpay
- Groq AI SDK

---

## AI

- Groq API
- Llama 3.3 70B Versatile

---

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 📅 1. Booking Service

## Features

- Book Consultation
- Razorpay Payment
- Email Confirmation
- REST APIs
- Error Handling

### Booking Flow

```
User

↓

Booking Form

↓

Payment

↓

Confirmation Email
```

---

# 🤖 2. AI Query Assistant

## Features

- ChatGPT-like UI
- Markdown Support
- Multiple Messages
- Auto Scroll
- Loading Animation
- AI Powered by Groq

### Flow

```
User

↓

Ask Question

↓

Groq AI

↓

Response
```

---

# 📄 3. AI Resume Builder

## Features

- AI Resume Generation
- ATS Friendly Resume
- Resume Templates
- Professional Template
- Modern Template
- Minimal Template
- Theme Color Selection
- Profile Photo Upload
- Resume Editing using Tiptap
- Download Resume as PDF
- Print Resume
- ATS Score Section

### Resume Flow

```
Fill Form

↓

Generate Resume

↓

Edit Resume

↓

Download PDF
```

---

# 📂 Microservices

## Booking Service

```
POST /api/bookings
```

Create Booking

---

```
POST /api/payment/create-order
```

Create Razorpay Order

---

```
POST /api/payment/verify
```

Verify Payment

---

## AI Service

```
POST /api/ai/chat
```

Generate AI Response

---

## Resume Service

```
POST /api/resume/generate
```

Generate Resume

---

# ⚙ Environment Variables

## Frontend

```
NEXT_PUBLIC_BOOKING_API=

NEXT_PUBLIC_AI_API=

NEXT_PUBLIC_RESUME_API=

NEXT_PUBLIC_RAZORPAY_KEY_ID=
```

---

## Booking Service

```
PORT=

MONGODB_URI=

RAZORPAY_KEY_ID=

RAZORPAY_SECRET=

EMAIL_USER=

EMAIL_PASS=
```

---

## AI Service

```
PORT=

GROQ_API_KEY=
```

---

## Resume Service

```
PORT=

GROQ_API_KEY=
```

---

# 🚀 Installation

Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/venture-builders-assessment.git
```

---

Install Frontend

```bash
cd frontend

npm install
```

Run

```bash
npm run dev
```

---

Install Booking Service

```bash
cd booking-service

npm install

npm run dev
```

---

Install AI Service

```bash
cd ai-service

npm install

npm run dev
```

---

Install Resume Service

```bash
cd resume-service

npm install

npm run dev
```

---

# 📷 Screenshots

## Home

- Landing Page
- Hero Section
- Features

## Booking

- Booking Form
- Razorpay Payment

## AI Assistant

- Chat Interface
- AI Responses

## Resume Builder

- Resume Form
- Resume Editor
- PDF Download

---

# ✨ Highlights

- Microservices Architecture
- TypeScript
- Responsive Design
- Modern UI
- AI Integration
- PDF Generation
- ATS Friendly Resume
- Resume Templates
- Editable Resume
- Professional Code Structure

---

# 📌 Future Improvements

- Multiple Chat Sessions
- Streaming AI Response
- Resume History
- PostgreSQL Integration
- Google Calendar Integration
- Authentication
- Dashboard
- Analytics
- Dark Mode
- Docker Support

---

# 👩‍💻 Developed By

**Sakshi Havaldar**

MCA Student | MERN Stack Developer | AI Enthusiast

---

# 📄 License

This project was developed as part of the Venture Builders Technical Assessment.