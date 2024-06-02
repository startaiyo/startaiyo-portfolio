"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <>
      <a href="#" className="block max-w-almost-full mx-auto p-6 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Startaiyo&apos;s portfolio</h5>
      </a>

      <div className="p-4 js-show-on-scroll">
        <div className="h-screen bg-gray-300 p-4">What&apos;s this page</div>
        <div className="h-screen bg-gray-600 p-4 my-4 js-show-on-scroll">
          Who am I?
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-red-500 p-4 h-64 text-white js-show-on-scroll">
            <h1>Startaiyo&apos;s history</h1>
          </div>

          <div className="bg-green-500 p-4 h-64 text-white js-show-on-scroll">
            <h1>What&apos;s I&apos;ve done</h1>
          </div>
        </div>

        <div className="h-screen bg-gray-300 p-4 my-4 js-show-on-scroll">
          My will
        </div>
      </div>
    </>
  );
}

const scrollFadeIn = () => {
  const callback = function (entries: any[]) {
    entries.forEach(
      (entry: {
        isIntersecting: any;
        target: {
          classList: {
            add: (arg0: string) => void;
            remove: (arg0: string) => void;
          };
        };
      }) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideIn");
        } else {
          entry.target.classList.remove("animate-slideIn");
        }
      }
    );
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
};
