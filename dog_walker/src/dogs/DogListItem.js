import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

function DogListItem({ dog: { id, name, age, breed, image_url } }) {
  return (
    <div className="p-4 shadow text-center">
      <img
        className="object-cover lg:h-144 w-full"
        src={image_url}
        alt={name}
      />
      <h1 className="text-2xl">{name}</h1>
      <p>
        {breed} - {age} old
      </p>
    </div>
  );
}

export default DogListItem;
