import React, { useState } from 'react'
import { FaWalking, FaPoop } from 'react-icons/fa'

function NewDogWalkForm({dog, toggleShowNewDogWalkForm, addDogWalk}) {
  const [walk_time, set_walk_time] = useState("")
  const [number_two, set_number_two] = useState(false)

  console.log({
    walk_time,
    number_two
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      walk_time,
      number_two,
      dog_id: dog.id
    })
    const res = await fetch(`${process.env.REACT_APP_API_URL}/dog_walks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })

    const newDogWalk = await res.json()

    addDogWalk(newDogWalk)
  
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <span className="pb-1 pt-2 w-32"><input required type="datetime-local" onChange={e => set_walk_time(e.target.value)}/></span>
      <span className="flex items-center">
        <label htmlFor="number_two">
          <FaPoop
            style={{ color: number_two ? '#000' : '#bbb' }}
            size={20}
          />
        </label>
        <input 
          className="hidden" 
          id="number_two" 
          type="checkbox"
          onChange={(e) => set_number_two(e.target.checked) }
        />
      </span>
      <span className="flex items-center">
        <button className="bg-gray-100 px-4 py-2 mr-2" onClick={toggleShowNewDogWalkForm}>Cancel</button>
        <button className="flex bg-green-600 px-4 py-2 text-white" type="submit"><FaWalking size={20} /> Add Walk</button>
      </span>
    </form>
  )
}

export default NewDogWalkForm
