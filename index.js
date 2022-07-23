//  obj is a reference type 

// let obj1 = { 
//     name:"greetings"
//    }

// let obj2 = obj1
//    obj1.age=50

//    console.log(obj1, obj2);//{name: 'greetings', age: 50} {name: 'greetings', age: 50} 



//   {[{}]} - spread operator


//    const a  =  {
//         test: [{
//         test: [{test: 287367823}]
//         }]
//     }

//     const b = {...a}
//     console.log(b);




//  setInterval 

    // setInterval(() => {
    //     console.log('hii')
    // }, 1000);





//  reduce :: 



//     const a =  [
//         {
//             id : 1,
//             name : 'p' 
//         }, 
//         {
//             id : 2,
//             name : 'S'
//         }
//     ];



//  const b = a.reduce((byId, a) => {
//     byId[a.id] = a
//      return byId;
//  }, {});   


//  console.log(b);
 /*
   {1 :    {
            id : 1,
            name : 'p' 
        },
    2 :    {
            id : 2,
            name : 'S'
        }    
    }
 
 */




// recursion - print 1 to 100 (without loop)


// {
//     function recurseMe(num) {
//       if(num > 100) {
//         return;
//       }
//       console.log(num);//1 to 100
//     //   document.write(num + ' ');
//       recurseMe(num+=1);
//     }

//     recurseMe(1);
// }




//  largest number in an array and second largest no in an array

const arr = [5,21,35,89,34,45];

const sortingArr = arr.sort((a,b) => a - b);
console.log(sortingArr);
let largestNumber = sortingArr[sortingArr.length - 1]
let secondLargestNumber = sortingArr[sortingArr.length - 2]
console.log(largestNumber);//89
console.log(secondLargestNumber);//45

    