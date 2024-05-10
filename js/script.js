
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * this function find type of triangle
 */

function calculteQuotientOfTwoNumber() {
  // input
  const dividendNumber = parseInt(document.getElementById("dividend-number").value)
  const divisorNumber = parseInt(document.getElementById("divisor-number").value)
  let remainderOfTwoNumbers = 0
  let counter = 0

  // process
  remainderOfTwoNumbers = dividendNumber - divisorNumber
  counter++

  while (true) {
    if (remainderOfTwoNumbers < divisorNumber) {
      break
    } else {
      remainderOfTwoNumbers = remainderOfTwoNumbers - divisorNumber
      counter++
      
    }
  }
  // output
  document.getElementById("result") = "The answer of " + dividendNumber + "/" + divisorNumber + " is: " + counter + " R " + remainderOfTwoNumbers
}
