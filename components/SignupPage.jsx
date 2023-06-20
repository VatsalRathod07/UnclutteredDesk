import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkwhite-0">
      <div className="max-w-md w-full mx-auto p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign up for Uncluttered Desk</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-ligthblack-0">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 bg-white rounded-sm focus:outline-none sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-ligthblack-0">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 bg-white rounded-sm focus:outline-none sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block font-medium text-ligthblack-0">Confirm password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-2 bg-white rounded-sm focus:outline-none sm:text-sm"
            />
          </div>
          <div>
            <button e="submit" className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 ">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
