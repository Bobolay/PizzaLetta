class PagesController < ApplicationController

  def index
  end

  def checkout
    @render_footer = false
  end

  def constructor
    @render_footer = false
  end

end