import React from "react";
import jobs from "./jobs.json";
import classNames from "classnames";
import tinytime from "tinytime";

type Job = {
  id: string;
  company: string;
  position: string;
  team: string;
  startDate: string; // unix timestamp
  endDate: string; // unix timestamp
  descriptions: Array<string>;
};

type Props = {};

const timeTemplate = tinytime("{MM} {YYYY}");

const ResumeDetails = (props: { details: Job }) => {
  const { id, company, position, team, startDate, endDate, descriptions } =
    props.details;

  const getFormatedDates = React.useMemo(() => {
    try {
      return `${timeTemplate.render(
        new Date(startDate)
      )} - ${timeTemplate.render(new Date(endDate))}`;
    } catch (error) {
      throw error;
    }
  }, [startDate, endDate]);

  return (
    <div className="text-grey">
      <h2 className="text-sm pb-4 ">
        {position} <span className="text-green">@ {company}</span>
      </h2>
      <p className="pb-4 text-white text-[0.7rem]">{getFormatedDates}</p>
      <ul className="list-disc ">
        {descriptions.map((description: string) => (
          <li key={description} className="text-sm leading-8 break-words pb-6">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const InteractiveResume = (props: Props) => {
  const [selected, setSelected] = React.useState<Job>(jobs[0]);
  return (
    <div className="flex w-full">
      <ul className="text-grey flex-shrink-0 flex-grow-0 w-32 mr-12 ">
        {jobs.map((job: Job) => (
          <li
            key={job.id}
            className={classNames(
              "py-3 text-xs border-l-2 pl-4 cursor-pointer",
              { "border-l-grey ": job.id !== selected.id },
              {
                "text-pink border-l-pink border-l-[6px] -ml-[2px]":
                  job.id === selected.id,
              }
            )}
            onClick={() => setSelected(job)}
          >
            {job.company}
          </li>
        ))}
      </ul>
      <ResumeDetails details={selected} />
    </div>
  );
};

export default InteractiveResume;
