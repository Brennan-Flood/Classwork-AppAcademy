
# For this problem assume there is a Node class. The node class will take in a value as part of its initialization.
#  You will be monkeypatching the following method:

# Write a method `dfs` that does a depth-first search starting at a root node. It takes in a target, 
# and a proc as an argument.

class Node

  def dfs(traget=1,&prc)
    raise 'no proc' if prc == nil

    return self if prc.call(self)

    self.children.each do |child|
      result = child.dfs(target,&prc)
      return result if result

    end

    nil

  end
  
end

# node = Node.new(1)