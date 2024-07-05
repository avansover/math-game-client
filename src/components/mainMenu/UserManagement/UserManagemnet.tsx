import { useContext } from "react";

import { User, UsersListContext } from "../../../contextApi/userContext";
import { UserSelector } from "./UserSelector";

export const UserManagemnet = () => {

   

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
          
        </div>
    </div>)
}