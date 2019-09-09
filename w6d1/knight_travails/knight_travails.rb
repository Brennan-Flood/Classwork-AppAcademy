require_relative "poly_tree_node.rb"
require "byebug"
# debugger
class KnightPathFinder

    def initialize(start_pos)
        @root_node = PolyTreeNode.new(start_pos)
        @considered_position = [start_pos]

        #calls build move tree
    end

    def new_move_positions(pos)
        valids = KnightPathFinder.valid_moves(pos)
        valids.reject! {|pos| @considered_position.include?(pos)}
        valids.each {|pos| @considered_position << pos}
        valids
    end

    def self.valid_moves(pos)
        shifts = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, -1], [2, 1], [-2, -1], [-2, 1]]
        valids = []
        a, b = pos
        shifts.each do |shift|
            temp_move = [shift[0] + a, shift[1] + b]
            valids << temp_move if (0..7).include?(temp_move[0]) && (0..7).include?(temp_move[1])
        end
        valids
    end

    def build_move_tree
        #use the root postion to call new move positions
        # @
        # grab the first child, and create new moves position
        if @considered_position.empty? 
            new_move_positions(@root_node.value)
        end
        @considered_position.each do |pos|
            @root_node.add_child(PolyTreeNode.new(pos))
        end #this loop is for moves from the root only
    
    end
end
# @considered_postions.each do |pos|
# PolyTreeNode.new(pos)
# valids = new_move_positions(pos)
# valids.each do |valid|
# set the parent of "valid" to the "pos" node from the each loop

path_finder = KnightPathFinder.new([5,5])
path_finder.build_move_tree

