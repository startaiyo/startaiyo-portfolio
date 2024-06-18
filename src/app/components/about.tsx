import doseiImage from "../static/dosei.png";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <div className="bg-gray-800 pt-10 pl-20 rounded-lg text-white h-[500px] items-center max-w-7xl mx-auto">
        <div className="flex gap-20">
          <div>
            <h1 className="text-5xl font-bold">What&apos;s this page?</h1>
            <h2 className="font-bold text-2xl mb-16">このサイトについて</h2>
            <div className="mb-16">
                <p className="font-bold text-xl mb-4">このサイトをご覧になってくださりありがとうございます！</p>
                <p className="mb-2">こちらは私startaiyoのことを知ってもらうためのページです。</p>
                <p className="">自分の経験や未来について紹介しています。どうぞご覧になってください。</p>
            </div>
            <div>
                <p className="font-bold text-xl mb-4">Thank you for visiting my portfolio site!</p>
                <p className="mb-2">This is the web page to know me, startaiyo more.</p>
                <p className="">You can know what I&apos;ve done and I will do through it, please see them!</p>
            </div>
          </div>
          <div>
            <Image src={doseiImage} alt="イメージの土星" className="w-[500px]"></Image>
            <div className="text-right">イメージの土星</div>
          </div>
        </div>
      </div>
    </>
  );
};
