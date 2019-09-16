class Node
 
  def bfs(@prc)
     queue = [self]
     until queue.empty?
      current_node = queue.shift
       return current_node if prc.call(current_node)
         queue += current_node.children
     end 
    end 
    nil
  end 
end

# root_node.bfs()
# node.children == [child1, child...]