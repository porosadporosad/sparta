import React from "react";
import { useParams } from "react-router-dom";

function Work() {
  const params = useParams();
  console.log(params);
  const data = [
    {
      id: 1,
      todo: "HTML",
    },
    {
      id: 2,
      todo: "CSS",
    },
    {
      id: 3,
      todo: "JS",
    },
    {
      id: 4,
      todo: "REACT",
    },
    {
      id: 5,
      todo: "TypeJS",
    },
    {
      id: 6,
      todo: "Jsx",
    },
  ];
  return (
    <div>
      <h3>할일목록</h3>
      {data.map((prev) => {
        return (
          <p key={prev.id}>
            {prev.id}. {prev.todo}
          </p>
        );
      })}
    </div>
  );
}

export default Work;
