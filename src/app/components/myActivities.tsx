export const MyActivities = () => {
  return (
    <>
      <div className="bg-gray-700 p-4 rounded-lg text-white h-80 js-show-on-scroll mx-auto">
        <h1 className="text-2xl font-bold mb-4">What I&apos;ve Done</h1>
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
    </>
  );
};
