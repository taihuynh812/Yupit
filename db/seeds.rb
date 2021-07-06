# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
BusinessCategory.destroy_all

demo = User.create!(firstname: "Demo",
                    lastname: "User",
                    username: 'demouser',
                    email: "demouser@gmail.com",
                    password: 'demo123',
                    zipcode: 11228)

u1 = User.create!(firstname: "Xiao",
                    lastname: "Chen",
                    username: 'xiaoxiao1002',
                    email: "Xiaochen@gmail.com",
                    password: 'xiao123',
                    zipcode: 11223)

u2 = User.create!(firstname: "Tommy",
                    lastname: "Falcon",
                    username: 'FalconX2021',
                    email: "TomFal@hotmail.com",
                    password: 'tommy123',
                    zipcode: 90255)

u3 = User.create!(firstname: "Warren",
                    lastname: "Buffet",
                    username: 'wealthiestman',
                    email: 'WarrenB@gmail.com',
                    password: 'warren123',
                    zipcode: 11220)

business1 = Business.create!(name: 'Peaches HotHouse',
                        address: '415 Tompkins Ave',
                        city: 'Brooklyn',
                        state: 'NY',
                        zipcode: '11216',
                        phone: '718-563-5822',
                        lat: 40.68336103873503, 
                        long: -73.94371176551697,
                        website: 'peacheshothouse.com'
)

business1r1 = Review.create!(rating: 5,
                        description: "Peaches was great! 10/10",
                        user_id: u1.id,
                        business_id: business1.id                       
)

business2 = Business.create!(name: 'Barn Joo 35',
                        address: '34 W 35th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10001',
                        phone: '212-564-4430',
                        lat: 40.74999331244202,
                        long: -73.98576428465678,
                        website: 'barnjoo.com'
)

business2r1 = Review.create!(rating: 5,
                        description: "Amazing! Will come back again",
                        user_id: u3.id,
                        business_id: business2.id                       
)

business3 = Business.create!(name: 'Her Name Is Han',
                        address: '17 E 31st St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10016',
                        phone: '718-563-5822',
                        lat: 40.746395887645136,
                        long: -73.98468649977998,
                        website: 'peacheshothouse.com'
)

business3r1 = Review.create!(rating: 4,
                        description: "Good food",
                        user_id: u2.id,
                        business_id: business3.id                       
)


cat1 = Category.create!(category: 'Korean')
cat2 = Category.create!(category: 'American')
cat3 = Category.create!(category: 'Lunch')

b_c1 = BusinessCategory.create!(category_id: cat2.id,
                                business_id: business1.id)                                
b_c2 = BusinessCategory.create!(category_id: cat3.id,
                                business_id: business1.id)

b_c3 = BusinessCategory.create!(category_id: cat1.id,
                                business_id: business2.id)
b_c4 = BusinessCategory.create!(category_id: cat3.id,
                                business_id: business2.id)

b_c5 = BusinessCategory.create!(category_id: cat3.id,
                                business_id: business3.id)
b_c6 = BusinessCategory.create!(category_id: cat1.id,
                                business_id: business3.id)