class Cat < ApplicationRecord
  CAT_COLORS =  %w(red brown gray white black orange) 


    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :sex, inclusion: { in: %w(M F),
      message: "%{value} is not a valid size" }
    validates :color, inclusion: { 
      in: CAT_COLORS, message: "%{value} is not a valid color"
    }

  def age
    Date.today.year - self.birth_date.year
  end
end