class Api::V1::IngredientsController < Api::V1::BaseController
  def index
    @meat = Ingredient.where(category: "Мясо").map do |u|
      { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1 }
    end
    @vegetable = Ingredient.where(category: "Овочі").map do |u|
      { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1 }
    end
    @seafood = Ingredient.where(category: "Морепродукти").map do |u|
      { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1 }
    end
    @cheese = Ingredient.where(category: "Сири").map do |u|
      { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1 }
    end
    @specii = Ingredient.where(category: "Cпеції").map do |u|
      { :name => u.name, :price => u.price, :imgUrl => u.image.url, :qnty => 1 }
    end
  @json=[{:ingredient_category => "Мясо", :list => @meat},
         {:ingredient_category => "Овочі", :list => @vegetable},
         {:ingredient_category => "Морепродукти", :list => @seafood},
         {:ingredient_category => "Сири", :list => @cheese},
         {:ingredient_category => "Cпеції", :list => @specii}]
    # @ingredients_by_vcategory = @ingredients.group_by{|i| i.category }
    respond_with @json
  end
end
