import Image from "next/image";
import image from "../static/self.jpeg";

export const Introduction = () => {
  return (
    <div className="space-y-60">
      <div className="p-4">
        <a
          href="#"
          className="mx-auto flex flex-col items-center bg-white max-w-screen-lg border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="">
            <Image
              src={image}
              alt="Description"
              className="object-cover h-96 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hi! My name is Shotaro Doi.
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Born in 1998 in Tsukuba, Ibaraki pref.
            </p>
          </div>
        </a>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white h-80 js-show-on-scroll mx-auto mt-30">
        <h1 className="text-2xl font-bold mb-4">My Will</h1>
        <p>My will description...</p>
      </div>
    </div>
  );
};
