require_relative 'piece'
require 'singleton'

class NullPiece < Piece
  include Singleton
  def initialize
  end

  def empty?
    true
  end
  
  def moves
    raise 'NullPiece piece has no moves'
  end

  def symbol
    " "
  end

end