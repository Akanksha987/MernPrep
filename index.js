const express = require("express");
const app = express();
const dataJson = require("./courses.json");
const Course = require("./Courses");

// Task 1
app.get("/courses", (req, res) => {
  res.json(dataJson);
});
// Task 2
app.get("/courses/:name", (req, res) => {
  const search = req.params.name;
  const data = dataJson.kalvium.filter((e) => {
    return e.course === search;
  });
  res.json(data);
});
// Task 3
app.get("/courses/:name/rating", (req, res) => {
  const search = req.params.name;
  const rating = dataJson.kalvium.filter((e) => {
    return e.course === search;
  });

  if (rating.length === 0) {
    res.status(404).send("Not found");
  } else {
    const averageRating = rating.map((e) => e.averageRating);
    res.json({ averageRating });
  }
});
// Task 4
app.post("/courses", (req, res) => {
  const dataSend = req.body;

  const newCourse = {
    course: dataSend.course,
    courseId: dataSend.courseId,
    cohort: dataSend.cohort,
    college: dataSend.college,
    semester: dataSend.semester,
    averageRating: dataSend.averageRating,
    studentsVoted: dataSend.studentsVoted,
  };
  const data = dataJson.kalvium;
  data.push(newCourse);

  res.status(200).send("Data saved successfully");
});

app.put("/courses/:name", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// task 6

app.listen(3009, () => {
  console.log("Server listening on port 3009");
});
