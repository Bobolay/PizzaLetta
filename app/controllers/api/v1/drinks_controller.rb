class Api::V1::DrinksController < Api::V1::BaseController
  def index
    @drink = Drink.all
    @drinks = @drink.map do |u|
      if u.category == "Лимонади"
        { :name => u.title, :price => u.price, :imgUrl => u.image.url, :qnty => 1,:volume => u.volume, :category => "lemonad", :category_ukr => u.category }
      elsif u.category == "Безалкогольні"
        { :name => u.title, :price => u.price, :imgUrl => u.image.url, :qnty => 1,:volume => u.volume, :category => "non-alcohol", :category_ukr => u.category }
      else
        { :name => u.title, :price => u.price, :imgUrl => u.image.url, :qnty => 1,:volume => u.volume, :category => "alcohol", :category_ukr => u.category }
      end
    end
    respond_with @drinks
  end
end
