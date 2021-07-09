class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all.where(business_id: params[:business_id]).includes(:user, :business)
        render :index
    end

    def show
        @review = Review.find(params[:id]).includes(:user, :business)
        render :show
    end


end