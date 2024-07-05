import { PopUpWindows } from "../contextApi/generalContext";

export const PopUpArrayHolder = (props: {
    popUpWindows: PopUpWindows
}) => {

    const PopUpWindowDisplayer = () => {

        return props.popUpWindows.windows.map((popUp, index) => {
            return (
                <div className="GeneralPopUpHolder" key={index}>{popUp.element ? popUp.element : "No element"}</div>
            )
        })
    }

    return (<div className="PopUpsHolder">
        {PopUpWindowDisplayer()}
    </div>)
}