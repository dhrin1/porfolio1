import DefaultLayout from "@/components/default-layout";
import Image from "next/image";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return <main className="max-w-screen-lg w-full px-3 ">{children}</main>;
}

function HeroSection() {
  return (
    <section className="h-[786px] flex">
      <div className="size-full flex items-center justify-center">
        <div className="flex flex-col ">
          <div className="flex justify-center mx-auto mb-4">
            <div className="size-[100px] rounded-full bg-red-200 border "></div>
          </div>
          <div className="grid grid-y text-center">
            <h6 className="text-2xl text-gray-800">Hi there! 👋🏻</h6>
            <h2 className="font-bold text-4xl ">I'm Alhdrin</h2>
            <label>Full Stack Developer</label>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="h-[786px] flex">
      <div className="flex justify-center w-full">
        <div className="grid  sm:grid-cols-2 gap-4 h-2/3 w-full">
          <div className="size-full relative ">
            <div className="border absolute -mt-5 right-5 rounded-3xl size-full bg-red-100"></div>
            <div className="border absolute rounded-3xl size-full bg-red-200"></div>
          </div>
          <div className="size-full border rounded-3xl p-10">
            <div className="flex w-full items-center h-full">
              <div className="h-full flex flex-col space-y-2">
                <h2 className="text-4xl font-bold">Personal hits all-time</h2>
                <p className="text-xl font-semibold">
                  As a versatile developer skilled in both frontend and backend
                  development, I excel at creating engaging user interfaces and
                  robust server-side solutions, seamlessly bridging technical
                  complexities with client needs to deliver exceptional projects
                  and eager to collaborate on groundbreaking solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className="h-auto flex ">
      <div className="w-full mb-5">
        <div className="grid grid-y-2">
          <h6>Interested?</h6>
          <h2 className="text-4xl font-bold w-[70%]">
            Revealing my collection of{" "}
            <span className="text-gray-200">projects</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export interface Company {
  title: string;
  name: string;
}

const company: Company[] = [
  { title: "Title 1", name: "Description 1" },
  { title: "Title 2", name: "Description 2" },
  { title: "Title 3", name: "Description 3" },
  { title: "Title 4", name: "Description 4" },
  { title: "Title 4", name: "Description 4" },
];

export default function Home() {
  return (
    <DefaultLayout>
      <HomeLayout>
        {/* <HeroSection />
        <AboutSection />
        <WorkSection /> */}
        <section className="h-auto w-full">
          <div className="h-full flex py-[7rem]">
            <div className="w-full">
              <div className="flex flex-col space-y-5 sm:space-y-3">
                <h1 className="text-4xl font-semibold">Hi there!👋🏻</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 w-full">
                  <div className="col-span-3 md:col-span-2 h-[14rem] rounded-3xl bg-red-100 ">
                    <div className="size-full flex relative items-center">
                      <div className="relative grid h-full p-5 z-10">
                        <div className="flex h-full items-end md:items-start  ">
                          <div className="grid">
                            <label className="text-sm md:text-xl order-1 md:order-0  font-semibold text-gray-800">
                              Software Developer
                            </label>
                            <h1 className="text-xl   md:text-4xl order-0 md:order-1 font-bold text-gray-800 drop-shadow-none md:drop-shadow-sm">
                              Alhdrin Gungon
                            </h1>
                          </div>
                        </div>
                        <div className="hidden md:flex h-full items-end ">
                          <button className="flex items-center h-8  px-3 rounded-full  hover:bg-red-200 transition-colors duration-200 bg-white text-gray-800 ">
                            <label className="cursor-pointer font-medium text-xs">
                              Let's connect {"->"}
                            </label>
                          </button>
                        </div>
                      </div>
                      <div className="absolute right-0 ">
                        <div className="relative">
                          <div className="absolute size-full">
                            <div className="flex justify-around relative ">
                              <div className="size-10 mt-[13rem] -ml-[12rem] absolute">
                                <Image
                                  src="/assets/icons/astronaught.png"
                                  alt="sample"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  priority={true}
                                />
                              </div>

                              <div className="size-10 mt-[2rem] -ml-[9rem] absolute">
                                <Image
                                  src="/assets/icons/rocket.png"
                                  alt="sample"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  priority={true}
                                />
                              </div>

                              <div className="size-10 mt-[8rem] -ml-[11rem] absolute">
                                <Image
                                  src="/assets/icons/lightning.png"
                                  alt="sample"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  priority={true}
                                />
                              </div>
                              <div className="size-12 mt-[9em] -mr-[13rem] absolute">
                                <Image
                                  src="/assets/icons/astronomy.png"
                                  alt="sample"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  priority={true}
                                />
                              </div>

                              <div className="size-10 mt-[15em] ml-[10rem] absolute">
                                <Image
                                  src="/assets/icons/headphone.png"
                                  alt="sample"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  priority={true}
                                />
                              </div>

                              <div className="size-10 mt-[3em] ml-[12rem] absolute">
                                <Image
                                  src="/assets/icons/bulb.png"
                                  alt="sample"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  priority={true}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-[17rem] -mt-[2.5rem]">
                            <Image
                              src="https://res.cloudinary.com/dhrin1/image/upload/c_limit,w_960/f_auto/q_auto/agitlgsijcx6leygfzag?_a=BAVAcMGd0"
                              alt="sample"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="rounde-r-3xl"
                              style={{ width: "100%", height: "auto" }}
                              priority={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-1">
                    <div className="flex justify-center items-center h-full">
                      <div className="grid relative">
                        {new Array(4).fill(0).map((item, idx) => (
                          <div
                            key={idx}
                            className={`size-[14rem] absolute border border-black -mt-[${
                              idx * 2
                            }] -ml-[${+idx * 2}] rounded-3xl bg-violet-200 p-5`}
                          >
                            {idx}
                          </div>
                        ))}
                        <div className="size-[14rem] rounded-3xl border bg-violet-200">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[780px]">
          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl font-semibold ">I loved cars 🏎️</h2>
            <video className="h-[20rem] rounded-3xl" autoPlay={true} loop muted>
              <source
                src={"/assets/media/29a44653b72cd7c1b20b7a14a9de9292_t1.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <section className="h-[780px] w-full ">
          <div className="h-full">
            <div className="flex flex-col space-y-5">
              <h2 className="text-2xl font-semibold ">
                Revealing my works of collection projects 📦
              </h2>
              <div className="flex flex-row space-x-5 overflow-x-scroll w-full">
                {new Array(8).fill(0).map((v, idx) => (
                  <div
                    key={idx}
                    className="flex-none h-[500px] rounded-3xl bg-red-100 w-[300px] p-5"
                  >
                    A
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-end">
                <button className="rounded-full size-12 bg-white ">
                  <label className="font-bold text-xl  text-gray-800">
                    {"->"}
                  </label>
                </button>
              </div>
            </div>
          </div>
        </section>

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
