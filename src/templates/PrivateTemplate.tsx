import { Outlet } from 'react-router-dom'

export default function PrivateTemplate() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
