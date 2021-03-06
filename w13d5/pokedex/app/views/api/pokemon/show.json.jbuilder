
json.pokemon do
  item_ids = @poke.items.map { |item| item.id }
  json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@poke.image_url)
  json.item_ids item_ids
end


# json.items do
#   json.array! @poke.items do |item|
#     json.set! item.id do
#       json.id item.id
#       json.name item.name
#       json.price item.price
#       json.happiness item.happiness
#       json.image_url item.image_url
#     end
#   end
# end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end