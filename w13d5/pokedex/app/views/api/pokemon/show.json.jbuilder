
json.pokemon do
  item_ids = @poke.items.map { |item| item.id }
  json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :moves, :image_url  
  json.item_ids item_ids
end


json.items do
  json.array! @poke.items do |item|
    json.id item.id
    json.name item.name
    json.price item.price
    json.happiness item.happiness
    json.image_url item.image_url
  end
end

# "name", null: false
#     t.integer "price", null: false
#     t.integer "happiness", null: false
#     t.string "image_url", null: false