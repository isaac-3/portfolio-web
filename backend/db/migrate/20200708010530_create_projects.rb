class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.integer :user_id
      t.string :project_url
      t.string :code_url
      t.timestamps
    end
  end
end
