// Below function takes two array of intergers and return new array containing common elements

const findCommon = (arr1, arr2) => {
    let newarr = []
    let obj = {}

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true                  // Adding all the arr1 elements into the obj
    }

    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]]) {                  // Cheacking if arr2 element is present in obj or not 
            newarr.push(arr2[i])             // Pushing common element into new array
        }
    }

    return newarr
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7, 1];
const result = findCommon(arr1, arr2)        // Calling the function
console.log(result)                          // Logging the output

// Time complexity for this function is O(n).
// Space complexity for this function is O(n).