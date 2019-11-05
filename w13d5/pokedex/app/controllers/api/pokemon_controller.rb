class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @poke = Pokemon.includes(:items).find(params[:id])
    render :show
  end

end