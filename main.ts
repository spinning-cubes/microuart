input.onButtonPressed(Button.A, function () {
    serial.writeLine("A")
})
serial.onDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    OLED.writeStringNewLine(serial.readUntil(serial.delimiters(Delimiters.SemiColon)))
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("A+B")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("B")
})
tinkercademy.LED(DigitalPin.P0, OnOff.On)
serial.setBaudRate(BaudRate.BaudRate9600)
serial.redirectToUSB()
basic.showIcon(IconNames.Yes)
let msg = "MicroUART v1.0"
serial.writeLine("MicroUART v1.0")
OLED.init(128, 64)
OLED.writeStringNewLine(msg)
msg = "READY."
serial.writeLine(msg)
OLED.writeStringNewLine(msg)
OLED.writeString("Baud rate is ")
OLED.writeNum(9600)
OLED.newLine()
tinkercademy.LED(DigitalPin.P1, OnOff.On)
basic.forever(function () {
    tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    basic.pause(1000)
    tinkercademy.LED(DigitalPin.P2, OnOff.On)
    basic.pause(1000)
})
