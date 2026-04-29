"use client";

import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/context";
import Link from "next/link";

function PageHeader() {
  const { user } = useAppContext();
  const userName = user?.username;
  const router = useRouter();

  return (
    <header className="bg-green-300 text-green-900 text-3xl font-bold p-5 grid grid-cols-3">
      <button
        onClick={() => router.back()}
        className="flex flex-start hover:bg-green-400 text-green-900"
      >
        &lt;
      </button> 

      <Link className="flex justify-center" href="/directory">
        <p>🌱</p>
        <h1>Plants</h1>
        <p>🌳</p>
      </Link>
      

      <div className="text-right">
        {userName ? (
          <Link className="text-xl" href={`/garden/${userName}`}>👤 {userName}'s Garden</Link>
        ) : (
          <Link href="/" className="bg-green-400 p-2 text-xl text-white rounded-md hover:bg-green-600 hover:shadow-lg">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default PageHeader;