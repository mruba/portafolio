import * as React from "react";
import classNames from "classnames";

export interface ITimeLineProps { }


const timeLine = [
    {
        id: "1",
        title: "First",
        description: "First description",
    },
    {
        id: "2",
        title: "Second",
        description: "Second description",

    },
    {
        id: "3",
        title: "Third",
        description: "Third description",
    },
    {
        id: "4",
        title: "Fourth",
        description: "Fourth description",
    }
]



export default function TimeLine(props: ITimeLineProps) {
    return (
        <div className="bg-blue-light py-12 sm:mx-auto px-2 sm:px-6">


            <div className="relative text-gray-800 text-sm font-semibold">

                <div className="hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {timeLine.map((item, i) => (
                    <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-0 sm:mb-12" key={item.id}>

                        <div className={classNames("w-full sm:w-1/2 sm:pr-8 order-last", {

                        })}>
                            <div className="p-4 w-full bg-white rounded shadow">
                                Now this is a story all about how, {item.description}
                            </div>
                        </div>

                        <div className={classNames({

                        }, "rounded-full bg-blue-500 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                    </div>
                ))}


            </div>


        </div >
    )

}
