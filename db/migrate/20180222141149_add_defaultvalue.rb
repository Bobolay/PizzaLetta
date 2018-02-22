class AddDefaultvalue < ActiveRecord::Migration
  def change
    change_column_default :drinks, :show, :default => true
    change_column_default :ingridients, :show, :default => true
    change_column_default :gifts, :show, :default => true
  end
end
