# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
bench1 = Bench.create!(description: 'This is a bench!', lng: -122.449, lat: 37.766 )
bench2 = Bench.create!(description: 'This is another bench!', lng: -122.454383, lat: 37.760074 )
bench3 = Bench.create!(description: 'This is a stupid bench!', lng: -122.414922, lat: 37.743935 )
