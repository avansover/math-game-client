import { useContext, useState } from "react";
import { PopUpContext } from "../../../contextApi/generalContext";
import { Button, TextField } from "@mui/material";
import axiosTool from "../../../utils/axiosTool";

export const AddUserWindow = () => {

    const { popUpWindow, setPopUpWindow } = useContext(PopUpContext);

    const [userName, setUserName] = useState<string | null>(null)

    const createUser = async () => {
        try {
            let resp = await axiosTool.post("user/add-user", { userName: userName })
            console.log(resp);
            setPopUpWindow({ isOpen: false, element: null, userTriger: !popUpWindow.userTriger });
        } catch (error) {
            console.log(error);
        }
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
                onClick={() => createUser()}
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