/*
The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

*/



const language = 'Mandarin';


switch (language){
  
  case 'Chinese':
    case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
    case 'Spanish':
      console.log('2nd place in number of native speakers');
      break;

      case 'English':
      console.log('3rd place');
      break;

      case 'Hindi':
        console.log('4th place');
        break;

        case 'Arabic':
          console.log('5th place');
          break;
       default:
        console.log('Great language too');

  }



  /*

const day = 'Monday';

switch(day) {
  case 'Monday':
  console.log('Coding on monday');
  break;

  case 'Tuesday':
  console.log('Coding on tuesday');
  break;

  case 'Wednesday':
  console.log('Coding on wednesday');
  break;

  case 'Thursday':
  console.log('Coding on thursday');
  break;

  case 'Friday':
  console.log('Coding on friday');
  break;

  case 'Saturday':
  console.log('Coding on saturday');
  break;

  case 'Sunday':
  console.log('Coding on sunday');
  break;

  default:
    console.log('Rest Day');
}

*/
