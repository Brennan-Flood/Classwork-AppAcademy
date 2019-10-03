# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all

cat1 = Cat.create!({birth_date: '20190101', color: 'red', name: 'cat', sex: 'M', description: 'male cat'})
cat2 = Cat.create!({birth_date: '20190101', color: 'black', name: 'Big Cat', sex: 'M', description: 'Alpha cat'})