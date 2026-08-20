import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className='absolute flex top-0 w-full border gap-6 p-2'>
      <NavLink to='/'>Home</NavLink>

      <NavLink
        to='/profile'
        className={({ isActive }) =>
          isActive ? 'text-red-500' : 'text-black'
        }>
        Profil
      </NavLink>

      <NavLink to='/santri'>About</NavLink>
    </nav>
  );
}

export default Navbar;
