// Below function takes an array of integers and returns a new array containing only unique elements.

const uniqElements = (arr) => {
    let obj = {}
    let newarr = []

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {     // Cheacking if obj has current element or not
            obj[arr[i]] = true
            newarr.push(arr[i])             // pushing current/unique element into the newarr
        }
    }

    return newarr 
}

let inputarr = [1, 1, 2, 45, 1]  
let result = uniqElements(inputarr)         // Calling the function
console.log(result)                         // Logging the output

// Time complexity for this function is O(n).
// Space complexity for this function is O(n).
