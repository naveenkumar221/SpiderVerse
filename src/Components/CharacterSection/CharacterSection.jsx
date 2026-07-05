import "./CharacterSection.css";

import CharacterCard from "../CharacterCard/CharacterCard";

import characters from "../../data/characters";

function CharacterSection(){

return(

<section id="characters" className="characters">

<h1>Spider Heroes</h1>

<div className="character-grid">

{

characters.map(character=>(

<CharacterCard

key={character.id}

character={character}

/>

))

}

</div>

</section>

)

}

export default CharacterSection;