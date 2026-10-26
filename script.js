
const expectFromUs = document.getElementById('expectFromUs');

const whatWeExpect = document.getElementById('whatWeExpect');

const popuptext = document.getElementById ("popuptext");

const formfill = document.getElementById ("formfill1");

const heading = document.getElementById("heading");

const form = document.getElementById("newsletterForm");

const name = document.getElementById("name");

const feedbackMessage = document.getElementById('feedbackMessage')

const submit = document.getElementById("submit");

const hobbyInput = document.getElementById("hobbyInput");

const addHobby = document.getElementById("addHobby");

const hobbyList = document.getElementById("hobbyList");

const changeTheme = document.getElementById ("changeTheme");

const clearProfile = document.getElementById ("clearProfile");

 //ADD NEW LIST ITEMS

  const newTask = document.createElement("li");
   newTask.textContent = "Business growth resources and useful updates";
   expectFromUs.appendChild(newTask);

  const newTask1 = document.createElement("li");
   newTask1.textContent =  "News about our services, projects, and offers.";
   expectFromUs.appendChild(newTask1);

  const newText = document.createElement('li');
   newText.textContent = "Subscribe willingly and engage with content that benefits you";
   whatWeExpect.appendChild(newText);

 //SHOW A MESSAGE WHEN THE NAME FIELD IS CLICKED

 formfill.addEventListener("click", function () {
   popuptext.textContent = "please provide accurate informaton before submtting the form."
 });

 // STYLE THE SUBSCRIBE BUTTON
 
  submit.style.color = "white";
  submit.style.backgroundColor = "#1C3D72";
  submit.style.margin = "1rem 0";
  submit.style.padding = "0.75rem 1.25rem";
  submit.style.border = "none"
  submit.style.borderRadius = "5px"
  submit.style.cursor = "Pointer";


 // HANDLE FORM SUBMISSION

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (name.value.trim() ===""){
      feedbackMessage.textContent = "Please enter your name."
    } else{
      feedbackMessage.textContent = "Hello" + name.value.trim() + ", thanks for joining the ScaleForge Digital newsletter!"
    }
  });


  //CHANGE THEME

   changeTheme.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
  });


  // ADD A HOBBY

   addHobby.addEventListener("click", function() {
     const hobby = hobbyInput.value.trim();
     if (hobby===""){
      feedbackMessage.textContent = "please enter a hobby first.";
     } else {
       const newHobby = document.createElement ("li");
       newHobby . textContent = hobby;

       hobbyList. appendChild(newHobby);
       hobbyInput.value = "";

       feedbackMessage.textContent = 'Hobby added successfully!';
     }
   });


   //CLEAR THE FORM AND HOBBIES

    clearProfile.addEventListener("click", function () {
       form.reset();

       feedbackMessage.textContent = "";
       popuptext.textContent = "" ;

       hobbyInput.value = "";
       hobbyList.replaceChildren();
    });



    const product = ["Face Cleanser", "Moisturizer", "Sunscreen", "Face Serum"];
    
    console.log(product[0]);
    console.log(product[3]);
    console.log(product.length);
    


    for(let pakeCage = 0; pakeCage < product.length; pakeCage++ ){
      console.log(product[pakeCage]);
    }

    product.forEach(function(product, index){
      console.log (product);
      console.log(index);
      console.log(index + ": " + product);
    })
     
    product.push("Toner")

      product.forEach(function(product){
      console.log (product);
    })

    const price = [50, 100, 150, 200];
    price.forEach(function(price){
      console.log(price + 20);
    });























































































/*

console.log("Aurelia Interiors");
console.log(25+5);
console.log(10);
console.log("I am " + (20+2) + " years old" );

let btnClass = 0;

let winGet = 1;

let houroftheDay = 8;

const numberBtween = 24;

let age = 10;
const isholiday = true;

function greet () {
  console.log('Hello, welcome to my website')
}

greet()

function greetUser (name) {
  console.log('Hello ' + name) 
}

greetUser('Siddiqah!')
greetUser("Mr Chiarman!")


function addNumbers (a , b) {
  console.log(a + b )
}

addNumbers(2 , 5)
addNumbers(10 , 5)
addNumbers(300 , 0.4)


let result = multiply(6 , 4)

function multiply (con , ton) {
  return con * ton;
}

 console.log(result)
 
const acess = makeWay( 'tap' , 2)

function makeWay (co , bo) {
  return co + bo ;
}
console.log(acess)


function checkAge (Age) {
  if ( Age >= 18 ) {
    console.log(Age + ' You are an adult')
  } else {
    console.log(Age +' You are a minor')
  } 
}

checkAge(17)
checkAge(22)


let total = caculateTotal (500 , 3)
function caculateTotal (price , quantity) {
  return price * quantity;
}
  console.log(total)

  total = caculateTotal (100, 2)
  console.log(total)

function checkPassword (password) {
  if (password === '12345') {
    console.log ('Login successful')
  }else {
    console.log('Incorrect password')
  }
}

checkPassword('12345')
checkPassword('123453')



const product = {
  name : 'Cawn',
  price: 150 ,
  brand: 'Amazon',
  inStock: true,
  total: 10 + ' pices',
  desCripton: function howToUse () {
  console.log(' To use Cawn, your face most be wash with the soap in the container 20mins before applying the cawn. The cawn must be remove after 10mins and wash your face with the same soap. Then applies the cawnCream to your face this most be done morning and afternoon for 1mounth. Called the number on the container for the next steps or feedback. Thanks')
}
};

let productPrice = 150;

console.log(product);
console.log(product.name);
console.log(product.productPrice);
console.log (product[`brand`])
console.log(product[`inStock`]);
console.log (product [`total`])

product.price = ('$' + productPrice);

console.log(product.price);

product.category = 'Face-Cleaner';

console.log (product.category);

delete product.brand;

console.log(product);

product.desCripton();

console.log (JSON.stringify(product));

const productString = JSON.stringify(product);
console.log (JSON.parse(productString));


const customer = {
  name : 'Siddiqah',
  age  : 22,
  address : {
    city : 'Scottland',
    country : 'UK'
  }
}

console.log (customer. address . city);


const name = 'Siddiqah';
const age = 22;
const country = 'Nigeria';
    
localStorage.setItem('userName', name );
localStorage.setItem('userAge', age );
localStorage.setItem('userCountry', country);

console.log(localStorage.getItem('userName'));
console.log(localStorage.getItem('userAge'));
console.log(localStorage.getItem('userCountry'));

 const user = {
  name: "Siddiqah",
  age: 22,
  country: "Nigeria",
  Skills: ["HTML", "CSS", "JAVASCRIPT"]
};

 localStorage.setItem ('userProfile', JSON.stringify(user));
 console.log(localStorage.getItem('userProfile'));

 const userProf =  JSON.stringify(user);
 console.log(JSON.parse(userProf));

 user.country = "UK";

console.log(user.country);

 localStorage.setItem ('userProfile', JSON.stringify(user));
 console.log(localStorage.getItem('userProfile'));

 localStorage.removeItem('userProfile');
 console.log(localStorage.getItem("userProfile"));

 const cart = {
   product: "Face Cleanser",
   price: 150,
   quantity: 2
 };

 localStorage.setItem('cartInf' , JSON.stringify(cart));

 console.log(localStorage.getItem('cartInf'));


 let total = cart.price* cart.quantity;

 console.log(total);

*/

 
