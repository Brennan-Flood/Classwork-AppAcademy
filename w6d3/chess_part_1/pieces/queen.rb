require_relative 'slideable'
require_relative 'piece'
class Queen
include Slideable
def symbol 
    :queen
  end
  
  protected
  def move_dirs
    horizontal_vertical_dirs + diagonal_dirs
  end
end
