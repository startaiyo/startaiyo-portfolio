import Image from "next/image";
import selfImage from "../static/self.jpeg";
import pianoImage from "../static/piano.jpeg";
import cookingImage from "../static/cooking.jpeg";
import tripImage from "../static/trip1.jpeg";
import tripImage2 from "../static/trip2.jpeg";

export const Introduction = () => {
  return (
    <div className="space-y-60">
      <div className="p-4">
        <div
          className="mx-auto flex flex-col items-center bg-white max-w-screen-lg border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="">
            <Image
              src={selfImage}
              alt=""
              className="object-cover h-96 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
          </div>
          <div className="mx-auto p-4">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hi! My name is Shotaro Doi.
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Born in 1998 in Tsukuba, Ibaraki pref.
            </p>
          </div>
        </div>
      </div>
      <div className="js-show-on-scroll">
        <div
          className="mx-auto flex items-center bg-white max-w-screen-lg border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 justify-end"
        >
          <div className="mx-auto">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              My Hobbies
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Piano, Cooking, Travel, Running, and Programming.
            </p>
          </div>
          <div className="">
            <Image
              src={tripImage}
              alt="Description"
              className="object-cover w-[235px] md:rounded-none"
            />
          </div>
          <div className="">
            <Image
              src={pianoImage}
              alt="Description"
              className="object-cover h-96 md:h-auto md:w-48 rounded-t-lg"
            />
            <Image
              src={cookingImage}
              alt="Description"
              className="object-cover h-96 md:h-auto md:w-48"
            />
            <Image
              src={tripImage2}
              alt="Description"
              className="object-cover h-96 md:h-auto md:w-48 rounded-b-lg"
            />
          </div>
        </div>
      </div>
      <div className="js-show-on-scroll">
        <div
          className=" h-96 w-full mx-auto flex items-center bg-white max-w-screen-lg border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="mx-auto">
            <h1 className="text-center mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              My skills
            </h1>
            <h3 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Communication
            </h3>
            <p className="text-center mb-8 font-normal text-gray-700 dark:text-gray-400">
              {'Japanese(Native), English(Business)'}
            </p>
            <h3 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tech
            </h3>
            <p className="text-center mb-1 font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Used in business:</span> {'Swift, AWS, TypeScript(Next.js), JavaScript, Ruby, PostgresSQL, HTML/CSS'}
            </p>
            <p className="text-center mb-8 font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Used in hobby:</span> {'Python, PHP(Laravel), Golang, GCP, Vue.js etc'}
            </p>
          </div>
        </div>
      </div>
      <div className="js-show-on-scroll">
        <div
          className=" h-96 w-full mx-auto flex items-center bg-white max-w-screen-lg border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="mx-auto">
            <h1 className="text-center mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {"My characteristics"}
            </h1>
            <h3 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {"Who am I in a word?"}
            </h3>
            <p className="text-center mb-1 font-normal text-gray-700 dark:text-gray-400">
              {`I'm very "curious" person.`}
            </p>
            <p className="text-center mb-8 font-normal text-gray-700 dark:text-gray-400">
              {"I like to do something new, or go to the places I've never been to, and I feel happy to know new things."}
            </p>
            <h3 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {"What I'm interested in for now?"}
            </h3>
            <p className="text-center mb-1 font-normal text-gray-700 dark:text-gray-400">
              Studying English, design and cooking...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
