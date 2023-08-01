import { useContext } from "react";
import { PopUpContext } from "../../../contextApi/generalContext";
import { AddUserWindow } from "./AddUserWindow";
import { User, UsersContext } from "../../../contextApi/userContext";

export const UserManagemnet = () => {

    const { setPopUpWindow } = useContext(PopUpContext);

    const { users } = useContext(UsersContext)

    return (<div className="UserManagemnet">
        <div className="UsersHolder">
            <div className="UserDetails">details</div>
            <div className="Users">
                {users.map((user: User, userIndex: number) => {
                    return (<div key={userIndex}>{user.UserName}</div>)
                })}
            </div>
        </div>
        <div className="AddUser">
            <button onClick={() => setPopUpWindow({ isOpen: true, element: <AddUserWindow /> })}>Add User</button>
        </div>
    </div>)
}