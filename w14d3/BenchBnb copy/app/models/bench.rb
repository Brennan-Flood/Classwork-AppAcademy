class Bench < ApplicationRecord
    validates :description, :lng, :lat, presence: true


end