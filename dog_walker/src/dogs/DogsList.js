import React from 'react'
import DogListItem from './DogListItem'

function DogsList({dogs}) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {dogs.map(dog => <DogListItem dog={dog} />)}
    </div>
  )
}

export default DogsList
