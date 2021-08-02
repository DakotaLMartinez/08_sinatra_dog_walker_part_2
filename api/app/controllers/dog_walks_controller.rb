class DogWalksController < ApplicationController

  post "/dog_walks" do 
    dog_walk = DogWalk.create(dog_walk_params)
    dog_walk.to_json(methods: [:formatted_time])
  end


  private 

  def dog_walk_params
    allowed_params = %w(walk_time dog_id number_two)
    params.select {|param,value| allowed_params.include?(param)}
  end
end