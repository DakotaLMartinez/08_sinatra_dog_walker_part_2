class DogWalk < ActiveRecord::Base
  belongs_to :dog
  belongs_to :walk

  def walk_time=(time)
    self.walk = Walk.find_or_create_by(time: time)
  end

  def formatted_time
    walk.time.strftime("%A, %m/%d/%y %l:%M %p")
  end
end