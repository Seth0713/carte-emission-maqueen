input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    stop = stop + 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let stop = 0
radio.setGroup(1)
basic.forever(function () {
    if (stop == 2) {
        radio.sendNumber(4)
        stop = 0
    }
})
