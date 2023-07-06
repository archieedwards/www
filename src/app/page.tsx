import Image from "next/image";
import Me from "@/../public/me.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src={Me}
          alt="Picture of Archie"
          priority
          className="w-16 sm:w-20 rounded-full"
        />
        <div className="ml-4 sm:ml-6">
          <h1 className="text-lg sm:text-xl font-medium">Archie Edwards</h1>
          <p className="mt-[0.5px] sm:mt-1 text-sm sm:text-base">
            Senior Growth Engineer at{" "}
            <a href="https://veed.io" className="text-slate-500 underline">
              Veed.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
