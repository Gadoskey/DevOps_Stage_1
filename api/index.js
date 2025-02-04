const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Helper functions
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  if (num <= 0) return false; // Perfect numbers are positive integers
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

const isArmstrong = (num) => {
  const digits = String(num).split("").map(Number);
  const power = digits.length;
  return digits.reduce((sum, d) => sum + d ** power, 0) === num;
};

app.get("/api/classify-number", async (req, res) => {
  const number = parseInt(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({ number: req.query.number, error: true });
  }

  // Determine properties
  let properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  // Fetch fun fact
  let fun_fact = "No fact available";
  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    fun_fact = response.data;
  } catch (error) {
    console.error("Error fetching fun fact:", error);
  }

  // Calculate digit sum
  const digitSum = Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, d) => sum + Number(d), 0);

  res.json({
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: digitSum,
    fun_fact,
  });
});

// Export the app as a Vercel serverless function
module.exports = app;
