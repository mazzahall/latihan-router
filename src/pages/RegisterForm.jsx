import { useReducer } from 'react';
import { initialState, registerReducer } from '@/store/registerReducer';

function RegisterForm() {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const { username, password, isLoading, error, isSuccess } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length <= 5) {
      dispatch({ type: 'ERROR', message: 'Password Kurang dari 6 karakter' });
      return;
    }

    dispatch({ type: 'SUBMIT' });

    setTimeout(() => {
      dispatch({ type: 'SUCCESS' });
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-sm mx-auto p-6 bg-white rounded-lg shadow space-y-4 w-full'>
      <h2 className='text-xl font-semibold text-gray-800 text-center'>
        Register Account
      </h2>

      {error && <p className='text-red-500 text-sm'>{error}</p>}

      {isSuccess && (
        <p className='text-green-500 text-sm'>Registrasi Berhasil</p>
      )}

      <div>
        <label
          className='block text-sm font-medium text-gray-700 mb-1'
          htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          name='username'
          value={username}
          disabled={isLoading}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'username',
              value: e.target.value,
            })
          }
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100'
        />
      </div>

      <div>
        <label
          className='block text-sm font-medium text-gray-700 mb-1'
          htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          name='password'
          disabled={isLoading}
          value={password}
          onChange={(e) =>
            dispatch({
              type: 'SET_FIELD',
              field: 'password',
              value: e.target.value,
            })
          }
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100'
        />
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:bg-blue-400 flex items-center justify-center gap-2'>
        {isLoading ? 'Harap Tunggu...' : 'Daftar'}
      </button>
    </form>
  );
}

export default RegisterForm;
