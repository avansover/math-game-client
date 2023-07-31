import { useContext } from "react";
import { PopUpContext } from "../../../contextApi/generalContext";
import { AddUserWindow } from "./AddUserWindow";

export const UserManagemnet = () => {

    const { setPopUpWindow } = useContext(PopUpContext);

    return (<div className="UserManagemnet">
        <div className="UsersHolder">
            <div className="UserDetails">details</div>
            <div className="Users">users</div>
        </div>
        <div className="AddUser">
            <button onClick={() => setPopUpWindow({ isOpen: true, element: <AddUserWindow /> })}>Add User</button>
        </div>
    </div>)
}