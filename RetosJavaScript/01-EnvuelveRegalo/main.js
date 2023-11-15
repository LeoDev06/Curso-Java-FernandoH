const gifts = ['cat', 'game', 'socks'];

function wrapping(gifts) {
  let top = '', center = '', bottom = '';
  const WrappedGifts = [];

  for (let i in gifts) {
    center = `*${gifts[i]}*`;

    for (let j = 0;  j < gifts[i].length+2; j++){
      top = top + '*';
      bottom = bottom +'*';
    }

    WrappedGifts.push(top+'\n'+center+'\n'+bottom);
    
    top = '';
    bottom = '';
  }

  return WrappedGifts;
}

const wrapped = wrapping(gifts);
console.log({wrapped});

