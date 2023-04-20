import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-lg mx-auto flex-grow flex flex-col items-center justify-center">
        <img src="https://cdn.dribbble.com/users/46355/screenshots/16843933/media/4cb734dfc26ce2030c375ebf004e5e9c.png?compress=1&resize=1000x750&vertical=top" alt="404 not found" className="w-full md:max-w-2xl" />
        <p className='mb-1 mt-2 font-medium tracking-new font-mono'>Opps! something went wrong</p>
        <Link href="/">
          <p className="text-ligthblack-0 font-signature capitalize tracking-wide font-bold py-3 px-6 rounded-full">
            Go back home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
