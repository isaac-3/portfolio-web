class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :name
      t.string :blog_url
      t.integer :user_id

      t.timestamps
    end
  end
end
