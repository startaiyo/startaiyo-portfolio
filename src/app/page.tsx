'use client';

import { useEffect, useState } from "react";
import { TabButton } from "./components/tabButton";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("A");
  useEffect(() => {
    scrollFadeIn();
  }, []);

  const tabChange = () => {
    switch (activeTab) {
      case "A":
        return <A></A>
      default:
        return <B></B>
    }
  }

  const A = () => {
    return <div className="text-white">a</div>
  }

  const B = () => {
    return <div className="text-white">b</div>
  }

  return (
    <>
      <div className="bg-backgroundImage bg-cover min-h-screen">
        <div className="bg-opacity-80 p-8 rounded-lg">
          <div className="bg-center bg-no-repeat bg-imageTitle h-80 text-3xl font-bold mb-8 bg-cover flex justify-center items-center text-center">
            Startaiyo's Portfolio
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {
              ["A", "B", "C"].map((e) => {
                return (
                  <TabButton key={e} name={e} isActive={activeTab === e} onClick={() => {setActiveTab(e)}}/>
                )
              })
            }
          </div>

          <div>{tabChange()}</div>

          <div className="p-4 grid grid-cols-1 gap-10 js-show-on-scroll">
            <div className="bg-gray-800 p-4 rounded-lg text-white h-80 js-show-on-scroll">
              <h1 className="text-2xl font-bold mb-8">What's this page</h1>
              <p>What's this page description...</p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg text-white h-80 js-show-on-scroll">
              <h1 className="text-2xl font-bold mb-4">Who am I?</h1>
              <p>Who am I description...</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-white h-80 js-show-on-scroll">
              <h1 className="text-2xl font-bold mb-4">Startaiyo's History</h1>
              <ul className="list-disc pl-4">
                <li>1998 born in Japan</li>
                <li>2023 graduated from university</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg text-white h-80 js-show-on-scroll">
              <h1 className="text-2xl font-bold mb-4">What I've Done</h1>
              <div className="flex flex-col gap-4">
                <a
                  href="https://Eput.com"
                  className="bg-green-500 p-4 rounded-lg text-white hover:bg-green-600"
                >
                  Create Eput App
                </a>
                <a
                  href="https://company.com"
                  className="bg-blue-500 p-4 rounded-lg text-white hover:bg-blue-600"
                >
                  Working at Company
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-white h-80 js-show-on-scroll">
              <h1 className="text-2xl font-bold mb-4">My Will</h1>
              <p>My will description...</p>
            </div>
          </div>
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
