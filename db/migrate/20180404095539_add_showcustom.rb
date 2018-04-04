class AddShowcustom < ActiveRecord::Migration
  def change
    add_column :ingredients, :showcustom, :boolean
  end
end
