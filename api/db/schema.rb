# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_28_210717) do

  create_table "computers", force: :cascade do |t|
    t.string "brand"
    t.string "model"
    t.float "screen_size"
    t.integer "model_year"
    t.boolean "asleep"
    t.datetime "last_backed_up_at"
  end

  create_table "dog_walks", force: :cascade do |t|
    t.boolean "number_two"
    t.integer "dog_id", null: false
    t.integer "walk_id", null: false
    t.index ["dog_id"], name: "index_dog_walks_on_dog_id"
    t.index ["walk_id"], name: "index_dog_walks_on_walk_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "age"
    t.string "breed"
    t.string "image_url"
  end

  create_table "issues", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.boolean "resolved"
    t.datetime "started_at"
    t.integer "computer_id", null: false
    t.integer "technician_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["computer_id"], name: "index_issues_on_computer_id"
    t.index ["technician_id"], name: "index_issues_on_technician_id"
  end

  create_table "technicians", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "specialization"
    t.date "start_date"
  end

  create_table "walks", force: :cascade do |t|
    t.datetime "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
