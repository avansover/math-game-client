import { PopUpWindowType } from "../contextApi/generalContext";

export const PopUpHolder = (props: {
    popUpWindow: PopUpWindowType | null
}) => {


    const PopUpWindowDisplayer = () => {

        if (props.popUpWindow === null) {
            return (<div>
                PopUpHolder
            </div>)
        }

        return props.popUpWindow.element;

       
    }

    return (<div className="PopUpHolder">
        {PopUpWindowDisplayer()}
    </div>)
}