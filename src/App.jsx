import { Toaster } from './components/ui/toast';
import ProfilPengguna from './pages/ProfilPengguna';
import Navbar from './components/Navbar';

function App() {
  const students = [
    {
      id: 1,
      name: 'Budi',
      role: 'Frontend',
    },
    {
      id: 2,
      name: 'Joko',
      role: 'Backend',
    },
    {
      id: 3,
      name: 'Andi',
      role: 'UI/UX',
    },
  ];

  return (
    <section className='w-screen h-screen relative flex justify-center items-center gap-4'>
      <Toaster />

      <Navbar />

      {students.map((student) => {
        return (
          <ProfilPengguna
            key={student.id}
            id={student.id}
            name={student.name}
            role={student.role}
          />
        );
      })}
    </section>
  );
}

export default App;
