class Api::BusinessesController < ApplicationController
    
    def index
        @businesses = Business.all.includes(:photos, :reviews, :categories, :amenities)
        render :index
    end

    def search
        search_term = params[:search].downcase
        @businesses = Business.all.select do |b| 
            categories = []
            amenities = []
            b.categories.each {|e| categories.push(e.category.downcase)}
            b.amenities.each {|e| amenities.push(e.amenity.downcase)}
            b.name.downcase.include?(search_term) || b.zipcode == (search_term) || b.city == (search_term) || b.state == (search_term) || categories.include?(search_term) || amenities.include?(search_term)
        end
        render :index
    end

    def show
        @business = Business.find_by(id: params[:id])
        render :show
    end
end