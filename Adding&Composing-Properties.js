/*
Objects are stored by reference which means that if you have to update a property’s value, you have to keep in mind that the object may have been referenced elsewhere in your code and it might affect some other part of the application inadvertently.

Mutation is thus frowned upon especially when it comes to working with JavaScript libraries and frameworks like React. It is therefore important to prevent mutation when adding, updating or deleting properties from objects.
 
The traditional way to prevent object mutation is to use Object.assign() to combine two or more objects in such a way that they’re not mutated. The spread operator provides an even easier syntax.
 

*/


const userDb = [
  {
    id: 1,
    name: 'Dmitri Mishkov',
    email: 'dmitri.m@sprintserve.co',
    password: 'tempPass',
  },
  {
    id: 2,
    name: 'Jimmy McIntyre',
    email: 'jimmymc@whatmail.com',
    password: 'tempPass',
  },
  {
    id: 3,
    name: 'David Adams',
    email: 'adams@whatmail.com',
    password: 'tempPass',
  },
];

const userPriveleges = {
  profile: true,
  admin: false,
  billing: true,
};

const genPassword = (name) =>
  name.replace(/\s/, '-').toLowerCase().split('').reverse().join('');


const configureUsers = userDb.map((user) => ({
    ...user,
    password: genPassword(user.name),
    ...userPriveleges,
  }));
   
  console.log(configureUsers);

  /*
Output:

[
  {
    id: 1,
    name: 'Dmitri Mishkov',
    email: 'dmitri.m@sprintserve.co',
    password: 'vokhsim-irtimd',
    profile: true,
    admin: false,
    billing: true
  },
  {
    id: 2,
    name: 'Jimmy McIntyre',
    email: 'jimmymc@whatmail.com',
    password: 'erytnicm-ymmij',
    profile: true,
    admin: false,
    billing: true
  },
  {
    id: 3,
    name: 'David Adams',
    email: 'adams@whatmail.com',
    password: 'smada-divad',
    profile: true,
    admin: false,
    billing: true
  }
]


*/


