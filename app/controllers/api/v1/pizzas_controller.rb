class Api::V1::PizzasController < Api::V1::BaseController
  def index
    @pizza = Pizza.first

    @drinks = Ingredient.includes(:pizzas).where(pizzas: { id: @pizza.id})

    # @json={:imgURL => @pizza.image.url,
    #        :name => @pizza.name,
    #        :meat => @pizza.meat,
    #        :chesee => @pizza.cheese,
    #        :fish => @pizza.fish,
    #        :vegeterian => @pizza.vegeterian,
    #        :ingredients => Ingredient.includes(:pizzas).where(pizzas: { id: @pizza.id}).map do |u|
    #                 { :name => u.name, :price => u.price, :imgURL => u.image.url, :quantity => 1 }
    #               end}

    @json=Pizza.all.map do |pizza|
          {:imgUrl => pizza.image.url,
           :name => pizza.name,
           :meat => pizza.meat,
           :chesee => pizza.cheese,
           :fish => pizza.fish,
           :vegeterian => pizza.vegeterian,
           :discountbig => pizza.discountbig,
           :discountsmall => pizza.discountsmall,
           :qnty => 1,
           :bonus => {:name => pizza.bonus_name, :attribute => pizza.bonus_description},
           :ingredients => Ingredient.includes(:pizzas).where(pizzas: { id: pizza.id}).map do |u|
                    { :name => u.name, :price => u.price, :imgURL => u.image.url, :quantity => 1 }
                  end}
          end
    respond_with @json
  end
end
