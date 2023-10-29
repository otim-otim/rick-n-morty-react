import React, {useState, useEffect } from 'react'
import fetchData from '../custom-axios'
import Character from './Character'
import {SingleCharacter} from '../types/index'
import Button from './Button'


const Characters = () => {
    const [characters  , setCharacters]  = useState<SingleCharacter[]>([] )
    const [info, setInfo] = useState([])
    const [count,setCount] =useState(0)

    useEffect(() => {
        // Code here will run after *every* render
        getCharacters()
      });
    useEffect(() => {
      //get the next character
      },[count]);

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
        {characters.length > 0 ? (
            <div>
                    <Button label="Previous" onClick={()=> setCount(count => count - 1)}/>
                    <Character character={characters[count]} />
                    <Button label="Next" onClick={()=> setCount(count => count + 1)}/>
                </div>
            ) : (
                <p>Loading data...</p>
            )}

        
        

    </div>
  )
}

export default Characters