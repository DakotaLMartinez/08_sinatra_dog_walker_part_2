import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import DogsToolBar from './DogsToolBar';
import DogsList from './DogsList';
import NewDogForm from './NewDogForm';
import DogDetail from './DogDetail';

function DogsContainer() {
  const [dogs, setDogs] = useState([]);

  return (
    <div className="w-4/5 mx-auto pt-12">
      <DogsToolBar />
      <Switch>
        <Route exact path="/dogs">
          <DogsList dogs={dogs} />
        </Route>
        <Route exact path="/dogs/new">
          <NewDogForm />
        </Route>
        <Route
          exact
          path="/dogs/:id"
          render={({ match }) => (
            <DogDetail
              dog={dogs.find((dog) => dog.id === parseInt(match.params.id))}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default DogsContainer;
