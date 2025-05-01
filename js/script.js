// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";
function Guess() {
    let ans= "";
    let guessNumber = parseInt(document.getElementById("guessNumber").value);
    if (guessNumber == 12) {
        ans = "You got the Answer"
    }
    if (guessNumber != 12) {
        ans = "You got it wrong. the correct answer is" + 12; 
    }
    document.getElementById("ans").innerHTML = ans ;
}