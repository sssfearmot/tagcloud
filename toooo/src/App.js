import React, { useEffect, useState } from "react";

export default function App() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    const TagCloud = require("TagCloud");
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

    setTest(true);

    if (test) {
      TagCloud(".tagcloud", texts, options);
    }
  }, [test]);

  return (
      <div className="tagcloud"></div>
    )
}
