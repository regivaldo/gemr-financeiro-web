import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicTemplate from './templates/PublicTemplate'
import PrivateTemplate from './templates/PrivateTemplate'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicTemplate />}>
          <Route index element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/p/" element={<PrivateTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
