class AddAgeToPeople < ActiveRecord::Migration[5.0]
  def change
    add_column :people, :age, :integer
  end
end
