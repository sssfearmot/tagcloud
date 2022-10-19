import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

export default function App() {
  // const TagCloud = require("TagCloud");
  const texts = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];

  const options = {
    radius: 300,
    maxSpeed: "fast",
    initSpeed: "fast",
    direction: 135,
    keep: true
  };
  // const [test, setTest] = useState(true);

  useEffect(() => {
    TagCloud(".tagcloud", texts, options);
    // setTest(true);
    // if (test) {
    // }
  }, []);

    return (
      <div className="tagcloud"></div>
    );
}
