import React, {useState } from 'react'
import fetchData from '../custom-axios'
import Character from './Character'
import {SingleCharacter} from '../types/index'


const Characters = () => {
    const [characters  , setCharacters]  = useState<SingleCharacter[]>([] )
    const [info, setInfo] = useState([])
    const [count,setCount] =useState(0)

    getCharacters()
    async function getCharacters(){
        const {info:information, results} = await fetchData('https://rickandmortyapi.com/api/character')
        setCharacters(results)
        setInfo(information)


    }
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
            CHARACTERS
        </h1>

        <div>
            <Character  character={characters[count]}/>
        </div>
        
        

    </div>
  )
}

export default Characters