import ReactDOM from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import App from './App'
import { ThemeProvider } from './components/themeProvider'
import * as Sentry from '@sentry/react'

console.log(import.meta.env.VITE_SENTRY_ENVIRONMENT)
Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
        Sentry.feedbackIntegration({
            colorScheme: 'dark',
        }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ['https://ozzurep.up.railway.app/'],

    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <>
            <StrictMode>
                <ThemeProvider defaultTheme="dark">
                    <App />
                </ThemeProvider>
            </StrictMode>
        </>
    )
}
