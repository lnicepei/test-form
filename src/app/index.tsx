import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, ThemeProvider } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter />
    </ThemeProvider>
  </StrictMode>,
)
