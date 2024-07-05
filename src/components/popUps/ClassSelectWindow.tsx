import { useContext, useEffect, useState } from "react";
import { PopUpArrayContext } from "../../contextApi/generalContext";
import { Button, ButtonGroup } from "@mui/material";
import { PlayerListContext } from "../../contextApi/userContext";
import { PlayerJoinCard } from "../village/PlayerJoinCard";
import { ObjectId } from "mongodb";
import popUpWindowFunction from "../../utils/popUpWindowTool";
import { AddPlayerWindow } from "./AddPlayerWindow";
import axiosTool from "../../utils/axiosTool";
import { HeroClass } from "../../models/Character";

export const ClassSelectWindow = (props: { popUpIndex: number }) => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);

    const [heroClasses, setHeroClasses] = useState<HeroClass[]>([])

    const removeHighestIndexPopUp = () => {

        var newPopUpArray = popUpWindowFunction.removePopUpWindow(popUpWindows);
        setPopUpWindows(newPopUpArray);
    }

    useEffect(() => {

        const getClasses = async () => {
            try {
                let resp = await axiosTool.get("class/get_all_classes");

                let dataBaseClassList: HeroClass[] = resp.data.data;

                console.log(dataBaseClassList);

                setHeroClasses(dataBaseClassList);

            } catch (error) {
                console.log(error);
            }

        };

        getClasses()

    }, [])

    return (<div className="JoinPlayerWindow"
        style={{
            top: `${popUpWindowFunction.distanceFromTop(props.popUpIndex)}vh`,
            left: `${popUpWindowFunction.distanceFromLeft(props.popUpIndex)}vh`
        }} >

        <div className="popUpHeader">Join a player to the advanture</div>

        <div style={{ display: "flex", flexFlow: "column" }}>{heroClasses.map((heroClass, i) => {
            return (<Button
                key={i}
                variant="outlined"
            >{heroClass.name}</Button>)
        })}</div>


        <ButtonGroup>
            <Button
                //onClick={openPopUpWindowHundler}
                variant="outlined"
                color="success"
            >Add Character</Button>
            <Button
                disabled={popUpWindowFunction.isButtonDisabled(popUpWindows.windows.length - 1, props.popUpIndex)}
                onClick={removeHighestIndexPopUp}
                variant="outlined"
                color="error"
            >Done</Button>
        </ButtonGroup>
    </div>)
}