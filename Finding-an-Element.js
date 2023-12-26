// the find() method finds and returns the first matched element as per the testing function 

const doctors = [
  {
    id: 1,
    name: "Pia",
    age: 24,
    speciality: 'General Medicne',
  },
   
  {
    id: 2,
    name: "Mia",
    age: 25,
    speciality: 'Gyologist',
  },

  {
    id: 3,
    name: "Sia",
    age: 26,
    speciality: 'Cardilogist',
  },

  {
    id: 4,
    name: "Naru",
    age: 27,
    speciality: 'Nursing',
  },

  {
    id: 5,
    name: "Tyler",
    age: 28,
    speciality: 'Biomedicine',
  },

];

const findDoctor = (speciality, arr) => arr.find((elem) => elem.speciality === speciality);

const findDoctors = (speciality, arr) => arr.find((elem) => elem.speciality === speciality)?.name || 'No doctor found';

console.log(findDoctor('Neruoligst', doctors));
console.log(findDoctors('Biomedicine', doctors));
doctors.findIndex((elem) => elem.age === 25);


/*
Output:

 undefined
'Tyler'
4

*/


const colorType = (color) => {
  const primaryColors = ['red', 'white', 'yellow'];
  
  const secondaryColors = ['Blue', 'green', 'pink'];
  
  if(primaryColors.includes(color)){ 
   return `${color} is a primary color`;
  } else if (secondaryColors.includes(color)){ 
    return `${color} is a secondary color`;
   } else {
    return `${color} is neither primary or secondary color `;
   }
  
  };
  
  console.log(colorType('pink')); //output: 'pink is a secondary color'