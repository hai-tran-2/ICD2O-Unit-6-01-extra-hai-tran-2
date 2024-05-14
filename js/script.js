
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function calculteQuotientOfTwoNumber() {

  // input
  const dividendNumber = parseInt(document.getElementById("dividend-number").value)
  const divisorNumber = parseInt(document.getElementById("divisor-number").value)
  let remainderOfNumbers = 0
  let counter = 0

  // process
  if (dividendNumber > divisorNumber) {
    remainderOfNumbers = dividendNumber - divisorNumber
    counter++
    document.getElementById("result").innerHTML = dividendNumber + " - " + divisorNumber + " = " + remainderOfNumbers + "<br />"
    while (true) {
      if (remainderOfNumbers < divisorNumber) {
        break
      } else {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + remainderOfNumbers + " - " + divisorNumber
        remainderOfNumbers = remainderOfNumbers - divisorNumber
        counter++
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + " = " + remainderOfNumbers + "<br />"
      }
    }
    // output
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "The answer is: " + counter + " R " + remainderOfNumbers
  } else {
    document.getElementById("result").innerHTML = "The answer is: " + counter + " R " + dividendNumber
  }
}
