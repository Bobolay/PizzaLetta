RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
   config.included_models = [Attention,Alert,User,Orderlist,Salat,Constructor,Order,Ordersphone,Ordersemail,Call,Subscribe,Pizza,Contact,Ingredient,Drink,Gift,About,Shipping,Oferta,Aboutimage,Giftdescription]
   config.model Alert do
     navigation_label "Повідомлення"
     label "Попап"
     include_fields  :show
     field :text, :ck_editor
   end
   config.model Attention do
     navigation_label "Повідомлення"
     label "Червоне повідомлення зверху"
     include_fields :show
     field :text, :ck_editor

   end
   config.model Orderlist do
     navigation_label "Замовлення"
     label "Інформація про замовлення"
     field :order_id
     include_fields :name, :quantity, :price, :bonus_name, :bonus_description, :size
   end
   config.model Salat do
     navigation_label "Меню"
     label "Салати"
     include_fields :name, :image, :weight, :ingredients, :price, :show
     field :category, :enum do
       enum ["Мясні","Рибні","Вегетаріанські"]
     end
   end
  config.model Shipping do
   label "Доставка"
   include_fields :time_of_shipping, :description, :first_address, :first_address_map, :second_address, :second_address_map, :payment_description, :image
  end
  config.model Oferta do
    label "Оферта"
    include_fields :image, :first_title,:first_description,:second_title, :second_description
  end
  config.model Constructor do
    navigation_label "Меню"
    label "Основи для піц"
    include_fields :small_price, :big_price
  end
  config.model Aboutimage do
    navigation_label "Про нас"
    label "Фотографії"
    include_fields :image
  end
  config.model Giftdescription do
    navigation_label "Промоакції"
    label "Загальний опис"
    field :description, :ck_editor
  end
  config.model About do
    navigation_label "Про нас"
    label "Про нас"
    include_fields :image, :frase
    field :description, :ck_editor
    field :cookers, :ck_editor
    field :fast_work, :ck_editor
    field :clean_truth, :ck_editor
  end
  config.model Gift do
    navigation_label "Промоакції"
    label "Промоакції"
    field :description, :ck_editor
    include_fields :title, :image, :show
  end
  config.model Drink do
    navigation_label "Меню"
    label "Напої"
    include_fields :title, :price, :image, :volume, :show
    field :category, :enum do
      enum ["Безалкогольні","Алкогольні","Лимонади"]
    end
  end
  config.model Ingredient do
    navigation_label "Меню"
    label "Інгрідієнти"
    include_fields :name, :price, :image, :showcustom
    field :category, :enum do
      enum ["Мясо","Морепродукти","Сири","Овочі","Cпеції"]
    end
  end
  config.model Contact do
    label "Контактні дані"
    navigation_label "Коактні дані"
    include_fields :first_number, :second_number, :third_number, :facebook, :instagram
  end
  config.model Pizza do
    navigation_label "Меню"
    label "Піца"
    field :ingredients
    include_fields :name, :image, :pricesmall, :pricebig, :weight, :meat, :cheese, :fish, :vegeterian, :show, :discountsmall, :discountbig, :bonus_name, :bonus_description
  end
  config.model Order do
    navigation_label "Замовлення"
    label "Інформація про доставку "
    include_fields :id, :type_of_shipping, :price, :name, :phone, :email, :subscribe, :city, :street, :building, :flat, :date_of_shipping, :fast_or_not, :type_of_pay, :rest, :promocode, :comment, :pick_up_from, :date_of_picking, :time_of_picking
  end
  config.model Ordersphone do
    navigation_label "Користувачі"
    label "Номера клієнтів"
    include_fields :phone
  end
  config.model Ordersemail do
    navigation_label "Користувачі"
    label "Пошти клієнтів"
    include_fields :email
  end
  config.model Call do
    navigation_label "Користувачі"
    label "Замовлення звінка"
    include_fields :phone
  end
  config.model Subscribe do
    navigation_label "Користувачі"
    label "Підписка на новини"
    include_fields :phone
  end
end
