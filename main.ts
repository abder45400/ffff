let lastValue = 0
let vitesseM1 = 0
let vitesseM2 = 0
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        vitesseM1 = 255
        vitesseM2 = 255
    } else if (control.eventValue() == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.showString("Avant")
    } else if (control.eventValue() == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.showString("Arrière")
    } else if (control.eventValue() == 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.showString("droite")
    } else if (control.eventValue() == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.showString("gauche")
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showString("Stop")
    }
})
