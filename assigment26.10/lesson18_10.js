//Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.

let arr = [0, 7, 4, 12, 22, 1, 3, 4];
let target = 16;

for (index in arr) {
  if (arr[index] + arr[index - 1] === target) {
    console.log("[" + (index - 1) + "," + index + "]");
  }
}

//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward.

let number = 12321;
let arr2 = Array.from(String(number), Number);
let boolean = true;
for (let i = 0; i < arr2.length / 2; i++) {
  if (arr2[i] !== arr2[arr2.length - i - 1]) {
    boolean = false;
  }
}
console.log(boolean);

//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

function longestCommonPrefix(a) {
  let size = a.length;

  /* if size is 0, return empty string */
  if (size == 0) return "";

  if (size == 1) return a[0];

  /* sort the array of strings */
  a.sort();

  /* find the minimum length from first and last string */
  let end = Math.min(a[0].length, a[size - 1].length);

  /* find the common prefix between the first and
           last string */
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let pre = a[0].substring(0, i);
  return pre;
}

/* Driver Function to test other function */
let input = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log("The longest Common Prefix is : " + longestCommonPrefix(input));

//Given an integer array nums sorted in non-decreasing order,
//remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

let nums = [0, 0, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5]; // Input array
//let expectedNums = [0, 1, 2, 3, 4, 5, _, _, _]; // The expected answer with correct length

function removeDuplicates(nums) {
  let firstPlace = nums[0];
  let duplicateCnt = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicateCnt++;
    }
  }

  let expectedNums = [];
  expectedNums.length = nums.length;

  for (let i = 0; i < expectedNums.length; i++) {
    if (expectedNums.length - duplicateCnt > firstPlace) {
      expectedNums[i] = firstPlace;
      firstPlace++;
    } else {
      expectedNums[i] = "_";
    }
  }
  return expectedNums.join(",");
}

expectedNums = removeDuplicates(nums);
console.log(expectedNums);
