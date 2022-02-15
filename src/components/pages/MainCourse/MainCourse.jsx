import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../molecules/Card/Card";

export const MainCourse = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/principales").then((response) => {
      setCourses(response.data);
    });
  }, []);

  if (!courses) return null;

  return (
    <div className="container">
      {courses.map((course) => {
        return (
          <Card
            name={course.name}
            description={course.description}
            price={course.price}
            img={course.img}
            key={course.id}
          />
        );
      })}
    </div>
  );
};
