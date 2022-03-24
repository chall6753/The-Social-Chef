# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

10.times do
    Ingredient.create(name: Faker::Food.ingredient)
end


10.times do
    user = User.create(bio: Faker::Lorem.paragraph, password: Faker::Internet.password, username: Faker::Name.name, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Name.name + "@gmail.com")
    recipe = user.recipes.create(name: Faker::Food.dish, description: Faker::Food.description, instructions: Faker::Food.description)
    recipe.recipe_ingredients.create(ingredient_id: rand(11), quantity: rand(5), unit: Faker::Food.measurement)
    user.comments.create(recipe_id: 1, comment: Faker::Lorem.paragraph, rating: rand(5))
end

