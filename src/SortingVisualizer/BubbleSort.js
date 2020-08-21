
import swap from './Swap.jsx'

export function bubbleSortAnimations(array)
{
  let animations = [];
  let arrayCopy = array.slice();

  bubbleSortHelper(arrayCopy,animations)
  
  array = arrayCopy;
  return [animations,array];
}

function bubbleSortHelper(arrayCopy, animations){

  let arrayCopyLength = arrayCopy.length -1;
  let sorted ;
  while(arrayCopyLength)
  { 
    sorted =false;
    for(let i = 0 ; i < arrayCopyLength; i++){
        animations.push(["comparision1",i,i+1]);
        animations.push(["comparision2",  i,i+1]);
        if(arrayCopy[i] > arrayCopy[i+1]){
          sorted = true;
          animations.push(["swap",i , arrayCopy[i+1]])
          animations.push(["swap",i+1 , arrayCopy[i]])
          swap(arrayCopy , i, i + 1)
        }
    }
    if(sorted===false)
      break;
    arrayCopyLength--;
  }

}



