import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-lg mx-auto flex-grow flex flex-col items-center justify-center">
        <Link href="/">
          <img src="https://cdn.dribbble.com/users/1663650/screenshots/14443731/media/5418c023f1c6910c38154892854bea68.gif" alt="404 not found" className="page-not-found w-full object-contain md:w-auto md:max-w-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
