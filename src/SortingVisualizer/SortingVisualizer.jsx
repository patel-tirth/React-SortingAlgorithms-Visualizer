import React from 'react'
import Button from 'react-bootstrap/Button';
import './SortingVisualizer.css';
import {bubbleSortAnimations} from './BubbleSort.js';
import {selectionSortAnimations} from './SelectionSort.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 8;

const PRIMARY_COLOR = '#00ff55';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor (props){
        super (props);

        this.state = {
            array: [],
            newheight: 0,
        };

        // this.resetArray = this.resetArray.bind(this);
    }


    componentDidMount(){
        this.resetArray();

    }
    
    resetArray(){
        
        const array = [];
        for(let i = 0 ; i<80; ++i){
           array.push(randomIntFromInterval(5,420));
        }

        this.setState({array});
    }

 bubbleSort()
    {
        const [animations,sortedArray] = bubbleSortAnimations(this.state.array);
        
        for(let i = 0 ; i < animations.length; ++i)
        {
          const arrayBars = document.getElementsByClassName('arrayBar');
          const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2")
          // const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const color = (animations[i][0] === "comparision1"  ) ? SECONDARY_COLOR : PRIMARY_COLOR;
            // const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [comp,barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color; 
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [comp,barIdx, newHeight] = animations[i];
              let barStyle = arrayBars[barIdx].style;
              barStyle.height = `${newHeight}px`;       
              // return <div> {`${newHeight}`}</div>
              // this.state.newheight = newHeight;
            }, i * ANIMATION_SPEED_MS);
          }
        }
        
        // // const sortedArrayInBuilt = this.state.array.slice().sort((a,b)=> a-b);
    
        // console.log(isEqual(sortedArrayInBuilt,sortedArray));
    }
   
    selectionSort(){
        // const sortedArrayInBuilt = this.state.array.slice().sort((a, b) => a - b);
        //  const sortedArray = selectionSortAnimations(this.state.array);
        //  console.log(isEqual(sortedArrayInBuilt,sortedArray));

        const [animations,sortedArray] = selectionSortAnimations(this.state.array);
        
        for(let i = 0 ; i < animations.length; ++i)
        {
        //   const arrayBars = document.getElementsByClassName('arrayBar');
        //   const isColorChange = (animations[i][0] === "comp1") || (animations[i][0] === "comp2") || (animations[i][0] === "comp3") 
          const arrayBars = document.getElementsByClassName('arrayBar');
          const isColorChange = (animations[i][0] === "comp1") || (animations[i][0] === "comp2");
          // const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            
            const color = (animations[i][0] === "comp1" ) ? SECONDARY_COLOR : PRIMARY_COLOR;

            // const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [comp,barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color; 
            }, i * ANIMATION_SPEED_MS);
          } else {
            
            setTimeout(() => {
                const [comp,barIdx, newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                 barStyle.height = `${newHeight}px`;       
            }, i * ANIMATION_SPEED_MS);
          }
        }
        
        // // const sortedArrayInBuilt = this.state.array.slice().sort((a,b)=> a-b);
    
        // console.log(isEqual(sortedArrayInBuilt,sortedArray));
    }


    


    render(){
        // const {array} = this.state;

        return (
            <div className="arrayContainer" >
            {this.state.array.map((value,id)=> (
                <div className = "arrayBar" key ={id} style = {{backgroundColor: PRIMARY_COLOR, height: `${value}px`}}>
                  
                
                </div>
            ))}
            <div>
            <Button className="generateNewArray"  onClick = {()=>this.resetArray()}>Generate New Array</Button>
            <Button  className = "bubbleSort" variant = "dark" onClick = {()=>this.bubbleSort()}>Bubble Sort</Button>
            <Button  className = "selectionSort"  variant = "dark" onClick = {()=>this.selectionSort()}>Selection Sort</Button>
            <Button  className = "quickSort"  variant = "dark" onClick = {()=>this.quickSort()}>Quick Sort</Button>
            <Button  className = "mergeSort"  variant = "dark" onClick = {()=>this.mergeSort()}>Merge Sort</Button>

            </div>
            </div>
        );
    }
   
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function isEqual(array1, array2)
{
    if(array1.length !== array2.length)
    {
        return false;
    }
    for(let i = 0 ; i < array1.length; i++)
    {
        if(array1[i] !== array2[i])
        {
            return false;
        }
    }
    return true;
}
