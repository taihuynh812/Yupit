
require 'open-uri'

User.destroy_all
Review.destroy_all
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

business1r2 = Review.create!(rating: 4,
                        description: "Peaches was good! 8/10",
                        user_id: u2.id,
                        business_id: business1.id                       
)

# pic1_1 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/1.jpeg')
# pic1_2 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/2.jpeg')
# pic1_3 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/3.jpeg')
# pic1_4 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/4.jpeg')
# business1.photos.attach(io: pic1_1, filename: 'peaches_hothouse_1.jpeg')
# business1.photos.attach(io: pic1_2, filename: 'peaches_hothouse_2.jpeg')
# business1.photos.attach(io: pic1_3, filename: 'peaches_hothouse_3.jpeg')
# business1.photos.attach(io: pic1_4, filename: 'peaches_hothouse_4.jpeg')

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