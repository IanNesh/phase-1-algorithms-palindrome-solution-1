function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;

  // Continue until the pointers meet in the middle
  while (left < right) {
    // If the characters at the current pointers don't match, return false
    if (word[left] !== word[right]) {
      return false;
    }

    // Move the pointers inwards towards the middle of the string
    left++;
    right--;
  }

  // If we get to this point, the string must be a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;