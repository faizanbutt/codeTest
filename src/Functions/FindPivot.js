export function findPivot () {
    var arr = [
      {
        name: "Jack",
        age: 20,
        netUnit: "billion",
        netWorth:20
      },
      {
        name: "Nice",
        age: 29,
        netUnit: "billion",
        netWorth:8
      },
      {
        name: "Tim",
        age: 23,
        netUnit: "billion",
        netWorth:3
      },
      {
        name: "Jonathan",
        age: 27,
        netUnit: "billion",
        netWorth:2
      },
      {
        name: "Billz",
        age: 32,
        netUnit: "billion",
        netWorth:7
      },
      {
        name: "Marry Jim",
        age: 37,
        netUnit: "billion",
        netWorth:20
      },
      {
        name: "Jerry",
        age: 39,
        netUnit: "billion",
        netWorth:10
      },
      {
        name: "Chris",
        age: 35,
        netUnit: "billion",
        netWorth:15
      },
      {
        name: "Ronald",
        age: 21,
        netUnit: "billion",
        netWorth:15
      }
      ]
      var size = arr.length;
      
      let i = 0, start = 0, end = size - 1, leftSum = 0, rightSum = 0;
   
      for (i = 0; i < size; i++) {
        if (start == end && rightSum == leftSum){
              return arr[start];
        }
        
          if (start == end)
              return -1;
   
          if (leftSum > rightSum) {
              rightSum += arr[end].netWorth;
              end--;
          }
          else if (rightSum > leftSum) {
              leftSum += arr[start].netWorth;
              start++;
          }
          else {
              rightSum += arr[end].netWorth;
              end--;
          }
          // console.log('leftSum',leftSum)
      }
  }