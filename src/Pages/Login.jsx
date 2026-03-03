import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'standard_user' && password === 'secret_sauce') {
      navigate('/products');
    }
    else if(username === 'locked_out_user' && password === 'secret_sauce') {
      navigate('/products');
    } else {
      setError('Epic sadface: Username and password do not match any user in this service');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-dark blue-600">Swag Labs</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded font-semibold hover:bg-orange-900 transition"
          >
            LOGIN
          </button>
        </form>
{/* form , usestate working , purpose , submit button trigger , valdations */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p className="font-medium">Accepted usernames:</p>
          <p>standard_user</p>
          <p>locked_out_user</p>
          <p>problem_user</p>
          <p>performance_glitch_user</p>
          <p className="mt-3">Password for all users: <span className="font-bold">secret_sauce</span></p>
        </div>
      </div>
    </div>
  );
}