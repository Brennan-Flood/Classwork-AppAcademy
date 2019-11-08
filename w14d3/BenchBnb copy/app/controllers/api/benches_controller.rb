class Api::BenchesController < ApplicationController
  def create
    @bench = User.new(bench_params)
    if @bench.save
      login(@bench)
      render "api/benches/index"
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def index
    @benches = Bench.all

    render :index
  end

#   private 
#   def user_params
#     params.require(:bench).permit(:username, :password)
#   end
end