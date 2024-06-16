'use client';

import { useEffect, useState } from "react";
import { TabButton } from "./components/tabButton";
import { About } from "./components/about";
import { MyHistory } from "./components/myHistory";
import { MyActivities } from "./components/myActivities";
import { MyWill } from "./components/myWill";
import { Introduction } from "./components/introduction";

export default function Home() {
  const tabs = ["About", "Who am I", "My history", "My activities", "My will"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  useEffect(() => {
    scrollFadeIn();
  }, [activeTab]);

  const tabChange = () => {
    switch (activeTab) {
      case tabs[0]:
        return <About/>
      case tabs[1]:
        return <Introduction/>
      case tabs[2]:
        return <MyHistory/>
      case tabs[3]:
        return <MyActivities/>
      case tabs[4]:
        return <MyWill/>
      case tabs[5]:
        return <MyWill/>
    }
  }

  return (
    <>
      <div className="bg-backgroundImage bg-cover min-h-screen">
        <div className="bg-opacity-80 p-8">
          <div className="bg-center bg-no-repeat bg-imageTitle h-80 text-3xl font-bold bg-cover flex justify-center items-center text-center">
            Startaiyo&apos;s Portfolio
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {
              tabs.map((e) => {
                return (
                  <TabButton key={e} name={e} isActive={activeTab === e} onClick={() => {setActiveTab(e)}}/>
                )
              })
            }
          </div>

          <div className="w-full">{tabChange()}</div>

          
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
