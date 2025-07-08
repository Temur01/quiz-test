# Quiz Test Application

A modern, interactive quiz application built with React and TypeScript, designed for conducting comprehensive assessments in multiple categories including State Language, Information Communication Technologies, IQ tests, and National Legislation.

## 🚀 Features

### Authentication System

- **Passport Authentication**: Secure login using JSHSHIR (Personal Identification Number) and passport data
- **Face ID Verification**: Biometric authentication step for enhanced security
- **Session Management**: Cookie-based user session handling

### Quiz Functionality

- **Multi-Category Questions**:
  - Davlat tili (State Language)
  - Axborot kommunikatsiya texnologiyalari (Information Communication Technologies)
  - IQ Tests
  - Milliy qonunchilik (National Legislation)
- **Interactive Question Interface**: Modern card-based question display
- **Progress Tracking**: Real-time progress bar and question navigation
- **Timer System**: 60-minute countdown timer with automatic submission
- **Question Navigation**: Ability to navigate between questions and review answers
- **Results Screen**: Comprehensive score display and performance analysis

### User Experience

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Toast Notifications**: User feedback for actions and errors
- **Loading States**: Visual feedback during API calls and data processing

## 🛠 Technology Stack

### Frontend

- **React 19.0.0** - Modern React with latest features
- **TypeScript 5.7.2** - Type-safe development
- **Vite 6.2.0** - Fast build tool and development server
- **React Router 7.3.0** - Client-side routing
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 12.4.10** - Smooth animations and transitions

### UI Components & Libraries

- **Lucide React 0.479.0** - Beautiful icons
- **React Hot Toast 2.5.2** - Toast notifications
- **React Simple Captcha 9.3.1** - CAPTCHA verification

### HTTP & State Management

- **Axios 1.8.4** - HTTP client for API requests
- **JS Cookie 3.0.5** - Cookie management

### Development Tools

- **ESLint 9.21.0** - Code linting
- **Prettier 3.5.3** - Code formatting
- **Husky 9.1.7** - Git hooks
- **Lint Staged 15.4.3** - Pre-commit linting

## 📦 Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or bun package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd quiz-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run prepare` - Setup Husky git hooks

## 📁 Project Structure

```
quiz-test/
├── public/                 # Static assets
├── src/
│   ├── api/               # API integration
│   │   ├── instance.ts    # Axios configuration
│   │   └── SendResultApi.ts # Result submission API
│   ├── assets/            # Images and static files
│   │   ├── iq/           # IQ test images
│   │   ├── tests/        # Test-related images
│   │   └── logo_uz.png   # Uzbekistan logo
│   ├── components/        # Reusable UI components
│   │   ├── Alert.tsx     # Alert component
│   │   ├── Navigation.tsx # Navigation component
│   │   ├── ProgressBar.tsx # Progress tracking
│   │   ├── QuestionCard.tsx # Question display
│   │   ├── QuestionMap.tsx # Question navigation
│   │   ├── QuizApp.tsx   # Main quiz component
│   │   ├── ResultsScreen.tsx # Results display
│   │   ├── Timer.tsx     # Countdown timer
│   │   └── UserInfo.tsx  # User information display
│   ├── data/             # Static data
│   │   └── questions.ts  # Quiz questions database
│   ├── pages/            # Page components
│   │   ├── auth/         # Authentication pages
│   │   │   ├── api/      # Auth API calls
│   │   │   └── ui/       # Auth UI components
│   │   └── quiz/         # Quiz page
│   ├── router/           # Routing configuration
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🔐 Authentication Flow

1. **Passport Entry**: Users enter their JSHSHIR and passport number
2. **Data Validation**: System validates credentials against backend API
3. **Face ID Verification**: Users proceed to biometric verification
4. **Quiz Access**: Upon successful authentication, users can access the quiz

## 📝 Quiz Features

### Question Categories

- **State Language**: Grammar, spelling, and language usage questions
- **Information Communication Technologies**: Computer science and technology questions
- **IQ Tests**: Logical reasoning and problem-solving questions
- **National Legislation**: Legal and regulatory questions

### Quiz Interface

- **Question Cards**: Clean, readable question presentation
- **Multiple Choice**: Four-option multiple choice questions
- **Navigation**: Easy navigation between questions
- **Progress Tracking**: Visual progress indicator
- **Timer**: 60-minute countdown with automatic submission

## 🎨 UI/UX Design

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works seamlessly on all device sizes
- **Accessibility**: WCAG compliant design patterns
- **Smooth Animations**: Framer Motion powered transitions
- **Color Scheme**: Professional blue and white theme

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for API configuration:

```env
VITE_API_BASE_URL=your_api_base_url
VITE_API_TIMEOUT=30000
```

### API Configuration

The application uses Axios for API calls with the following features:

- Request/response interceptors
- Error handling
- Timeout configuration
- Authentication headers

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
