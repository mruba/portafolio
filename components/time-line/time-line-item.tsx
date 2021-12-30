import classNames from "classnames";

const timeLineItem = (props: Props, index: number) => {
    const { description, id, tags, workingPeriod, title } = props;
    const shouldRenderLeft = index % 2 !== 0;
    return (
        <div key={id} className={classNames("relative flex ", {
            "sm:justify-end": shouldRenderLeft,
        })} >
            <div className={classNames("w-full sm:w-1/2", {
                "sm:pr-14": !shouldRenderLeft,
                "sm:pl-14": shouldRenderLeft,
            })}>
                <div className={"pixelBox p-5 pt-8 sm:pt-5  w-full bg-white shadow space-y-4"}>
                    <p className="text-lg">{title} <span className="text-sm text-pink">{workingPeriod}</span></p>
                    <p>{description}</p>
                    <div>
                        {tags.map(
                            (tag: string, index: number) =>
                                <span
                                    key={index}
                                    className="inline-block bg-gray-100 rounded-2xl mt-2 px-3 py-1 text-sm font-semibold text-pink mr-2">
                                    {tag}
                                </span>
                        )}
                    </div>
                </div>
            </div>

            <div className={classNames("bg-red border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:bottom-1/2 sm:translate-y-1/2 transform -translate-x-1/2 flex items-center justify-center")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
        </div>
    )
}

export default timeLineItem;