
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]

//const boxes = [1, 3, 6, 4 ,2, 5]

function fitsInOneBox(boxes) {
  //! Variables para el metodo de ordenamiento quicksort
  if (boxes.length === 0) return [];

  let left = [], right = [], auxiliary = [];
  let pivot = boxes.pop();
  console.log(pivot);

  for (let i = 0; i < boxes.length; i++) {
    if(boxes[i].l !== pivot.l && boxes[i].w !== pivot.w && boxes[i].h !== pivot.h){
      if(boxes[i].l <= pivot.l && boxes[i].w <= pivot.w && boxes[i].h <= pivot.h){
        left.push(boxes[i]);
      }else if(boxes[i].l >= pivot.l && boxes[i].w >= pivot.w && boxes[i].h >= pivot.h){
        right.push(boxes[i])
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  const trueFalse = auxiliary.concat(fitsInOneBox(left), pivot, fitsInOneBox(right));

  return trueFalse ? true : false;
}
let t = fitsInOneBox(boxes);
console.log({t});