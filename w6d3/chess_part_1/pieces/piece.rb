class Piece
  attr_accessor :pos
  attr_reader :color
  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

  def to_s
    symbol.to_s
  end

  def symbol
    # raise 'implemented in subclass'
    :p
  end

  def empty?
    false
  end

  def valid_moves

  end
end