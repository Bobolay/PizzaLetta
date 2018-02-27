class RenameIngredients < ActiveRecord::Migration
    def self.up
      rename_table :ingridients, :ingredients
    end

    def self.down
      rename_table :ingredients, :ingridients
    end
end
