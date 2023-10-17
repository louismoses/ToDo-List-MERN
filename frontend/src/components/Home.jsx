import React from "react";
import Form from "./Form";
import Heading from "./Heading";

const Home = () => {
  return (
    <>
      <div className="container md:container md:mx-auto p-2">
        <Heading text="To-Do List" />
        <Form />
      </div>
    </>
  );
};

export default Home;
