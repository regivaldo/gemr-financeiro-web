import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes'
import GlobalStyles from './components/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRouter />
  </React.StrictMode>,
)
