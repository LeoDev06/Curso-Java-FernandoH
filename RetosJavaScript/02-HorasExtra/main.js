const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];

function countHours(year, holidays) {

  let extraHours = 0;

  for(let i = 0; i < holidays.length; i++){
    let day = new Date(`${holidays[i]}, ${year}`).getDay();
    
    if(day !== 0 && day !==  6){
      extraHours = extraHours + 2;
    }else{
      extraHours = extraHours * 1;
    }
  }
  
  return extraHours;

}

const extraHours = countHours(year, holidays);
console.log(extraHours);