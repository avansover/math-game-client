import { useContext } from "react"
import { PageContext } from "../../contextApi/generalContext";
import { Page } from "../../models/Enums";

export const Header = () => {

    const { setPage } = useContext(PageContext);

    return <div className="MainMenuHeader">
        Header
        <button onClick={() => setPage(Page.MAIN_MENU)}>MAIN_MENU</button>
        <button onClick={() => setPage(Page.POP_UP)}>POP_UP</button>
    </div>
}