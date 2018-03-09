class Api::V1::ConstructorController < Api::V1::BaseController
  def index
    @base = Constructor.first
    @json = { :name => "Конструктор", :price_small => @base.small_price, :price_big => @base.big_price, :quantity => 1, :ingredients => []}
    respond_with @json
  end
end
