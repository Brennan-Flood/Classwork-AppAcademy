json.array! @guests do |guest|
  if guest.age > 39 && guest.age < 51
    json.name guest.name
    json.age guest.age
    json.favorite_color guest.favorite_color
  end
end