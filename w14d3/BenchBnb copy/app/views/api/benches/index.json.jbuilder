@benches.map do |bench|
    json.extract! bench, :description, :lng, :lat
end