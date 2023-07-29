export const UserManagemnet = () => {

    const addUser = () => {

        let resp = { name: "test"}
        let status = 200

        if (status === 200){
            console.log("adding user");
            
        }
    }


    return (<div className="UserManagemnet">
        <div className="UsersHolder">
            <div className="UserDetails">details</div>
            <div className="Users">users</div>
        </div>
        <div className="AddUser">
            <button onClick={addUser}>Add User</button>
        </div>
    </div>)
}