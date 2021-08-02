class DogWalk < ActiveRecord::Base
  belongs_to :dog
  belongs_to :walk

  delegate :formatted_time, to: :walk

  def walk_time=(time)
    self.walk = Walk.find_or_create_by(time: time)
  end
end