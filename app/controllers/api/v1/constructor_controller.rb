class Api::V1::ConstructorController < Api::V1::BaseController
  def index
    @base = Constructor.first
    @json = { :name => "Конструктор", :price_small => @base.small_price, :price_big => @base.big_price, :qnty => 1, :ingredients => [], :imgUrl => @base.image.url}
    respond_with @json
  end
end
