import swap from './Swap.jsx';


export function selectionSortAnimations(array)
{
    let animations = [];
    let arrayCopy = array.slice();

    selectionSortHelper(arrayCopy,animations);

    array = arrayCopy;

    return [animations,array];
}

function selectionSortHelper(arrayCopy,animations){
    let minIdx;

    for(let i = 0 ; i<arrayCopy.length-1 ; ++i){
        minIdx = i;
        for( let j = i+1 ; j < arrayCopy.length; ++j){
            animations.push(["comp1", j , minIdx])
            animations.push(["comp2", j, minIdx])

            if(arrayCopy[j] < arrayCopy[minIdx]){
                minIdx = j ;
            }

        }
        animations.push(["swap" , minIdx , arrayCopy[i]])   
        animations.push(["swap" , i , arrayCopy[minIdx]])

        swap(arrayCopy,minIdx,i)


    }
}