class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :update, :destroy]
  before_action :authenticate_user

  def index
      @places = current_user.places
      render json: { place: PlaceSerializer.new(@places) }
  end

  def show
    render json: { place: PlaceSerializer.new(@place) }
  end

  def find
    @place = Place.find_by(id: params[:place][:id])
    if @place
      render json: { place: PlaceSerializer.new(@place) }
    else
      @errors = @place.errors.full_messages
      render json: @errors
    end
  end

  def create
    @place = Place.create(place_params)
    if @place.valid?
      render json: { place: PlaceSerializer.new(@place)}, status: :created
    else
      render json: { error: 'failed to create place' }, status: :not_acceptable
    end
  end

  def update
    if @place.update(place_params)
      render json: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @place.destroy
  end

  private
    
  def set_place
    @place = Place.find(params[:id])
  end
  
  def place_params
    params.require(:place).permit(:name, :description, :lat, :lng, :user_id)
  end
  
end
