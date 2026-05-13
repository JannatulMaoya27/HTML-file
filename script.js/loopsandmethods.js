let flowers = ["rose", "tulip", "daisy", "sunflower", "lily"];

for (let i=0; i<flowers.length; i++) {
    console.log(i+ " number flower's name is " + flowers[i]);
}




let pattern = /^[0-9]{6}$/;
let password1 = "123456";
let password2 = "12345";

console.log(pattern.test(password1));
console.log(pattern.test(password2));


let planetnumber = 3;
let planetname ;

switch(planetnumber){
    case 1 :
        planetname = "mercury"
        break;
    case 2 :
        planetname = "venus" 
        break; 
    case 3 :
        planetname = "earth"   
        break;
    case 4 :
        planetname = "mars"   
        break;
    case 5 :
        planetname = "jupiter"   
        break;
    case 6 :
        planetname = "saturn"   
        break;   
    case 7 :
        planetname = "uranus"   
        break; 
    case 8 :
        planetname = "neptuner"   
        break;  
    default:
        planetname = "unknown"   
 

}
console.log ("The planet name is " + planetname)
