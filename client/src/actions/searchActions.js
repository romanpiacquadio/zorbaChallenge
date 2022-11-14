import { 
    TURN_ON_MODAL,
    TURN_OFF_MODAL
 } from "../types";

export function turnOnModal() {
    return (dispatch) => {
        dispatch ( turnOn() )
    }
}

export function turnOffModal() {
    return (dispatch) => {
        dispatch ( turnOff() )
    }
}

const turnOn = () => ({
    type: TURN_ON_MODAL,
    payload: true
})

const turnOff = () => ({
    type: TURN_OFF_MODAL,
    payload: false
})
