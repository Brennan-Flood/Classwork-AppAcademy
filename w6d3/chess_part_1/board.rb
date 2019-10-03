require_relative 'bridge'
require 'colorize'
require 'byebug'

class Board
  attr_reader 'board'
  def initialize
    @board = Array.new(8) { Array.new(8) }
    @sentinel = NullPiece.instance
    populate
  end
 
  def display
    display_board = @board.map do |row|
      row.map do |space| 
        if space.color != nil
          "#{space.symbol} : #{space.color}"
        else
          space.symbol
        end
      end
    end
    display_board.each { |row| puts "#{row}".cyan}
  end

  def populate
    @board.map!.with_index do |row, y|
      case y
      when 0
        row.map!.with_index {|_, x| Piece.new(:black, self, [y, x])}
      when 1
        row.map!.with_index {|_, x| Piece.new(:black, self, [y, x])}
      when 6
        row.map!.with_index {|_, x| Piece.new(:white, self, [y, x])}
      when 7
        row.map!.with_index {|_, x| Piece.new(:white, self, [y, x])}
      else
        row.map! {@sentinel}
      end
    end
  end

  def move_piece(start_pos, end_pos)
    raise 'start position is not on board' if !valid_pos?(start_pos)
    raise 'end position is not on board' if !valid_pos?(end_pos)
    raise 'start position is empty' if self[start_pos] == @sentinel
    raise "this is an ally, you can't move here" if self[start_pos].color == self[end_pos].color
    kill_piece(end_pos)
    move_piece!(start_pos, end_pos)
  end

  def kill_piece(pos)
    self[pos] = @sentinel
  end

  def move_piece!(start_pos, end_pos)
    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
  end

  def valid_pos?(pos)
    x, y = pos
    return true if (0..7).include?(x) && (0..7).include?(y)
    false
  end

  def [](pos)
    x, y = pos
    @board[x][y]
  end

  def []=(pos, val)
    x, y = pos
    @board[x][y] = val
  end

  private
  attr_reader :sentinel
end

if __FILE__ == $PROGRAM_NAME
  board = Board.new
  board.display
  board.move_piece([2,0], [0, 0])
  puts ""
  puts ""
  board.display

end