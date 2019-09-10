require_relative "poly_tree_node.rb"
require "byebug"
# debugger
class KnightPathFinder
    attr_accessor :root_node, :considered_position
    attr_reader :start_pos
    def inspect
        { 'value' => @value, 'parent_value' => @parent.value }.inspect
    end

    def initialize(start_pos)
        @root_node = PolyTreeNode.new(start_pos)
        @considered_position = [start_pos]
        @start_pos = start_pos
        #calls build move tree
        build_move_tree
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
        self.root_node = PolyTreeNode.new(start_pos)

        nodes = [root_node]

        until nodes.empty?
            current_node = nodes.shift

            current_pos = current_node.value
            new_move_positions(current_pos).each do |next_pos|
                next_node = PolyTreeNode.new(next_pos)
                current_node.add_child(next_node)
                nodes << next_node
            end
        end    
    end

    def find_path(end_pos)
        end_node = root_node.bfs(end_pos)
        trace_path_back(end_node)
    end

    def trace_path_back(end_node)
        queue = [end_node]
        last_pos = end_node.value
        path = []

        until queue.empty?
            parent = queue.first.parent
            if parent.nil?
                path.unshift(queue.first.value)
                return path
            else
                path.unshift(queue.first.value)
                queue << queue.shift.parent
            end
        end
    end
end

path_finder = KnightPathFinder.new([0, 0])
# path_finder.find_path([5,5])
p path_finder.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p path_finder.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]

# trace path back:
# find path node
# follow paretns back up to the top