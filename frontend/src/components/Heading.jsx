import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
        {props.text}
      </h1>
    </div>
  );
};

export default Heading;
