class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @poke = Pokemon.includes(:items).find(params[:id])
    render :show
  end

  def create
    @poke = Pokemon.new(pokemon_params)
    if @poke.save
      render :show
    else
      render json: @poke.errors.full_messages, status: 422
    end
  end
  
  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves: [])
  end
end