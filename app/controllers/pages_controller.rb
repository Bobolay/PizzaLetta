class PagesController < ApplicationController

  def index
  end

  def about
    @images = Aboutimage.all

  end

  def checkout
    @render_footer = false
  end

  def constructor
    @render_footer = false
  end

  def shipping
    @shipping = Shipping.first
  end

  def promotions
    @description = Gistdescription.first
  end

  def policy
    @policy = Oferta.first
  end
end
