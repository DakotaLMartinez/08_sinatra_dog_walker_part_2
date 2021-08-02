# Sinatra/React Dog Walker Part 2

## Getting Started

Clone down the repo
```bash
git clone https://github.com/DakotaLMartinez/08_sinatra_dog_walker_part_2
```

Open it a new VSCode window
```bash
code 08_sinatra_dog_walker_part_2
```

Open one terminal for backend
```bash
cd api
bundle install
rake db:migrate
rake db:seed
rake server
```

Open another terminal for frontend

```bash
cd dog_walker
npm install
npm start
```

Open a third terminal for sinatra tux console

```bash
cd api
tux
```


## Features Implemented since we last met

- Dog Walks are loaded from API when `/dogs/:id` route is active (review `.to_json` call)
- Dog Walks can be created when `/dogs/:id` route is active

Features for the day:

- Allow users to update the `number_two` value for the dog_walk by clicking the `poop` icon
- Allow users to delete a `dog_walk` by clicking the `trash can` icon.

## Part 1 - Adding Update for dog_walks

### What are required API endpoint(s)?

## Part 2 - Adding Delete for dog_walks

## Part 3 - Adding Update for dogs