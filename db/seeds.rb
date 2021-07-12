
require 'open-uri'

User.destroy_all
User.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
Business.destroy_all
Business.reset_pk_sequence
BusinessCategory.destroy_all
BusinessCategory.reset_pk_sequence


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
                        website: 'peacheshothouse.com',
                        mon_fri: "10AM - 10PM",
                        sat_sun: "10AM - 1AM"
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

business1r3 = Review.create!(rating: 4,
                        description: "Would come back again!",
                        user_id: u3.id,
                        business_id: business1.id                       
)

pic1_1 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/1.jpeg')
pic1_2 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/2.jpeg')
pic1_3 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/3.jpeg')
pic1_4 = open('https://yupit-dev.s3.us-east-1.amazonaws.com/Businesses/4.jpeg')
business1r1.pictures.attach(io: pic1_1, filename: 'peaches_hothouse_1.jpeg')
business1r1.pictures.attach(io: pic1_2, filename: 'peaches_hothouse_2.jpeg')
business1r2.pictures.attach(io: pic1_3, filename: 'peaches_hothouse_3.jpeg')
business1r3.pictures.attach(io: pic1_4, filename: 'peaches_hothouse_4.jpeg')

business2 = Business.create!(name: 'Barn Joo 35',
                        address: '34 W 35th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10001',
                        phone: '212-564-4430',
                        lat: 40.74999331244202,
                        long: -73.98576428465678,
                        website: 'barnjoo.com',
                        mon_fri: "11AM - 11PM",
                        sat_sun: "11AM - 3AM",
)

business2r1 = Review.create!(rating: 5,
                        description: "Amazing! Will come back again",
                        user_id: u3.id,
                        business_id: business2.id                       
)

business2r2 = Review.create!(rating: 4,
                        description: "Great bibimbap. Comes sizzling in a stone bowl. I requested it spicy and the chefs make it perfectly spicy! Service did feel a little rushed but the food was delicious!",
                        user_id: u1.id,
                        business_id: business2.id                       
)

business2r3 = Review.create!(rating: 5,
                        description: "I feel like Korean restaurants usually have very predictable menus but I was pleasantly surprised by my dinner here. My friend and I were able to get seated as a walk-in Saturday evening and the tables were spaced enough that we felt comfortable dining indoors. We ordered perhaps too much food for just two people, but everything was so delicious we still left no crumbs.",
                        user_id: demo.id,
                        business_id: business2.id                       
)

business2r4 = Review.create!(rating: 1,
                        description: "Extremely rude lady Esther, went to ask her a question & she screamed at me because I was near the bar. \"Wait in the front\" I get it's covid but there's a way to speak to people. Shame I didn't get to try the food lost my appetite after being reprimanded by the so called manager.",
                        user_id: u2.id,
                        business_id: business2.id                       
)

barn_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Barn+Joo+35/3.jpeg')
barn_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Barn+Joo+35/2.jpeg')
barn_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Barn+Joo+35/1.jpeg')
barn_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Barn+Joo+35/4.jpeg')
business2r1.pictures.attach(io: barn_1, filename: 'bern_joo_1.jpeg')
business2r2.pictures.attach(io: barn_2, filename: 'bern_joo_2.jpeg')
business2r3.pictures.attach(io: barn_3, filename: 'bern_joo_3.jpeg')
business2r4.pictures.attach(io: barn_4, filename: 'bern_joo_4.jpeg')


business3 = Business.create!(name: 'Her Name Is Han',
                        address: '17 E 31st St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10016',
                        phone: '718-563-5822',
                        lat: 40.746395887645136,
                        long: -73.98468649977998,
                        website: 'hernameishan.com',
                        mon_fri: "10AM - 11PM",
                        sat_sun: "11AM - 12AM",
                        
)

business3r1 = Review.create!(rating: 4,
                        description: "Good food",
                        user_id: u2.id,
                        business_id: business3.id                       
)

business3r2 = Review.create!(rating: 5,
                        description: "My husband and I had an amazing lunch here today. Everything from appetizers to entrees to desserts was delicious and beautifully presented. We loved the unique flavor combinations. Service was prompt and friendly. We will definitely be back!",
                        user_id: u1.id,
                        business_id: business3.id                       
)

business3r3 = Review.create!(rating: 5,
                        description: "The most incredible Korean food. I still dream about the dinner I had there. Come to Boston!",
                        user_id: demo.id,
                        business_id: business3.id                       
)

han_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Her+Name+Is+Han/1.jpeg')
han_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Her+Name+Is+Han/2.jpeg')
han_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Her+Name+Is+Han/3.jpeg')
han_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Her+Name+Is+Han/4.jpeg')
business3r1.pictures.attach(io: han_1, filename: 'han_1.jpeg')
business3r3.pictures.attach(io: han_2, filename: 'han_2.jpeg')
business3r3.pictures.attach(io: han_3, filename: 'han_3.jpeg')
business3r3.pictures.attach(io: han_4, filename: 'han_4.jpeg')


business4 = Business.create!(name: 'The Cabin NYC',
                        address: '205 E 4th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10009',
                        phone: '212-777-0454',
                        lat: 40.72458465097402, 
                        long: -73.98389413068803,
                        website: 'thecabinnyc.com',
                        mon_fri: "12PM - 12AM",
                        sat_sun: "11AM - 2AM",
)

business4r1 = Review.create!(rating: 5,
                        description: "The Cabin is such a fun & tasty experience in Alphabet City. It's a great spot if you're looking for some cocktails with friends. Their food is also delicious -I tried their lobster roll and chilean sea bass and seriously couldn't get enough. They were soooo good. I can't wait to go back to try their s'mores!!!!! 
                        Since it's called The Cabin, you can count on them for a cool aesthetic and vibes. There are bears and flowers everywhere, plus they have a backyard seating area and even a picturesque indoor swing. The staff were really friendly too. They were great at explaining all the dishes and cocktail options to me.",
                        user_id: demo.id,
                        business_id: business4.id                       
)

business4r2 = Review.create!(rating: 1,
                        description: "came on a rainy day and I had reservations but was still seated in the outside tent area. The tent was not that great and we got rained out quite a bit still and we could definitely feel all the wind that was blowing the rain on us.",
                        user_id: u1.id,
                        business_id: business4.id                       
)

business4r3 = Review.create!(rating: 4,
                        description: "Very cute spot! Came here a few weeks ago and got the biscuits and gravy with a side of eggs and it was definitely tasty. The decor inside is super cute, and they have a nice outdoor set up as well. The service was friendly and prompt. I'd really like to come back as I get more comfortable with indoor dining as the real ambiance is indoors for sure.",
                        user_id: u2.id,
                        business_id: business4.id 
)

cabin_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Cabin+NYC/1.jpeg')
cabin_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Cabin+NYC/2.jpeg')
cabin_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Cabin+NYC/3.jpeg')
cabin_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Cabin+NYC/4.jpeg')
business4r1.pictures.attach(io: cabin_1, filename: 'cabin_1.jpeg')
business4r2.pictures.attach(io: cabin_2, filename: 'cabin_2.jpeg')
business4r3.pictures.attach(io: cabin_3, filename: 'cabin_3.jpeg')
business4r3.pictures.attach(io: cabin_4, filename: 'cabin_4.jpeg')

cat1 = Category.create!(category: 'Korean')
cat2 = Category.create!(category: 'American')
cat3 = Category.create!(category: 'Lunch')
cat4 = Category.create!(category: 'Dinner')
cat5 = Category.create!(category: 'Bar')

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

b_c7 = BusinessCategory.create!(category_id: cat2.id,
                                business_id: business4.id)
b_c8 = BusinessCategory.create!(category_id: cat5.id,
                                business_id: business4.id)