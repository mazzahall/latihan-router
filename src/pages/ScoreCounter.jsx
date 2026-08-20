import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { toast } from './ui/toast';

function ScoreCounter({ teamName }) {
  const [score, setScore] = useState(0);
  const scoreRef = useRef(null);

  const isWin = score == 11;

  const increment = () => {
    if (score < 11) {
      setScore((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  useEffect(() => {
    const scoreElement = scoreRef?.current;

    if (score === 11) {
      scoreElement.style.color = 'green';
    } else {
      scoreElement.style.color = '';
    }

    toast.add({
      title: `Tim ${teamName} mencetak skor ke ${score}`,
      description: `Sisa ${score - 11} untuk menang`,
    });
  }, [score]);

  if (isWin) return <div>Aku Menang</div>;

  return (
    <div className='text-center border w-75 bg-gray-200 rounded-lg p-6'>
      <h3 className='text-2xl font-semibold text-teal-600 '>Tim {teamName}</h3>
      <p className='text-xs text-slate-500'>Maksimal Poin: 11</p>

      <h1
        ref={scoreRef}
        className='text-9xl py-10 transition-colors duration-200'>
        {score}
      </h1>

      {isWin && (
        <h3 className='text-2xl font-semibold text-teal-600 animate-bounce'>
          Tim {teamName} Menang!
        </h3>
      )}

      <div className='flex gap-4 mt-4'>
        <Button
          variant='destructive'
          className='flex-1'
          onClick={decrement}>
          -1
        </Button>
        <Button
          className='flex-1'
          onClick={increment}>
          +1
        </Button>
      </div>

      <Button
        className='w-full mt-2 bg-blue-500'
        onClick={resetScore}>
        Reset Score
      </Button>
    </div>
  );
}

export default ScoreCounter;
