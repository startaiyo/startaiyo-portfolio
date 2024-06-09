export const MyHistory = () => {
  const calculateAge = () => {
    const birthDate = new Date('1998-01-04');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current month is before the birth month
    // or it's the birth month but the current day is before the birth day
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg text-white h-80 js-show-on-scroll mx-auto max-w-screen-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Startaiyo&apos;s History</h1>
        <ul className="list-disc pl-4 list-none">
          <li className="mb-3"><span className="font-bold text-xl">1998/01</span> {`born in Japan(now age ${calculateAge()})`}</li>
          <li className="mb-3"><span className="font-bold text-xl">2020/12</span> started learning programming, from HTML/CSS and Python.</li>
          <li className="mb-3"><span className="font-bold text-xl">2021/03</span> graduated from Pharmacy faculty of Kyoto University.</li>
          <li className="mb-3"><span className="font-bold text-xl">2021/06</span> started to work as an Web engineer, using AWS and TypeScript at Combz.inc.</li>
          <li className="mb-3"><span className="font-bold text-xl">2023/03</span> graduated from Pharmacy faculty of Kyoto Undergraduate University, got master degree of Pharmacy.</li>
          <li className="mb-3"><span className="font-bold text-xl">2023/04</span> started to work as an mobile engineer, using Swift at DeNA.</li>
        </ul>
      </div>
    </>
  );
};
