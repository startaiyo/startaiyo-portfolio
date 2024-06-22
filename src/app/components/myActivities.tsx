export const MyActivities = () => {
  return (
    <>
      <div className="bg-gray-700 p-4 rounded-lg text-white js-show-on-scroll mx-auto max-w-screen-lg">
        <h1 className="text-2xl font-bold mb-4">What I&apos;ve Done</h1>
        <div className="flex flex-col gap-4">
          <a
            href="https://startaiyo.github.io/swift-onboarding/docs/startaiyo-swift-onboarding"
            className="font-bold bg-gray-500 p-4 rounded-lg text-white hover:bg-gray-300"
          >
            Create Swift Onboarding project
          </a>
          <a
            href="https://www.allm.net/join/"
            className="bg-gray-500 p-4 rounded-lg text-white hover:bg-gray-300"
          >
            <div className="font-bold mb-4">Working at DeNA, implementing an iOS App of the medical information sharing service.</div>
            <div>What I&apos;ve done here:
            <ul className="list-disc pl-4">
              <li>Improving the onboarding document from the beginner&apos;s perspective</li>
              <li>Making whole new feature by myself in one month</li>
              <li>Decreasing the time of developing process by improving the flow, about 1/3 partially.</li>
              <li>Making a feature with outsourcing company to meet the criteria for legal requirement of App</li>
            </ul>
            </div>
          </a>
          <a
            href="https://qiita.com/startaiyo"
            className="bg-gray-500 p-4 rounded-lg text-white hover:bg-gray-300"
          >
            <div className="font-bold">Writing articles about Swift on Qiita</div>
          </a>
          <a
            href="https://github.com/startaiyo/Eput2"
            className="bg-gray-500 p-4 rounded-lg text-white hover:bg-gray-300"
          >
            <div className="font-bold">Create Eput App - an audio study application in iOS</div>
          </a>
        </div>
      </div>
    </>
  );
};
