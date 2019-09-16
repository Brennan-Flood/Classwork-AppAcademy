class Towers

 attr_reader :towers

  def initialize()
    @towers = Array.new(3){Array.new()}
    @towers[0] = [3,2,1]
    play
  end

  def moves(from, to)
   disk = @towers[from][-1]
    if valid_move?(disk,to)
        @towers[to] << @towers[from].pop 
    else   
        raise "Invalid move"
    end
    
  end
  
  
  def valid_move?(disk, tower)
    return true if @towers[tower].empty?
    return false if @towers[tower].min < disk
    true
  end

  def won?
     return true if @towers[-1].length == 3
     false
  end

  def play
    until won?
      p @towers
      puts "Enter a from tower and a to tower e.g: 0,1"
      begin
        
    
      move = gets.chomp.split(",")
      x, y = move
      moves(x.to_i, y.to_i)
      
      rescue RuntimeError
        puts "Invalid move, please try again..."
        p @towers
        retry 

      end
    end
    p @towers
    puts "You win!"
  end
end

towers = Towers.new