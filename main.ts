input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    stop = stop + 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    stop = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    stop = 0
})
let stop = 0
radio.setGroup(1)
basic.forever(function () {
    if (stop == 2) {
        radio.sendNumber(4)
    }
})
