import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewDogForm({ dogs, setDogs }) {
  const history = useHistory();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch(`${process.env.REACT_APP_API_URL}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        dog: {
          name,
          age,
          breed
        }
      })
    });

    const parsedBody = await res.json();
    setDogs([...dogs, parsedBody]);
    history.push('/dogs');
  };
  return (
    <>
      <h1 className="text-3xl mb-3">New Dog</h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 text-2xl lg:text-lg lg:grid-cols-6 items-center"
      >
        <div className="lg:col-span-5 lg:flex">
          <fieldset className="flex flex-grow mr-2 my-2">
            <label className="w-16" for="name">
              Name
            </label>
            <input
              type="text"
              className="flex-grow border-b-2 ml-2 outline-none"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-grow mr-2 my-2">
            <label className="w-16" for="age">
              Age
            </label>
            <input
              type="text"
              className="flex-grow border-b-2 ml-2 outline-none"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-grow mr-2 my-2">
            <label className="w-16" for="breed">
              Breed
            </label>
            <input
              type="text"
              className="flex-grow border-b-2 ml-2 outline-none"
              name="breed"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </fieldset>
        </div>

        <button
          className="block relative lg:-top-2 w-100 left-1 px-4 py-2 text-center bg-green-600 text-white"
          type="submit"
        >
          Add Dog
        </button>
      </form>
    </>
  );
}

export default NewDogForm;
