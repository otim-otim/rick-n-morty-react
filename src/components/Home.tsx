import React from 'react'
import Characters from './Characters'


const Home = () => {
  return (
    <div className='bg-white'>
        <h1 className="text-3xl font-bold underline">
            RICK N MORTY!
        </h1>
        <div className='card m-80'>
            image comes here
            <Characters />

        </div>

    </div>
  )
}

export default Home