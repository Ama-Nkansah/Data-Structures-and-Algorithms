/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 //BINARY SEARCH - Halve & Search

 export function binarySearch (nums, target) {
  let lowerbound = 0
  let upperbound = nums.length-1

  while(lowerbound<=upperbound){
    let midpointIndex = Math.floor((lowerbound+upperbound)/2)
    let midpointValue = nums[midpointIndex]
    if(midpointValue === target){
      return midpointIndex;

    }else if(midpointValue < target){
      lowerbound = midpointIndex +1
    }else{
    upperbound = midpointIndex - 1
  }
  }
  return -1;
};
