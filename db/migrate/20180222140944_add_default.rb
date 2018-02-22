class AddDefault < ActiveRecord::Migration
  def change
    change_column_default :drinks, :show, :default => false
    change_column_default :ingridients, :show, :default => false
    change_column_default :gifts, :show, :default => false
  end
end
