/*
1a.
I believe this algorithm is constant because no matter how many people are in the room, 
there is only request made.
0(1)

1b.
This algorithm is linear because youre asking the 15 people individually, what breed of dog they have.
This would scale linearly because the number of requests would grow with with the number of people in the room.
O(n)

2.
The runtime is constant because we're only checking if the value is even or odd.
The value can grow in size but the result will always be constant.
O(1)

3.
This algorithm is quadratic because of its nested loop. The algorithm searches through the first array storing
the individual values in a const. Then the loop searches through the second array storing the individual values in a new const.
Finally, the two consts are compared and will return a boolean. This is a very inefficient algorithm.
O(n^2)

4.
This algorithm is linear. This will loop through the array and multiply every item by 2. 
It will return the array with every item doubled. 
The runtime will grow ith the size of the array.
O(n)

5.
This algorithm is linear. The algorithm will search for a user inputted item within an array. It will loop through every item
and check if the item at the array index is a match to the user supplied item. It will then return the index of the matching item.
O(n)

6.
This algorithm is quadratic because of the nested loop. 
It will take one array and print a random pair for each item.
The runtime will grow as the input size increases.
O(n^2)

7.
This algorithm is linear. The algorithm generates the fibonacci sequence. The runtime will grow as the size of the
input grows.
O(n)

8.
This algorithm is linear. The way it functions is by evaluating the item at the middle of the array and comparing it to the user supplied item. 
If the item is less than the middle item, it will eliminate everything greater than that item until the item is found.
O(n)

9.
This algorithm is constant. This is because the algorithm just selects a rondom item from the arry. 
It doesn't care what item or how many there are, it just needs one.
O(1)

10.
This algorithm is linear because the algorithm checks to see if the number is a prime number.
The run time increases with the input number. 
O(n)

11.
 With given 5 disks, after 7 recursive calls:
 Move disk from rod  A  to rod  C
 Move disk from rod  A  to rod  B
 Move disk from rod  C  to rod  B
 Move disk from rod  A  to rod  C
 Move disk from rod  B  to rod  A
 Move disk from rod  B  to rod  C
 Move disk from rod  A  to rod  C

 Number moves needed to complete the puzzle with 3, 4 and 5 disks are 7, 15 and 31 moves, respectively.
 The runtime algorithm is linear. 
 O(n)
*/ 

function hanoi(disk, src, dest, tmp){
    if(disk >= 1){
      // Move a tower disks -1 to the temporary rod, using the destination rod
      hanoi(disk -1, src, tmp, dest);
      // Move the remaining disk to the destination peg
      console.log('Move disk from rod ', src, ' to rod ', dest);
      // Move the tower of disks -1 from the temporary rod to the destination rod using the source rod
      hanoi(disk -1, tmp, dest, src);
  
    }
    return;
  }
  
//   console.log(hanoi(4, 'A', 'C', 'B'));
/*
12.
 */
 function countSheep(num){
     for(let i=0; i<num; i++){
         console.log(`${i+1} Another sheep jump over the fence`)
     }
     console.log('All sheep jumped over the fence')
     return;
 }

//  console.log(countSheep(3));

function powerCalc(num, power){
    if(power < 1) return 0;
    let res = num;
    for (let i=1; i<power; i++){
        res*=num;
    }
    return res;
}

// console.log(powerCalc(10, 3))

function reverseStr(str){
    return str.split('').reverse().join('');
}

// console.log(reverseStr('hello'))

function triangular(n){
    let res=0;
    for(let i=1; i<=n; i++){
        res+=i
    }
    return res;
}

// console.log(triangular(3))

function splitter(str, sp){
    return str.split(sp).join('')
}

// console.log(splitter('02/20/2020', '/'))

function fibi(n){
    let res = []
    for(let i = 0; i <n; i++){
        if(i === 0 || i === 1){
            res.push(1)
        } else {
            res.push(res[i - 2] + res[i - 1])
        }
    }
    return res;
}

// console.log(fibi(7))

function factorial(n){
    let res = 1;
    for(let i = n; i > 0; i--){
        res*=i;
    }

    return res;
}

// console.log(factorial(5))

/* 
13/14. 
 1.Counting Sheep
 recursive: O(n)
 iterative: O(n) 
 2.Power Calculator
 recursive: O(n)
 iterative: O(n) 
 3.Reverse String
 recursive: O(n)
 iterative: O(n) 
 4.nth Triangular Number
 recursive: O(n)
 iterative: O(n) 
 5.String Splitter
 recursive: O(log(n))
 iterative: O(n) 
 6.Fibonacci
 recursive: O(n)
 iterative: O(n) 
 7.Factorial
 recursive: O(n)
 iterative: O(n) 
*/