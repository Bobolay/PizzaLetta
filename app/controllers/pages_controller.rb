class PagesController < ApplicationController
 Contact.first

  def index
  end

  def about
    @images = Aboutimage.all
    @about = About.first
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
    @description = Giftdescription.first
    @gifts = Gift.all.show
  end

  def policy
    @policy = Oferta.first
  end
  def promotion
    @promotion = Gift.find(params[:format])
    @next = Gift.where(["id > ?", params[:format]]).show.first
    @previous = Gift.where(["id < ?", params[:format]]).show.last
    @last = Gift.show.last
    @first = Gift.show.first
  end
end
