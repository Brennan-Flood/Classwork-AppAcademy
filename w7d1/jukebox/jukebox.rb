class Jukebox
  @attr_reader :user , :player
  def initialize(user,player)
    @user = user 
    @player = player
  end 
end 

class User
  attr_reader :name
  def initialize(name)
  end 
end 

class player
attr_accessor :song_name, :playlist
  def initialize(song_name,playlist)
    @song_name = song_name
    @playlist = playlist
  end 
   def play(song)
     
   end 
end 

class Playlist
  
  def initialize
    @queue =[]
  end 
  def add_song(name)
    @queue << name
  end 
  def remove_song
      @queue.shift
  end 
end 

 
