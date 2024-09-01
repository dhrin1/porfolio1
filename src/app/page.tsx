import Image from "next/image";


export default function Home() {
  return (
    <main className="grid place-content-center">
      <section className="h-[40rem] max-w-screen-2xl w-full flex justify-center items-center ">
        <div className="flex space-x-8 items-center">        
          <div className="relative bg-[#FACBCB] rounded-3xl">
            <div className="relative -mb-[0.6rem] size-[20rem]">
              <Image
                src="https://res.cloudinary.com/dhrin1/image/upload/c_limit,w_960/f_auto/q_auto/agitlgsijcx6leygfzag?_a=BAVAcMGd0"
                alt="author"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                
                priority={true}
              />
            </div>
            <div className="absolute px-5 pb-3 bottom-0">
              <div className="grid gap-y-2">
                <div className="text-white font-medium leading-5 text-lg">
                  <h2  >Alhdrin Gungon</h2>
                  <p>Full-stack Developer</p>
                </div>
                <ul className="flex list-none space-x-3">
                  <li className="px-3 py-1 text-sm rounded-full border border-white text-white"> Frontend</li>
                  <li className="px-3 py-1 text-sm rounded-full border border-white text-white">Backend</li>
                  <li className="px-3 py-1 text-sm rounded-full border border-white text-white">UI</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <div className="grid space-y-4">
                <h1 className="text-5xl">Great mind solutions: <span className="text-[#F55959]">Leveraging</span> My Expertise to Craft Products Aligned with Your <span className="text-[#504DF3]">Business</span> and Personal <span className="text-[#B6CC2B]">Goals</span> 🥇</h1>
                <p>I create customized, innovative products that align with your business objectives and personal goals, delivering functional and visually compelling solutions.</p>
                <div className="flex">
                  <button className="rounded-full h-14 px-5 text-white bg-[#AFADFF] text-lg font-semibold">Let's connect -></button>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      <section className="h-[40rem]">
        <div className="relative ">
       
          <div className="w-5/6 h-[500px] absolute rounded-3xl p-5 bg-red-200">
          </div>
          <div className="w-5/6 h-[500px] absolute rounded-3xl -mb-[8rem] -left-[2.5rem] p-5 bg-green-200">
          </div>
          <div className="w-5/6 h-[500px] absolute rounded-3xl -mb-[5rem] -inset-1left-0 p-5  bg-yellow-200">
          </div>
       
        </div>
       
      </section>
    </main>
   
  );
}




 {/*<DefaultLayout>
       <HomeLayout>

        <HeroSection />
        <WorkSection />
        <section className="pb-[7rem]">
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
        </section>


        <section className="h-[780px] w-full">
          <div className="flex flex-col space-y-3">
            <div className="grid text-center">
              <label>To make that possible</label>
              <h2 className="text-4xl font-bold">I used these technology</h2>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-4 grid-rows-3 gap-5">
               {new Array(15).fill(0).map((i, idx) => (
                  <div
                    key={idx}
                    className="size-[150px] bg-gray-100 rounded-3xl p-5"
                  >
                    A
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </section>

        <div className="h-[780px] w-full">
          <div className="flex flex-col">
            <div className="w-full flex justify-center">
              <div className="relative">
             <div className="grid text-center z-10 text-red-500 absolute">
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
                </div> 
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </DefaultLayout> */}