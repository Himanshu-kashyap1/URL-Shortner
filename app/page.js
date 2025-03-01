import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortner in the world.
          </p>
          <p className="px-15">
            We are the most stright forward URL shortner in the world. Most of
            the URL shortners are filled with ads and popups. We are not like
            them. We are simple and easy to use.
          </p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="border text-white rounded-lg px-3 bg-purple-500 shadow-lg py-1 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="border text-white rounded-lg px-3 bg-purple-500 shadow-lg py-1 font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            alt="an image of a vector"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
