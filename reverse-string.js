function reverseString(str) {
    if (str.length <= 1) {
        return str; // Base case: nothing to reverse
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1)); // Recursive case
}

// Kevin's Test Kitchen
console.log(reverseString("hello"));     // "olleh"
console.log(reverseString("recursion")); // "noisrucer"
console.log(reverseString("a"));         // "a"
console.log(reverseString(""));          // ""
