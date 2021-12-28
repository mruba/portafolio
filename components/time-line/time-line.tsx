import * as React from "react";

export interface ITimeLineProps { }



export default function TimeLine(props: ITimeLineProps) {
    return (
        <div className="bg-blue-light py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

                <div className="relative text-gray-800 antialiased text-sm font-semibold">

                    <div className="hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div>

                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div className="p-4 bg-white rounded shadow">
                                        Now this is a story all about how,
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div className="p-4 bg-white rounded shadow">
                                        My life got flipped turned upside down,
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )

}
