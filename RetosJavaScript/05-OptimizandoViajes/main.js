
const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

/**
 * 
 * @param {Array} giftsCities 
 * @param {Number} maxGifts 
 * @param {Number} maxCities 
 */
function getMaxGifts(giftsCities, maxGifts, maxCities) {

  for (let i = 2; i < giftsCities.length; i++){
    console.log(giftsCities[i]);
  }

}

getMaxGifts(giftsCities, maxGifts, maxCities);