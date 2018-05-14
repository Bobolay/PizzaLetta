class PagesController < ApplicationController
  before_filter :instagram
  before_filter :popup

  def index
    @title = "Піца"
  end

  def drinks
    @title = "Напої"
  end

  def salads
    @title = "Салати"
  end

  def about
    @images = Aboutimage.all
    @about = About.first
    @title = "Про нас"
  end

  def checkout
    @render_footer = false
    @title = "Оформлення замовлення"
  end

  def constructor
    @render_footer = false
    @title = "Конструктор піци"
  end

  def shipping
    @shipping = Shipping.first
    @title = "Доставка"
  end

  def promotions
    @description = Giftdescription.first
    @gifts = Gift.all.show
    @title = "Акції"
  end

  def policy
    @policy = Oferta.first
    @title = "Оферта"
  end

  def promotion
    @promotion = Gift.find(params[:format])
    @next = Gift.where(["id > ?", params[:format]]).show.first
    @previous = Gift.where(["id < ?", params[:format]]).show.last
    @last = Gift.show.last
    @first = Gift.show.first
    @title = "Акції"
  end

  def create
    render json: @order
    @array = params
    @order = Order.new
    @order.name = params[:info][:name]
    @order.phone = params[:info][:phone]
    @order.email = params[:info][:email]
    @order.street = params[:info][:street]
    @order.type_of_shipping = params[:info][:orderway]
    @order.city = "Львів"
    @order.building = params[:info][:building]
    @order.flat = params[:info][:apt_number]
    @order.date_of_shipping = params[:info][:date]
    @order.fast_or_not = params[:info][:time]
    @order.type_of_pay = params[:info][:paymentmethod]
    @order.rest = params[:info][:sumchange]
    @order.comment = params[:info][:comment]
    @order.subscribe = params[:info][:subscribe]
    @order.pick_up_from = params[:info][:officeaddress]
    @order.date_of_picking = params[:info][:date]
    @order.time_of_picking = params[:info][:time]
    @order.subscribe = params[:info][:subscribe]
    @order.promocode = params[:info][:promocode]
    @order.price = params[:totalprice]
    @order.save
    if params[:info][:subscribe] == true
    if Subscribe.exists?(phone: "#{params[:info][:email]}") == false
      Subscribe.create(:phone => "#{params[:info][:email]}")
    end
    end
    if Ordersphone.exists?(phone: "#{params[:info][:phone]}") == false
      Ordersphone.create(:phone => "#{params[:info][:phone]}")
    end
    array = params[:cart]
    array.each do |s|
      list = Orderlist.new
      if s[:special] == true
        a="Особлива(#{s[:name]})"
        s[:ingredients].each do |d|
        a = a + ",+" + d[:name] + "*" + d[:qnty].to_s
      end
        list.name = a
      elsif s[:name] == "Конструктор"
        a="Основа+#{s[:sauce]}"
        s[:ingredients].each do |d|
        a = a + ",+" + d[:name] + "*" + d[:qnty].to_s
      end
      list.name = a
      else
      list.name = s[:name]
      end
      list.quantity = s[:qnty]
      list.price = s[:qnty].to_i * s[:price].to_i
      if s[:bonus]
        list.bonus_name = s[:bonus][:name]
        list.bonus_description = s[:bonus][:attribute]
      end
      list.order_id = @order.id
      list.save
    end
    if @order.save
      UserMailer.order_email(@array).deliver_now
    end
  end
  def call
    render json: {}
    call = Call.new
    call.phone = params[:phone_number]
    call.save
  end
  def email
    render json: {}
    subscribe=Subscribe.new
    subscribe.phone = params[:email]
    subscribe.save
  end

  def stub
    render layout: false
  end

  private
  def popup
    @alert=Alert.first
    @message = Attention.first
  end

  def instagram

    url="https://api.instagram.com/v1/users/self/media/recent/?access_token=5421929898.1677ed0.02b11596b2d4432aac9c495a152b9288"
    @json=JSON.parse(open("https://api.instagram.com/v1/users/self/media/recent/?access_token=5421929898.1677ed0.02b11596b2d4432aac9c495a152b9288").read)["data"][0..2]
  end

end
