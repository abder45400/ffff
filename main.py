def on_mes_dpad_controller_id_microbit_evt():
    global lastValue, vitesseM2, vitesseM1
    if lastValue != control.event_value():
        lastValue = control.event_value()
        vitesseM2 = 255
        vitesseM1 = 255
        led.stop_animation()
        if control.event_value() == 1:
           basic.show_string("A")
        elif control.event_value() == 3:
           basic.show_string("B")
        elif control.event_value() == 5:
            basic.show_string("C")
        elif control.event_value() == 7:
            basic.show_string("D")
        elif control.event_value() == 9:
            basic.show_string("1")
        else:
            basic.clear_screen()

vitesseM1 = 0
vitesseM2 = 0
lastValue = 0
lastValue = 0
vitesseM2 = 0
vitesseM1 = 0
basic.show_string("Hello!")