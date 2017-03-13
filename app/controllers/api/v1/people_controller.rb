class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio], age: params[:age])
    if @person.save
      render "show.json.jbuilder"
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end

  def update
    @person = Person.find_by(id: params[:id])
    @person.name = params[:name] || @person.name
    @person.bio = params[:bio] || @person.bio
    @person.age = params[:age] || @person.age
    if @person.save
      render "show.json.jbuilder"
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end

  def destroy
    @person = Person.find_by(id: params[:id])
    if @person.destroy
      render json: {message: "Goodbye! This person has died!"}
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end
end
