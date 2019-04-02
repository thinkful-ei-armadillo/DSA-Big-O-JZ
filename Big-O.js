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







*/ 

