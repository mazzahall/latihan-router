import Navbar from '@/components/Navbar';
import { useParams } from 'react-router';

function ProfilDetail() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />

      <div className='mt-16'>
        <h1>Halaman Profil Detail</h1>

        <p>Ini adalah halaman profil milik murid yang memiliki id: {id}</p>
      </div>
    </div>
  );
}

export default ProfilDetail;
