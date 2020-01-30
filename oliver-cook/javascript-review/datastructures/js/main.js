console.log('Hello and welcome!!');


//Accessing Data in Objects and Arrays!//


const response = {   //parent Object

      data:{
      photos:[{title:"Dog" ,    Url:"HTTP....."},
              {title:"Cat" ,    Url:"HTTP....."},
              {title:"Mouse" ,  Url:"HTTP....."},
              {title:"Rabbit" , Url:"HTTP....."}

            ],
    }


  };
const results = response.data.photos;
 // console.log(results);

for ( let i = 0; i < results.length; i++ ){
// var photoUrl = results[ i ];

// console.log(photoUrl);

var rabbit = results[i].Url
console.log(rabbit);

};

 // console.log(results)


//  const photos = [{title:"Dog" ,   Url:"HTTP....."},
//                 {title:"Cat" ,    Url:"HTTP....."},
//                 {title:"Mouse" ,  Url:"HTTP....."},
//                 {title:"RAbbit" , Url:"HTTP....."}
//  ]
//
// for ( let i = 0; i < photos.length; i++ ){
//   // let photoUrl = photos[ i ];
// //console.log(photoUrl);
// let animalUrl = photos[i].Url
// console.log(animalUrl);
//
// //   var photoUrl = results[ i ];
//
// }
