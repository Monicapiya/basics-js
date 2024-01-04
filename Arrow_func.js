/*
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:


*/

let materials = ['Park', 'Morning', 'SunLight', 'Rays'];
                   
console.log(materials.map((material) => material.length));


// output: [ 4, 7, 8, 4 ]


const stringLength = str => console.log(`the length of "${str}" is:`, str.length)

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)


/*
Output:

'the length of "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu" is:' 85

*/