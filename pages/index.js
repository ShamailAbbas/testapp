import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Image from 'next/image';
import search from '/public/icons/search.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Head>
        <title>Test App</title>
        <meta name="description" content="Wynter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="flex justify-between w-full md:max-w-[800px] mt-24 mb-4 ">
        <p className="font-NotoSansJP font-[700] text-[22px]  text-[#000000] ">{`テンプレート`}</p>
        <div className="relative w-60 h-8 border-2 rounded-lg border-[#F1F4FB]  flex items-center">
          <div className="ml-2">
            <Image src={search} alt="search" width="20" height="5" />
          </div>
          <input
            className="h-full w-full  px-2 outline-none border:none"
            placeholder="検索"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  justify-between items-center max-w-[800px] ">
        {[1, 2, 3, 4, 5, 6].map((i, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
