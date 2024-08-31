import React from 'react'

function WorkSection() {
    return (
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
    )
}

export default WorkSection