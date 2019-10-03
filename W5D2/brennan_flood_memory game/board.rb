class Board #I already downloaded the file, you don't have to send it over.
    attr_reader :board, :n
    attr_accessor :alphabet

    @@alphabet = (:A..:Z).to_a.shuffle
    
    def initialize(n)
        @n = n
        @board = board(n)
        @sample_alphabet = []
    end

    def sample_alphabet
        (n**2 / 2).times do
            @sample_alphabet << @@alphabet.pop
        end
    end

    def board(n)
       Array.new(n) {Array.new(n, " ")}
    end

    def []=(pos, val)
        idx_1, idx_2 = pos
        self.board[idx_1][idx_2] = val
    end

    def populate
        empty_spots_arr = empty_spots
        until board.flatten.none?(" ")
            temp_symbol = sample_alphabet.pop
            2.times do 
                card_instance = Card.new(temp_symbol)
               []=(empty_spots_arr.shift, card_instance)
            end
        end
    end

    def empty_spots
        empty_spots = []
        self.board.each_index do |idx_1|
            self.board.each_index do | idx_2|
                empty_spots << [idx_1, idx_2] if self.board[idx_1][idx_2] == ' '
            end
        end
        empty_spots.shuffle
    end

    def render
        temp_board = self.temp_board
        puts " #{(0..self.board.length).to_a.join(' ')}"
        temp_board.each_with_index do |row, i|
            puts "#{i} #{row.join(" ")}"
        end
    end

    def temp_board
        temp_board = self.board 
        temp_board.map do |row|
            row.map do |card_ins|
                card_ins.face_up? == true ? card_ins.face_value : " "   
            end
        end
    end

    def won?
        self.board.flatten.all? {|card_instance| card_instance.face_up?)
    end

    def reveal(pos)
        idx_1, idx_2 = pos
        card_instance = self.board[idx_1][idx_2]
        if card_instance.face_up? == false
            card_instance.reveal
            return card_instance.face_value
        end
        false
    end
end