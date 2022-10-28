//console.log(true && fales);
// console.log(true && true);
// console.log(8 * null);
// console.log(4 == 6);

// my own practice for calling function
function madrasha(student, reason) {
  console.log(student + " is leaving madrashah for " + reason);

  return student, reason;
}

madrasha("Hamza", "fever");
madrasha("Abddullah", "Lamaiya");
madrasha("Nazriya", "me");

// creat an object for practice

const me = {
  Name: "Anamul",
  Color: "fair and dark mixed",
  Height: "5 foot 6 inch",
  Weight: "70 kg",
  eyeColor: "black",
  age: 27,
};

console.log(me["eyeColor"]);
console.log(me["Weight"]);

// i will make another object, in this planet all things belongs with object.

const family = {
  father: "Hossain bepari",
  mother: "Amena begum",
  fSon: "Anamul Haque",
  sSon: "Emdad",
  tSon: "Abujar",
  foDaughter: "Tashfia",
  fiDaughter: "Takiya",
  siSon: "Hojaifa",
};

console.log(family["fSon"]);

//bring a new example from w3school

/*const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
  
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());*/

console.log(99 ** 87);

const mom = {
  mother: "amena",
  father: "Hossain",
  son: "anamul",
  sons: "emdad",
  sont: "abujar",
  daugher: "tashfia",
  daughtert: "takia",
  sonf: "hujaifa",
  familly: function () {
    this.name();
    
    console.log("It's call familly.these are my familly");
  },
  name: function () {
    console.log("my familly name is bepari.bacause they were businessman");
  },
};

mom.familly();

function time() {
  let d = Date();
  console.log(d);

}

time();


function myName(){
  console.log("i'm not with you boy");
};


console.log(454 ** 54);

const interstaller= {
  cooper: "main role",
  amelia:"main female actor",
 brand:"father of amelia",
 donald:"father in law of coop",
 murph:"main supporting female",
 tars:"robot",
 case:"second robot",
 endurance:"vehical",
ranger:"ship",
director:function(){
  this.movie();
  console.log(" it is Christopher Nolan");
},
movie:function(){
  console.log("that's was a awsome movie in space science genra. the director is genius.");
}

}

interstaller.director();
console.log(interstaller. cooper + " and " + interstaller.amelia + " is love eachother"); 
 