class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all.where(business_id: params[:business_id])
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end


end