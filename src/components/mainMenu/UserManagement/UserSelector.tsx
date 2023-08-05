import { Button } from "@mui/material"
import { User, UserContext } from "../../../contextApi/userContext"
import { useContext } from "react"

export const UserSelector = (props: {
    user: User
}) => {

    const { setUser } = useContext(UserContext)

    const selectUserHandler = () => {
        console.log(props.user);
        setUser(props.user)
    }

    return <Button onClick={selectUserHandler}>
        {props.user.UserName}
    </Button>
}