require "byebug"
class PolyTreeNode
  attr_reader :parent, :value, :children #, :root_node
  def initialize(v) #may also pass node?
    @value = v
    @parent = nil
    @children = []
    # @root_node = node
  end

  def inspect
    { 'value' => @value, 'parent_value' => @parent.value }.inspect
  end

  def parent=(property)
    # debugger
    @parent.children.reject!{ |ele| ele == self } if !@parent.nil? 
    @parent = property
    if !@parent.nil? 
        @parent.children << self if !@parent.children.include?(self) 
    end
  end

  def add_child(child_node)
    child_node.parent = self
  end

  def remove_child(child_node)
    if children.include?(child_node)
        child_node.parent = nil
    else
        raise "not a child"
    end
  end

  def dfs(target_value)
    #call dfs on a node
    #self = root node
    #iterate through self's children. then call dfs on each child
    #base case
    return self if self.value == target_value
    
    children.each do |child|
      result = child.dfs(target_value)
      return result unless result.nil?
    end
    # first_child = self.children.first
    # second_child = self.children.last
    # first_child.dfs(target_value) || second_child.dfs(target_value)
    return nil
  end

  def bfs(target_value)
    queue = [self]
    until queue.empty?
      return queue.first if queue.first.value == target_value
      queue += queue.first.children
      queue.shift
    end
    nil
  end
end
