const express = require("express");
const app = express();
const dataJson = require("./courses.json");
const Course = require("./Courses");
const { default: mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://agrawalakanksha23123:preeti23123@cluster0.1i5fzbv.mongodb.net/test",
  {
    family: 4,
  }
);

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
  const newCourse = new Course(req.body);

  newCourse.save((err, course) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error creating course");
    } else {
      res.status(200).send(course);
    }
  });
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
