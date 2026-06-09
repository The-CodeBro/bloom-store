import formatCurrency from "../../scripts/utils/money.js";

console.log("Test suite: formatCurrency");

console.log("converts cents into dollars");

//test cases
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("works with 0");
//edge cases
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds up to the nearest cent");
//edge cases
if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

//edge case
console.log("rounds up to the nearest cent second test");
if (formatCurrency(2000.4) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}
