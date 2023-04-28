import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-lg mx-auto flex-grow flex flex-col items-center justify-center">
        <Link href="/">
          <img src="https://cdn.dribbble.com/users/2536676/screenshots/7374570/media/1ddca851d98b2dd153d9b0b0f5449ae5.gif" alt="404 not found" className="page-not-found w-full object-contain md:w-auto md:max-w-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
