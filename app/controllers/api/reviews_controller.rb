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
        # debugger
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            # render '/api/businesses/show'
            render :show
        end
    end

    def review_params
        params.require(:review).permit(:rating, :description, :user_id, :business_id)
    end

end