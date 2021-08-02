class DogWalksController < ApplicationController

  post "/dog_walks" do
    puts params.inspect
    puts dog_walk_params.inspect
    dog_walk = DogWalk.create(dog_walk_params)
    dog_walk.to_json(methods: [:formatted_time])
  end

  patch "/dog_walks/:id" do 
    dog_walk = DogWalk.find(params[:id])
    dog_walk.update(dog_walk_params)
    dog_walk.to_json(methods: [:formatted_time])
  end

  delete "/dog_walks/:id" do
    dog_walk = DogWalk.find(params[:id])
    dog_walk.destroy
    dog_walk.to_json(methods: [:formatted_time])
  end

  private

  def dog_walk_params
    allowed_params = %w(walk_time number_two walk_id dog_id)
    params.select{|param, value| allowed_params.include?(param)}
  end
end