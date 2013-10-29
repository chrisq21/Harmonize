# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20131028213451) do

  create_table "experiences", force: true do |t|
    t.integer  "instrument_id"
    t.string   "title"
    t.text     "description"
    t.string   "length"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "experiences", ["instrument_id"], name: "index_experiences_on_instrument_id"

  create_table "genres", force: true do |t|
    t.integer  "user_id"
    t.string   "genre"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "genres", ["user_id"], name: "index_genres_on_user_id"

  create_table "instruments", force: true do |t|
    t.integer  "user_id"
    t.string   "instrument"
    t.integer  "experience"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "seeking_id"
  end

  add_index "instruments", ["seeking_id"], name: "index_instruments_on_seeking_id"
  add_index "instruments", ["user_id"], name: "index_instruments_on_user_id"

  create_table "links", force: true do |t|
    t.integer  "linkable_id"
    t.string   "linkable_type"
    t.string   "title"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "seekings", force: true do |t|
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "seekings", ["user_id"], name: "index_seekings_on_user_id"

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "city"
    t.integer  "age"
    t.text     "bio"
    t.boolean  "inband"
    t.string   "current_band"
  end

end
