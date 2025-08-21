import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const TailwindCssPage = () => {
  const [count, setCount] = useState(0);

  const check = (num) => {
    if (num >= 5 && num < 50) {
      return <div className='text-green-500'>{num}</div>;
    } else if (num >= 50 && num < 500) {
      return <div className='text-blue-500'>{num}</div>;
    } else if (num >= 500) {
      return <div className='text-purple-500'>{num}</div>;
    } else if (num <= -5 && num > -50) {
      return <div className='text-red-500'>{num}</div>;
    } else if (num <= -50 && num > -500) {
      return <div className='text-orange-500'>{num}</div>;
    } else if (num <= -500) {
      return <div className='text-yellow-500'>{num}</div>;
    } else return num;
  };

  return (
    <div className='w-full flex justify-center items-center border'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex w-64 justify-between'>
          <button className='border p-2' onClick={() => setCount((pr) => pr - 1)}>
            - 1
          </button>
          <button className='border p-2' onClick={() => setCount((pr) => pr - 10)}>
            - 10
          </button>
          <button className='border p-2' onClick={() => setCount((pr) => pr - 100)}>
            - 100
          </button>
          <button className='border p-2' onClick={() => setCount((pr) => pr + 1)}>
            + 1
          </button>
          <button className='border p-2' onClick={() => setCount((pr) => pr + 10)}>
            + 10
          </button>
          <button className='border p-2' onClick={() => setCount((pr) => pr + 100)}>
            + 100
          </button>
        </div>

        <div className='p-20 font-bold text-9xl'>{check(count)}</div>

        <p
          className={twMerge(
            'text-stone-800',
            count >= 5 && 'text-green-500',
            count >= 50 && 'text-blue-500',
            count >= 500 && 'text-purple-500',
            count <= -5 && 'text-red-500',
            count <= -50 && 'text-orange-500',
            count <= -500 && 'text-yellow-500'
          )}
        >
          <div className='p-20 font-bold text-9xl'>{count}</div>
        </p>
      </div>
    </div>
  );
};

export default TailwindCssPage;
