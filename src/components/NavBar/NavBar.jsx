import { Link, NavLink } from 'react-router-dom'
import logo from './../../assets/logo.png'

function NavBar() {
  function handleLink({ isActive, isPending }) {
    return isActive ? 'text-red-500 underline' : isPending ? 'pending' : ''
  }

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-3">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex gap-3">
        <NavLink to={`/`} className={handleLink}>
          Home
        </NavLink>
        <NavLink to="/donations" className={handleLink}>
          Donation
        </NavLink>
        <NavLink to="/statistics" className={handleLink}>
          Statistic
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
