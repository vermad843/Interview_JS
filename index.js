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



    const a =  [
        {
            id : 1,
            name : 'p' 
        }, 
        {
            id : 2,
            name : 'S'
        }
    ];



 const b = a.reduce((byId, a) => {
    byId[a.id] = a
     return byId;
 }, {});   


 console.log(b);
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


    