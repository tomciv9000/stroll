class MemoriesController < ApplicationController
  before_action :set_memory, only: [:show, :update, :destroy]
  before_action :authenticate_user
  def index
    @memories = Memory.all
    render json: { memory: MemorySerializer.new(@memories) }
  end

  def show
    render json: { memory: MemorySerializer.new(@memory) }
  end


  
def create
  @memory = Memory.create(memory_params)
  if @memory.valid?
    render json: { memory: MemorySerializer.new(@memory)}, status: :created
  else
    render json: { error: 'failed to create memory' }, status: :not_acceptable
  end
end


def update
  if @memory.update(memory_params)
    render json: @memory
  else
    render json: @memory.errors, status: :unprocessable_entity
  end
end

def destroy
  @memory.destroy
end

private
    
  def set_memory
    @memory = Memory.find(params[:id])
  end
  
  def memory_params
    params.require(:memory).permit(:description, :spot_id, :user_id)
  end
  
end
