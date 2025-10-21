/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mason tom
 * Created on: Sep 2025
 * This program generates and compares two numbers from 0 to 99 shows which is bigger.
*/

// variables
let number1 = 0
let number2 = 0

// generate 2 numbers
number1 = randint(0, 99)
number2 = randint(0, 99)

// show message at the start
basic.showIcon(IconNames.Happy)

// when the microbit is shaken compare the two numbers
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (number1 < number2) {
        basic.showNumber(number1)
        basic.showString("<")
        basic.showNumber(number2)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showNumber(number1)
        basic.showString(">")
        basic.showNumber(number2)
        basic.showIcon(IconNames.Happy)
    }
})

// when A is pressed start the program and create random numbers
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)

    basic.showString("#1")
    number1 = randint(0, 99)
    basic.showNumber(number1)
    basic.showIcon(IconNames.Happy)
})

// when B is pressed do the same as A
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("#2")
    number2 = randint(0, 99)
    basic.showNumber(number2)
    basic.showIcon(IconNames.Happy)
})
