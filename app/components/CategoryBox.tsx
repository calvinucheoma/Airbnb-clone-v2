'use client';

import { IconType } from 'react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback } from 'react';
import queryString from 'query-string';
import Loader from './Loader';

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  description?: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  description = '',
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = queryString.parse(searchParams.toString());
      // we parse them so that they become an object because by default searchParams.toString() is a string
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (searchParams?.get('category') === label) {
      delete updatedQuery.category;
      // if the category we clicked on has already been selected in the url, we want to reset it i.e remove it from the newest query.
      // so like toggling it on and off
    }

    const url = queryString.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, searchParams, router]);

  return (
    <Suspense fallback={<Loader />}>
      <div
        className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
          selected ? 'border-b-neutral-800' : 'border-transparent'
        } ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
        onClick={handleClick}
      >
        <Icon size={26} />
        <div className="font-medium text-sm">{label}</div>
      </div>
    </Suspense>
  );
};

export default CategoryBox;
