control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        vitesseM2 = 255
        vitesseM1 = 255
        if (control.eventValue() == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.showString("A")
        } else if (control.eventValue() == 3) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
            basic.showString("B")
        } else if (control.eventValue() == 5) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
            basic.showString("C")
        } else if (control.eventValue() == 7) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.showString("D")
        } else if (control.eventValue() == 9) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let vitesseM2 = 0
let vitesseM1 = 0
let lastValue = 0
basic.showIcon(IconNames.Yes)
lastValue = 0
vitesseM1 = 0
vitesseM2 = 0
