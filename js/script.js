
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
  let remainderOfTwoNumbers = 0
  let counter = 0

  // process
  if (dividendNumber > divisorNumber) {
    remainderOfTwoNumbers = dividendNumber - divisorNumber
    counter++
    document.getElementById("result").innerHTML = dividendNumber + " - " + divisorNumber + " = " + remainderOfTwoNumbers + "<br />"
    while (true) {
      if (remainderOfTwoNumbers < divisorNumber) {
        break
      } else {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + remainderOfTwoNumbers + " - " + divisorNumber
        remainderOfTwoNumbers = remainderOfTwoNumbers - divisorNumber
        counter++
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + " = " + remainderOfTwoNumbers + "<br />"
      }
    }
    // output
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "The answer is: " + counter + " R " + remainderOfTwoNumbers
  } else {
    document.getElementById("result").innerHTML = "The answer is: " + counter + " R " + dividendNumber
  }
}
