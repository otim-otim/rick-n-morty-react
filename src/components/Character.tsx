import React from 'react'
import {SingleCharacter} from '../types'

type Props = {
    character : SingleCharacter
}

const Character = ({character } : Props ) => {
  return (
    <div>
        <h2 className="text-2xl  underline">
            {character.name}
        </h2>

        <div>
        <img src={character.image} alt={character.name}  title={character.name}/>

        </div>

        <div>
            <h3 className="text-xl  underline">
                Profile info
            </h3>
            <div>
                gender: {character.gender}
            </div>
            <div>
                species: {character.species}
            </div>
            <div>
                type: {character.type}
            </div>
            <div>
                status: {character.status}
            </div>
            <div>
                origin: <Link> {character.status}</Link> 
            </div>
        </div>


    </div>

  )
}

export default Character