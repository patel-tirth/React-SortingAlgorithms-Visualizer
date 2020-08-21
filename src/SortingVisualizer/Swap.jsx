
import React from 'react'

const swap = (arrayCopy,i,j) => {
    const tempArr = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = tempArr;
}


export default swap;
