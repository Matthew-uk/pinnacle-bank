// app/not-found.tsx (app directory) or pages/404.js (pages directory)
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center !font-montserrat">
      {/* Construction Image */}
      {/* <div className="relative mb-6">
        <Image
          src="/media/construction.png"
          alt="Under Construction"
          className="w-64 h-64"
          width={48}
          height={48}
        />
      </div> */}
      {/* <Image
        src="/media/construction.png"
        alt="Under Construction"
        className="w-[50px] h-[50px]"
        width={48}
        height={48}
      /> */}

      {/* Title */}
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Page Under Construction 🚧
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-700 mb-6">
        Sorry for the inconvenience. This page is currently under development.
        🚀
      </p>

      {/* Navigation */}
      <Link href="/">
        <span className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Go Back to Home
        </span>
      </Link>

      {/* Animation */}
      <div className="mt-8">
        <p className="text-gray-500">
          We are working hard to bring this page live!
        </p>
        <div className="flex justify-center mt-4 space-x-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full animate-ping duration-1000"></div>
          <div className="w-6 h-6 bg-blue-600 rounded-full animate-ping duration-1000 delay-200"></div>
          <div className="w-6 h-6 bg-blue-600 rounded-full animate-ping duration-1000 delay-500"></div>
        </div>
      </div>
    </div>
  );
}
