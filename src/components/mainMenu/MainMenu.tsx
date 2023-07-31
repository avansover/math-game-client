import { CharacterCreation } from "./CharacterCreation/CharacterCreation"
import { CharacterSelection } from "./CharacterSelection/CharacterSelection"
import { UserManagemnet } from "./UserManagement/UserManagemnet"

export const MainMenu = () => {
    return (<div className="MainMenuPage">
        <CharacterSelection />
        <CharacterCreation />
        <UserManagemnet />
    </div>)
}