// import { useRouter } from "next/navigation";
import Heading from './Heading';
// import Button from './Button';
import Link from 'next/link';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  showReset,
  subtitle = 'Try changing or removing some of your filters',
  title = 'No exact matches',
}) => {
  // const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />

      <div className="w-48 mt-4">
        {showReset && (
          <Link
            href="/"
            className="hover:opacity-80 rounded-lg transition w-fit bg-rose-500 border-rose-500 text-white py-3 px-6 text-md font-semibold border-2"
          >
            Remove all filters
          </Link>

          // <Button
          //   outline
          //   label="Remove all filters"
          //   onClick={() => router.push("/")}
          // />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
