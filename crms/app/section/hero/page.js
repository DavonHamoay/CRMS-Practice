import Background from '@/app/asset/lila1.jpg';

export default function Hero() {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className="text-4xl font-bold text-gray-800 bg-white bg-opacity-70 p-4 rounded-md">
          Canine Registration<br />and<br />Management System
        </h1>
        <a
          href="/pages"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </main>
    </>
  );
}
