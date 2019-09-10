require_relative 'tic_tac_toe_node'
require "byebug"
class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    @game = TicTacToeNode.new(game.board, mark)
    @mark = mark
    children = @game.children
    # debugger
    possible_move = nil
    
    children.each do |child|
      if child.winning_node?(mark)
        possible_move = child.prev_move_pos
      end
    end

    if possible_move.nil?
      # possibles = []
      children.each do |child| 
        # debugger
        if !child.losing_node?(mark) 
          # possibles << child.prev_move_pos
          possible_move = child.prev_move_pos
        end 
      end
      
    end

 

    if possible_move.nil?
      raise "no possible move"
    else
      possible_move
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
