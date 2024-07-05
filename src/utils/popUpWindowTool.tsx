import { JoinPlayerWindow } from "../components/popUps/JoinPlayerWindow";
import { PopUpWindows } from "../contextApi/generalContext";

const baseDistanceFromTop = 5;
const baseDistanceFromLeft = 5;

const popUpWindowFunction = {

    addPopUpWindow: (popUpWindeowArray: PopUpWindows, popUpElement: JSX.Element): PopUpWindows => {

        const newWindows = [...popUpWindeowArray.windows, { isOpen: true, element: popUpElement }];

        return {
            ...popUpWindeowArray,
            windows: newWindows
        };
    },

    removePopUpWindow: (popUpWindeowArray: PopUpWindows): PopUpWindows => {

        const newWindows = popUpWindeowArray.windows.slice(0, -1);

        return {
            ...popUpWindeowArray,
            windows: newWindows
        };

    },

    isButtonDisabled: (popupArrayLength: number, popUpIndex: number): boolean => {

        let retVal = popupArrayLength !== popUpIndex ? true : false
        return retVal;
    },

    distanceFromTop: (popUpIndex: number): number => {
        let retval = popUpIndex * 3.2 + baseDistanceFromTop;
        return retval;
    },

    distanceFromLeft: (popUpIndex: number): number => {
        let retval = popUpIndex * 3.2 + baseDistanceFromLeft;
        return retval;
    }

}

export default popUpWindowFunction;