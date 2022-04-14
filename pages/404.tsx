import React from "react";

type Props = {};

export default function Custom404({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-y-5 text-white">
      <p className="text-md text-white bg-pink-light p-2 px-5">404 Not Found</p>

      <p className="self-start">
        A wild 404-PAGE appeared!
        <br />
        This means that your browser was able to communicate with my server, but
        the server could not find a way to resolve this request.
      </p>
      <ul className="self-start">
        <li>* Make sure the url is correct.</li>
        <li>* Do not panic.</li>
      </ul>
      <p>Press any key to continue _</p>
    </div>
  );
}
