

class Vehicle
  attr_reader :parking_spot
  def initialize(liscense_plate)
    @parking_spot = []
    @liscense_plate = liscense_plate
    @size = size
  end

  def take_spot(spot)
    @parking_spot << spot
  end
end

class Motorcycle < Vehicle
  def initialize
    @spot_needed = 1
    super
  end

end

class Bus < Vehicle
# ...
  def initialize
    @spot_needed = 2
    super
  end
end

class Car < Vehicle
  def initialize
    @spot_needed = 1
    super
  end
end

class Parking_spot
  attr_reader :row, :spot_number
  def initialize(size, level, row, spot_number)
    @vehicle = nil
    @spot_number = spot_number
    @size = size
    @level = level
    @row = row
  end

  def empty?
    vehicle.nil?
  end

  def can_fit_vehicle?(vehicle)
    vehicle.spot_needed == size
  end

  def park(vehicle)
    @vehicle = vehicle
  end

  def unpark
    @vehicle = nil
    Level.notify 
  end
end
# spot
# lot 
# section/zone
# cars - type, size, motorcycle? 