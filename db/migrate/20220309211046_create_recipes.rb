class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.text :instructions

      t.timestamps
    end
  end
end
