import React from 'react'

interface SingleCharacter {
        id: number
     name: string
      status: string
      species: string
      type: string
      gender: string
      origin: {
        name: string
        url: string
      }
      location: {
        name: string
        url: string
      }
      image: string
      episode: [
        string
      ]
      url: string
      created: string
    }



const Character = (character  : SingleCharacter) => {
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