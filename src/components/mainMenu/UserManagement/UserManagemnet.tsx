import { useContext } from "react";
import { PopUpContext } from "../../../contextApi/generalContext";
import { AddUserWindow } from "./AddUserWindow";
import { User, UsersListContext } from "../../../contextApi/userContext";
import { UserSelector } from "./UserSelector";

export const UserManagemnet = () => {

    const { setPopUpWindow } = useContext(PopUpContext);

    const { users } = useContext(UsersListContext)

    return (<div className="UserManagemnet">
        <div className="UsersHolder">
            <div className="UserDetails">details</div>
            <div className="UserList">
                {users.map((user: User, userIndex: number) => {
                    return <UserSelector
                        key={userIndex}
                        user={user}
                    />
                })}
            </div>
        </div>
        <div className="AddUser">
            <button onClick={() => setPopUpWindow({ isOpen: true, element: <AddUserWindow /> })}>Add User</button>
        </div>
    </div>)
}