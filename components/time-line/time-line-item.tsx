import classNames from "classnames";
import PixelBox from "@components/pixel-box";

export interface Props {
  description: string;
  id: string;
  tags: string[];
  workingPeriod: string;
  title: string;
}

const timeLineItem = (props: Props, index: number) => {
  const { description, id, tags, workingPeriod, title } = props;
  const shouldRenderLeft = index % 2 !== 0;
  return (
    <div
      key={id}
      className={classNames("relative flex sm:mt-0 sm:mb-12", {
        "sm:justify-end": shouldRenderLeft,
      })}
    >
      <div
        className={classNames("w-full sm:w-1/2", {
          "sm:pr-14": !shouldRenderLeft,
          "sm:pl-14": shouldRenderLeft,
        })}
      >
        <PixelBox className="p-4 pt-8 sm:p-4 bg-white ">
          <p className="text-lg">{title}</p>
          <p className="text-sm text-pink py-2">{workingPeriod}</p>
          <p>{description}</p>
          <div>
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-2xl mt-2 px-3 py-1 text-sm font-semibold text-pink mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </PixelBox>
      </div>

      <div
        className={classNames(
          "bg-red border-white border-4 w-12 h-12 absolute left-1/2 top-0 sm:top-1/2 -translate-y-1/2 sm:bottom-1/2 transform -translate-x-1/2 flex items-center justify-center"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          version="1.1"
          viewBox="0 0 6.6146 6.6146"
        >
          <path
            d="m5.016 1.6523h0.68316v0.68321h-0.68316zm-1.3664 0h0.6831v0.68321h-0.6831zm2.0496-1.3668v0.68354h-2.7332v-0.68354h-0.68327v2.7333h-1.3665v-0.68321h-0.68348v4.0998h0.68348v-1.3667h0.68327v1.3667h0.68321v-1.3667h0.68327v1.3667h0.68354v-1.3667h0.6831v1.3667h0.68332v-2.7331h0.68316v-0.68354h0.68348v-2.7333h-0.68348"
            fill="#ffffff"
            strokeWidth=".099488"
          />
        </svg>
      </div>
    </div>
  );
};

export default timeLineItem;
