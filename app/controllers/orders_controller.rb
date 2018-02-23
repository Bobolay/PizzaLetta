class OrdersController < ApplicationController

  def new
    @order=Order.new
    redirect_to root_path
  end

end
