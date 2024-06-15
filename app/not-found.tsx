"use client";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import EmptyState from "./components/EmptyState";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <EmptyState title="Sorry" subtitle="This page does not exist..." />
      <button
        onClick={() => router.push("/")}
        className="hover:opacity-80 rounded-lg transition w-fit bg-rose-500 border-rose-500 text-white py-3 px-6 text-md font-semibold border-2"
      >
        Go to homepage
      </button>
    </div>
  );
};

export default NotFound;
