import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <h1>NEWSLETTER</h1>
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          placeholder="Enter some text"
          className="news border rounded-start-2"
        />
        <button className=" btn btn-md btn-success rounded-start-0">
          Search
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
