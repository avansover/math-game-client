import { CharacterCreation } from "./CharacterCreation/CharacterCreation"
import { CharacterSelection } from "./CharacterSelection/CharacterSelection"
import { UserCreation } from "./UserCreation/UserCreation"

export const MainMenu = () => {
    return (<div className="MainMenuPage">
        <CharacterSelection />
        <CharacterCreation />
        <UserCreation />
    </div>)
}