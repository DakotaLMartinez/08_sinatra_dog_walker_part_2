class DogsController < ApplicationController
  get "/dogs" do 
    Dog.all.to_json
  end

  post "/dogs" do 
    dog = Dog.create(dog_params)
    puts dog_params.inspect
    puts params.inspect
    puts dog.inspect
    dog.to_json
  end

  patch "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.update(dog_params)
    dog.to_json
  end

  delete "/dogs/:id" do 
    dog = Dog.find(params[:id])
    dog.destroy
    dog.to_json
  end

  private 

  def dog_params
    allowed_params = %w(name age breed image_url)
    params.select {|param,value| allowed_params.include?(param)}
  end
end