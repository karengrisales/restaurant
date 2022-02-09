import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../molecules/Card/Card";
import "./maincourse_style.css";

export const MainCourse = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/principales").then((response) => {
      setCourses(response.data);
    });
  }, []);

  if (!courses) return null;

  return (
    <div className="container__maincourse">
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
