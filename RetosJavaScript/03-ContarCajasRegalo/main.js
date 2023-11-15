//! https://adventjs.dev/es/challenges/2022/3

/* const packOfGifts = ["book", "doll", "bal"]
const reindeers = ["dasher", "dancer"] */

const packOfGifts = ['game', 'videoconsole', 'computer'];
const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'];

function distributeGifts(packOfGifts, reindeers) {

  let weightGifts = 0;
  let weightReindeers = 0;
  let numberBoxes = 0;
  let adjustmentBoxes = 0;

  for(const i in packOfGifts){
    weightGifts = weightGifts + packOfGifts[i].length;
  }

  for (const i in reindeers) {
    weightReindeers = (weightReindeers + (reindeers[i].length * 2));
  }

  if(weightReindeers % 2 === 0 && weightGifts % 2 === 0){

    numberBoxes = weightReindeers / weightGifts;
    adjustmentBoxes = Math.trunc(numberBoxes);
  }else{
    numberBoxes = (weightReindeers / weightGifts);
    adjustmentBoxes = Math.trunc(numberBoxes);
  }
  console.log(adjustmentBoxes);
  return adjustmentBoxes;
  
}

distributeGifts(packOfGifts, reindeers);