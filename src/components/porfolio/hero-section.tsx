"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
export interface Company {
    title: string;
    name: string;
}

const company: Company[] = [
    { title: "Title 1", name: "Description 1" },
    { title: "Title 2", name: "Description 2" },
    { title: "Title 3", name: "Description 3" },
    { title: "Title 4", name: "Description 4" },
    { title: "Title 4", name: "Description 5" },
];

function HeroSection() {
    // const [index, setIndex] = useState(0);
    // const [selectCard, setSelectCard] = useState({
    //     obj: {},
    //     idx: 0
    // });
    // var interval = 1500;
    // useEffect(() => {
    //     const time = setInterval(() => {
    //         setIndex((prev) =>
    //             prev += 1
    //         );
    //     }, interval);
    //     return () => {
    //         clearInterval(time);
    //     }
    // }, []);

    // //[3, 4, 5, 1, 2]

    // useEffect(() => {
    //     const currentIdx = company.indexOf(company[index]);
    //     if (currentIdx !== -1) {
    //         setSelectCard({
    //             obj: company[currentIdx],
    //             idx: currentIdx,
    //         })
    //     } else {
    //         setIndex(0)
    //     }
    // }, [index]);


    // const getCard = () => {

    //     const config = company.map((item, idx) => {
    //         return ({ details: item, scale: Math.abs((idx / company.length * 100) - 100) })
    //     });

    //     return {
    //         cards: config
    //     }
    // }

    // const { cards } = getCard();

    const [company, setCompany] = useState<Company[]>([
        { title: "Title 1", name: "Description 1" },
        { title: "Title 2", name: "Description 2" },
        { title: "Title 3", name: "Description 3" },
        { title: "Title 4", name: "Description 4" },
        { title: "Title 4", name: "Description 5" },
    ]);

    useEffect(() => {
        const time = setInterval(() => {
            setCompany((prev: any) => {
                if (prev.length === 0) return prev;
                const [init, ...rest] = prev;
                return [...rest, init];
            })
        }, 1000);

        return () => clearInterval(time);
    }, [])







    return (
        <section className="h-auto w-full">
            <div className="h-full flex py-[7rem]">
                <div className="w-full">
                    <div className="flex flex-col space-y-5 sm:space-y-3">
                        <h1 className="text-4xl font-semibold group-[connect]">
                            Hi there!👋🏻
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 w-full">
                            <div className="col-span-3 md:col-span-2 h-[14rem] rounded-3xl bg-red-100 ">
                                <div className="size-full flex relative items-center">
                                    <div className="relative grid h-full p-5 z-10">
                                        <div className="flex h-full items-end md:items-start  ">
                                            <div className="grid">
                                                <label className="text-sm md:text-xl group-hover:text-red-500 order-1 md:order-0 font-semibold text-gray-800">
                                                    Full-stack Developer
                                                </label>
                                                <h1 className="text-xl  md:text-4xl order-0 md:order-1 font-bold text-gray-800 drop-shadow-none md:drop-shadow-sm">
                                                    Alhdrin Gungon
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex h-full items-end ">
                                            <button className="flex items-center h-8  px-3 rounded-full transition-all ease-in-out group  hover:bg-red-200 duration-200 bg-white text-gray-800 ">
                                                <label className="cursor-pointer font-medium text-xs group-hover:text-red-600 ">
                                                    Get in touch{" "}
                                                    <span className="group-hover:animate-pulse">
                                                        {"->"}
                                                    </span>
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

                                                    <div className="size-10 mt-[2rem] -ml-[9rem] absolute ">
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
                                <div className="flex justify-center items-center ">
                                    <div className="relative size-[14rem]">
                                        {company.map((card, idx) => (
                                            <div key={idx} style={{ marginTop: `-${idx * 5}%` }} className={`absolute border bg-white size-full rounded-3xl `}>{card.name}</div>

                                        )).reverse()}
                                        {/* <div className="absolute border -mt-4 size-full scale-x-[80%] rounded-3xl"></div>
                                        <div className="absolute border -mt-2 size-full scale-x-[90%] rounded-3xl"></div>
                                        <div className="absolute border -mt-0 size-full scale-x-[100%] rounded-3xl"></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection