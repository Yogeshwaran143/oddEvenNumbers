import React, { Component } from "react";
import './App.css';

class Numbers extends Component {
    render() {
        var value = 0;
        var min = 1;
        var max = 100;
        var showOddNumbers = false;
        var randomArray = [];
        var oddArray = [];
        var evenArray = [];

        function getData(val) {
            value = val.target.value;
        }

        function generateNumber() {
            for(let i = 0; i < value; i++){
                var number = min + (Math.random() * (max-min));
                randomArray[i] = Math.floor(number);
            }
        }

        function oddNumbers() {
            showOddNumbers = true;
            for (let i = 0; i < value; i++) {
              if (randomArray[i] % 2 !== 0) {
                oddArray.push(randomArray[i]);
              }
            }
            console.log(oddArray);
        }

        function evenNumbers() {
            showOddNumbers = false;
            for (let i = 0; i < value; i++) {
              if (randomArray[i] % 2 === 0) {
                evenArray.push(randomArray[i]);
              }
            }
            console.log(evenArray);
        }

        return (
            <div className="center">
              <header>
                <div className="heading center">
                  <h1> Number Filter </h1>
                </div>
              </header>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter the number of inputs"
                    className="numberInput"
                    onChange={getData}
                  ></input>
                </div>
                <div>
                  <button className="randomButton" onClick={generateNumber}> Generate Random Numbers </button>
                </div>
                <div className="buttons center">
                  <div className="button">
                    <button className="buttonStyle" onClick={oddNumbers}> ODD </button>
                  </div>
                  <div className="button">
                    <button className="buttonStyle" onClick={evenNumbers}> EVEN </button>
                  </div>
                </div>
                <div>
                  <h1> Filtered Array </h1>
                </div>
                <div> { showOddNumbers ? <h2> {oddArray.join(',')} </h2> :  <h2> {evenArray.join(',')} </h2>} </div>
              </div>
            </div>
        );
    };
}

export default Numbers;