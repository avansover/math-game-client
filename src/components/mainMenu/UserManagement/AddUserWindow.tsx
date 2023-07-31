import { useContext, useState } from "react";
import { PopUpContext } from "../../../contextApi/generalContext";
import { Button, TextField } from "@mui/material";

export const AddUserWindow = () => {

    const { setPopUpWindow } = useContext(PopUpContext);

    const [userName, setUserName] = useState<string | null>(null)

    const addUser = () => {

    }

    const closeAddUserWindow = () => {
        setUserName(null);
        setPopUpWindow({ isOpen: false, element: null });
    }

    return (<div className="AddUserWindow">
        <div>
            <TextField onChange={(e) => setUserName(e.target.value)} placeholder="User name" />
        </div>
        <div>
            <Button
                onClick={() => addUser()}
                variant="contained"
                color="success"
            >Add User</Button>
            <Button
                onClick={closeAddUserWindow}
                variant="outlined"
                color="error"
            >cancel</Button>
        </div>


    </div>)
}