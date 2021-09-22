const mongoose = require("mongoose");

const part2 = mongoose.Schema({
  email: String,
  name: String,
  rollno: String,
  month: String,
  physics: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  mathematics: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  biology: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  chemistry: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  computer: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  english: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  urdu: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  pakstudy: {
    First: String,
    Second: String,
    Third: String,
    Fourth: String,
    Fifth: String,
  },
  total: String,
  percentage: String,
});

const FSCpart2 = mongoose.model("2021parttwos", part2);

module.exports = FSCpart2;
