"use client";
import DefaultLayout from "@/components/default-layout";
import HeroSection from "@/components/porfolio/hero-section";
import WorkSection from "@/components/porfolio/work-section";

import { useEffect, useRef } from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return <main className="max-w-screen-lg w-full px-3 ">{children}</main>;
}


export default function Home() {
  const carsMedia = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (carsMedia.current) {
      carsMedia.current.play().catch((err) => console.log(err));
    }
  }, [])

  return (
    <DefaultLayout>
      <HomeLayout>

        <HeroSection />
        <WorkSection />
        {/* <section className="pb-[7rem]">
          <div className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
              <div className="h-[14rem]">
                <div className="rounded-3xl flex flex-row bg-[#FCE7BE]">
                  <video
                    ref={carsMedia}
                    className="h-full rounded-l-3xl"
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source
                      src={
                        "/assets/media/29a44653b72cd7c1b20b7a14a9de9292_t1.mp4"
                      }
                      type="video/mp4"
                    />
                  </video>
                  <div className="p-2">
                    <h2 className="text-3xl font-semibold">I loved cars 🏎️</h2>
                  </div>
                </div>
              </div>
              <div className="h-[327px]">
                <div className="rounded-3xl size-full bg-green-200">
                  <div className="relative">
                    <div className="w-[36rem] ml-[0.3rem] -mt-[3.6rem] absolute">
                      <Image
                        src="/assets/img/author.png"
                        alt="sample"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounde-r-3xl"
                        style={{ width: "100%", height: "auto" }}
                        priority={true}
                      />
                    </div>
                    <figcaption className="relative p-5 w-1/2">
                      <h2 className="text-gray-800 font-medium">
                        I love cool things Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Quas voluptatum autem
                        quasi ullam nesciunt, distinctio facere omnis
                      </h2>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        <section className="h-[780px] w-full">
          <div className="flex flex-col space-y-3">
            <div className="grid text-center">
              <label>To make that possible</label>
              <h2 className="text-4xl font-bold">I used these technology</h2>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-4 grid-rows-3 gap-5">
                {/* {new Array(15).fill(0).map((i, idx) => (
                  <div
                    key={idx}
                    className="size-[150px] bg-gray-100 rounded-3xl p-5"
                  >
                    A
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </section>

        <div className="h-[780px] w-full">
          <div className="flex flex-col">
            <div className="w-full flex justify-center">
              <div className="relative">
                {/* <div className="grid text-center z-10 text-red-500 absolute">
                  <label>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </label>
                  <h2>dsadasds</h2>
                </div>
                <div className="absolute h-[500px] rounded-3xl bg-white w-[300px] p-5">
                  A
                </div>
                <div className="absolute -mt-10 -left-5 h-[500px] rounded-3xl bg-white w-[300px] p-5">
                  B
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </DefaultLayout>
  );
}
