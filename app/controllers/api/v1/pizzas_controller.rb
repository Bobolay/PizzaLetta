class Api::V1::PizzasController < Api::V1::BaseController
  def index
    @pizza = Pizza.first
    @json=Pizza.where(show: true).map do |pizza|
          {:imgUrl => pizza.image.url,
           :name => pizza.name,
           :meat => pizza.meat,
           :chesee => pizza.cheese,
           :fish => pizza.fish,
           :vegeterian => pizza.vegeterian,
           :discountbig => pizza.discountbig,
           :discountsmall => pizza.discountsmall,
           :pricesmall => pizza.pricesmall,
           :qnty => 1,
           :weight => pizza.weight,
           :bonus => {:name => pizza.bonus_name, :attribute => pizza.bonus_description},
           :ingredients => Ingredient.includes(:pizzas).where(pizzas: { id: pizza.id}).map do |u|
                    { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1 }
                  end}
          end
      @json.map do |json|
        if json[:bonus][:name]==""
          json.delete(:bonus)
        end
       end
    respond_with @json

  end
end
