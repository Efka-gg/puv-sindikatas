input.onButtonPressed(Button.A, function () {
    eboticsMIBO.forward()
})
input.onButtonPressed(Button.B, function () {
    eboticsMIBO.back()
})
eboticsMIBO.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
	
})
