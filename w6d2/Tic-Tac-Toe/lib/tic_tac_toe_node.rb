require_relative 'tic_tac_toe'
require "byebug"
class TicTacToeNode
  POSSIBLE_POS =[
    [0,0],[0,1],[0,2],
    [1,0],[1,1],[1,2],
    [2,0],[2,1],[2,2]
  ]

  attr_reader :board, :next_mover_mark, :prev_move_pos, :children

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def children
    children = []

    next_mark = nil
    if next_mover_mark == :x
      next_mark = :o
    else
      next_mark = :x
    end
    
    POSSIBLE_POS.each do |pos|
      if @board.empty?(pos)
        next_board = board.dup
        next_board[pos] = next_mover_mark
        children << TicTacToeNode.new(next_board, next_mark, pos)
      end
    end
    children
  end

  
  def losing_node?(evaluator)

    if board.over? 
      return board.won? && board.winner != evaluator
    end

    if evaluator == next_mover_mark
    # check if all of our children are losing nodes
      children.all? { |child| child.losing_node?(evaluator) }
    else
    # check if any nodes are losing nodes
      children.any? { |child| child.losing_node?(evaluator) }
    end
  
  end

  def winning_node?(evaluator)
  
    if board.over?
      return board.won? && board.winner == evaluator
    end

    if evaluator == next_mover_mark
      children.any? { |child| child.winning_node?(evaluator) }
    else
      children.all? { |child| child.winning_node?(evaluator) }
    end
  end
  
end
