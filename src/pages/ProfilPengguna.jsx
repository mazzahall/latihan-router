import { Link } from 'react-router';
import Navbar from '../components/Navbar';

function ProfilPengguna({ id, name, role }) {
  return (
    <>
      <Navbar />

      <Link to={`/profile/${id}`}>
        <div className='p-6 max-w-sm bg-white rounded-xl shadow-md border border-gray-100 space-y-2 mt-20'>
          <h2 className='text-xl font-bold text-gray-900'>
            Nama: <span className='text-blue-600 font-semibold'>{name}</span>
          </h2>
          <p className='text-gray-500 font-medium'>
            Peran: <span className='text-gray-700 font-semibold'>{role}</span>
          </p>
        </div>
      </Link>
    </>
  );
}

export default ProfilPengguna;
