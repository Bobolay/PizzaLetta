class Api::V1::SalatsController < Api::V1::BaseController
  def index
    @salat = Salat.where(show: true)
    @salats = @salat.map do |u|
      if u.category == "Мясні"
        { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1, :salat_ingredients => u.ingredients, :weight => u.weight, :category => "meat", :category_ukr => u.category }
      elsif u.category == "Рибні"
        { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1, :salat_ingredients => u.ingredients, :weight => u.weight, :category => "fish", :category_ukr => u.category }
      else
        { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1, :salat_ingredients => u.ingredients, :weight => u.weight, :category => "vegetarian", :category_ukr => u.category }
      end
    end
    respond_with @salats
  end
end
