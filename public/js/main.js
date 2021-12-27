window.addEventListener("load", function () {
  const showPassword = document.querySelector(".show-password");
  const inputPassword = document.querySelector(".password-input #pwd");
  showPassword.addEventListener("click", function () {
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      showPassword.className += " fas fa-eye-slash";

    } else {
      inputPassword.type = "password";
      showPassword.className += " far fa-eye";

    }
  });
});

// fetch('file:///D:/InterShip_Smartdev/lxt-shopee-clone-main/data.json')
//   .then(response => data.json())
//   .then(data => console.log(data));

// fetch("https://shopee.p.rapidapi.com/shopee.com.br/shipping-locations", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "shopee.p.rapidapi.com",
// 		"x-rapidapi-key": "a82f3fade7mshfb6d9fbb9e4625ep138c73jsna5dede87c51a"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// import someName from './data.json';
// console.log(someName);

// const data = [
//     {
//         email:"tu",
//         pw:123
//     },
//     {
//         email:"tu1",
//         pw:123
//     }
// ]

// $.getJSON("./assets/js/data.json", function( json ) {
//     console.log( "JSON Data: " + json );
// });



 var mydata =  JSON.parse(data);
//  console.log(mydata);

function check(from) {
  if (
    from.userid.value == mydata[0].email &&
    from.pswrd.value == mydata[0].pwd
  ) {
    window.open("index.html");
  } else {
    alert("error");
  }
}
