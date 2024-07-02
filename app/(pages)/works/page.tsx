import { NextPage } from "next";
import Image from "next/image";
import { works } from "./works.config";

const Page: NextPage = () => {
    return (
        <>
            <h2 className="text-2xl font-bold tracking-wider">成果・作品</h2>
            <p className="mt-4">
                ここでは僕が今まで作って(書いて)きた作品を展示しています。
            </p>
            <div className="mt-8 grid grid-cols-1 rounded bg-slate-400/10 px-6 py-12 sm:grid-cols-2">
                {works.map((work, index) => (
                    <div key={index} className="p-4">
                        <Image
                            src={work.image.path}
                            width={work.image.width}
                            height={work.image.height}
                            alt={work.name}
                            className="h-full w-full rounded-lg object-contain"
                        />
                        <p className="text-center text-lg tracking-wider">
                            {work.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Page;
