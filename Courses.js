const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  Kalvium: {
    type: [
      {
        course: {
          type: String,
        },
        courseId: {
          type: Number,
        },
        cohort: {
          type: Number,
        },
        college: {
          type: String,
        },
        semester: {
          type: Number,
        },
        averageRating: {
          type: Number,
        },
        studentsVoted: {
          type: Number,
        },
      },
    ],
  },
});
