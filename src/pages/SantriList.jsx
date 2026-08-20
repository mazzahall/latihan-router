import { Button } from '@/components/ui/button';
import { useState } from 'react';

function SantriList() {
  const [name, setName] = useState('');
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Budi',
      age: 11,
    },
    {
      id: 2,
      name: 'Andi',
      age: 11,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setStudents((prev) => [
      ...prev,
      {
        id: 3,
        name: formData.get('username'),
        age: 12,
      },
    ]);
  };

  return (
    <section className='flex flex-col gap-8'>
      <form
        onSubmit={handleSubmit}
        className='flex gap-2'>
        <div className='flex flex-col'>
          <label
            htmlFor=''
            className='text-sm'>
            Nama
          </label>
          <input
            className='border'
            type='text'
            name='username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Button
          size='sm'
          type='submit'
          className='self-end'>
          Tambah
        </Button>
      </form>

      <div>
        {students.map((student) => {
          return <div key={student.id}>{student.name}</div>;
        })}
      </div>
    </section>
  );
}

export default SantriList;
