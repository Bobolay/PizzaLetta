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
   config.included_models = [Shipping,Oferta,Aboutimage,Giftdescription]
  config.model Shipping do
   label "Доставка"
   include_fields :time_of_shipping, :description, :first_address, :first_address_map, :second_address, :second_address_map, :payment_description, :image
 end
 config.model Oferta do
  label "Оферта"
  include_fields :image, :first_title,:first_description,:second_title, :second_description
end
config.model Aboutimage do
 navigation_label "Про нас"
 label "Фотографії"
 include_fields :image
end
config.model Giftdescription do
 navigation_label "Промоакціїі"
 label "Загальний опис"
 field :description, :ck_editor
end

end
