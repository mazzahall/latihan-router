import { Link } from 'react-router';

function NotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6 text-center font-sans'>
      <h1 className='text-6xl font-extrabold text-red-500 mb-2'>404</h1>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        Halaman Tidak Ditemukan
      </h2>
      <p className='text-gray-600 mb-6'>
        Maaf, halaman yang Anda cari tidak tersedia.
      </p>

      <Link
        to='/'
        className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors'>
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
