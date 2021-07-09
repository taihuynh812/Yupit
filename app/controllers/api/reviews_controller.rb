class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all.where(business_id: params[:business_id]).includes(:user, :business)
        render :index
    end

    def show
        @review = Review.find(params[:id]).includes(:user, :business)
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: ["Unable to save changes"]
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review && @review.destroy
            render '/api/businesses/show'
        end
    end

    def review_params
        params.require(:review).permit(:rating, :description, :user_id, :business_id)
    end

end