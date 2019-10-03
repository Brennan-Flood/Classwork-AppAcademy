class Card
    
    

    def initialize(face_value)
        @face_value = face_value
        @face_up = false 
    end

    def face_up?
        @face_up
    end

    def hide
        @face_up = false
    end

    def reveal
        @face_up = true
    end

    #def to_s
#
    #end
#
    #def ==
#
    #end
end