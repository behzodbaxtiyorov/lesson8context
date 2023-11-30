/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function Navbar({user}) {
  return (
    <div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to='/'>
          <h2>HOME</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/add'>
          <h2>{user && 'ADD'}</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/cards'>
          <h2>{user && 'CARDS'}</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/service'>
          <h2>SERVICE</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/login'>
          <button>
            {user ? user.name :'login'}
          </button>
          </Link>
        </li>
        
      </ul>
    </div>
  )
}
