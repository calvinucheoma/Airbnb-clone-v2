import Link from 'next/link';
import EmptyState from './components/EmptyState';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <EmptyState title="Sorry" subtitle="This page does not exist..." />
      <Link
        href="/"
        className="hover:opacity-80 rounded-lg transition w-fit bg-rose-500 border-rose-500 text-white py-3 px-6 text-md font-semibold border-2"
      >
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
