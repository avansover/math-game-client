import { CharacterCreation } from "./CharacterManagement/CharacterManagement"
import { ClassSelection } from "./ClassSelection/ClassSelection"
import { UserManagemnet } from "./UserManagement/UserManagemnet"

export const MainMenu = () => {
    return (<div className="MainMenuPage">
        <ClassSelection />
        <CharacterCreation />
        <UserManagemnet />
    </div>)
}