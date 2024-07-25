import DefaultLayout from "@/components/default-layout";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return <main className="max-w-screen-md w-full ">{children}</main>;
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
            <h6>Hi there! 👋🏻</h6>
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
              <div className="h-full flex flex-col">
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
      <div className="flex flex-col space-y-2 ">
        <div className="h-[500vh] ">
          <div className="w-full mb-5">
            <div className="grid grid-y-2">
              <h6>Interested?</h6>
              <h2 className="text-4xl font-bold w-[70%]">
                Revealing my collection of{" "}
                <span className="text-gray-200">projects</span>
              </h2>
            </div>
          </div>
          <div className="sticky top-0 h-[100vh] w-full flex space-x-4 justify-start">
            {new Array(7).fill(0).map((i, idx) => (
              <div
                key={idx}
                className="border rounded-3xl h-1/3 w-[55vh] bg-red-200"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <DefaultLayout>
      <HomeLayout>
        <HeroSection />
        <AboutSection />
        <WorkSection />
      </HomeLayout>
    </DefaultLayout>
  );
}
