
require 'open-uri'

User.destroy_all
User.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
Business.destroy_all
Business.reset_pk_sequence
BusinessCategory.destroy_all
BusinessCategory.reset_pk_sequence
Category.destroy_all
Category.reset_pk_sequence
BusinessAmenity.destroy_all
BusinessAmenity.reset_pk_sequence
Amenity.destroy_all
Amenity.reset_pk_sequence


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

u4 = User.create!(firstname: 'Jonathan',
                    lastname: 'XP',
                    username: 'jonathanexp',
                    email: "jonathanexp@hotmail.com",
                    password: 'jon123',
                    zipcode: 12255)

# --------------------------------------------------------------

business1 = Business.create!(name: 'Peaches HotHouse',
                        address: '415 Tompkins Ave',
                        city: 'Brooklyn',
                        state: 'NY',
                        zipcode: '11216',
                        phone: '718-563-5822',
                        lat: 40.68336103873503, 
                        lng: -73.94371176551697,
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

business1r4 = Review.create!(rating: 2,
                        description: "Peaches were too sweet and the air conditioner was not working. It really is a hot house",
                        user_id: u4.id,
                        business_id: business1.id                       
)

pic1_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Peaches+HotHouse/1.jpeg')
pic1_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Peaches+HotHouse/2.jpeg')
pic1_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Peaches+HotHouse/3.jpeg')
pic1_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Peaches+HotHouse/4.jpeg')
business1r1.pictures.attach(io: pic1_1, filename: 'peaches_hothouse_1.jpeg')
business1r1.pictures.attach(io: pic1_2, filename: 'peaches_hothouse_2.jpeg')
business1r2.pictures.attach(io: pic1_3, filename: 'peaches_hothouse_3.jpeg')
business1r3.pictures.attach(io: pic1_4, filename: 'peaches_hothouse_4.jpeg')

# --------------------------------------------------------------

business2 = Business.create!(name: 'Barn Joo 35',
                        address: '34 W 35th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10001',
                        phone: '212-564-4430',
                        lat: 40.74999331244202,
                        lng: -73.98576428465678,
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

# --------------------------------------------------------------

business3 = Business.create!(name: 'Her Name Is Han',
                        address: '17 E 31st St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10016',
                        phone: '718-563-5822',
                        lat: 40.746395887645136,
                        lng: -73.98468649977998,
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

business3r4 = Review.create!(rating: 5,
                        description: "Food was immaculate. Would eat more if my stomach was bigger.",
                        user_id: u4.id,
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

# --------------------------------------------------------------

business4 = Business.create!(name: 'The Cabin NYC',
                        address: '205 E 4th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10009',
                        phone: '212-777-0454',
                        lat: 40.72458465097402, 
                        lng: -73.98389413068803,
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

# --------------------------------------------------------------

business5 = Business.create!(name: 'Jane',
                        address: '100 W Houston St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10012',
                        phone: '212-254-7000',
                        lat: 40.72753872078877,  
                        lng: -74.00022878855789,
                        website: 'janerestaurant.com',
                        mon_fri: "11PM - 10PM",
                        sat_sun: "9AM - 10PM",
)

business5r1 = Review.create!(rating: 5,
                        description: "I came here for brunch with a group of four. Since we didn't have a reservation, we were told that we had to wait 35 - 40 minutes. 
                        We ended up with a table within 15 minutes. The waitress was accommodating and recommended some stuff for us since it was the first time for all of us to try Jane. 
                        She came back multiple times to check in on us and to refill our tap water.",
                        user_id: u4.id,
                        business_id: business5.id                       
)

business5r2 = Review.create!(rating: 5,
                        description: "This was a solid 4/5 for me. We turned up as a party of 3 on a busy Sunday afternoon and were able to cop three seats at the bar. The wait for two people ahead of us was about 15-20 minutes so it seemed like a good place to go if you didn't have reservations for brunch in the area.",
                        user_id: u1.id,
                        business_id: business5.id                       
)

business5r3 = Review.create!(rating: 5,
                        description: "We got in on a Sunday for brunch with no wait! The restaurant is huge and has a different vibe from a typical packed Sunday boozy brunch in NYC. The vanilla bean French Toast was delicious--large with fresh fruit and had a custard-like texture. We also shared the ABCE burger and rosemary fries which were also delicious.",
                        user_id: u3.id,
                        business_id: business5.id 
)

jane_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Jane/1.jpeg')
jane_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Jane/2.jpeg')
jane_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Jane/3.jpeg')
jane_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Jane/4.jpeg')
business5r1.pictures.attach(io: jane_1, filename: 'jane_1.jpeg')
business5r2.pictures.attach(io: jane_2, filename: 'jane_2.jpeg')
business5r3.pictures.attach(io: jane_3, filename: 'jane_3.jpeg')
business5r3.pictures.attach(io: jane_4, filename: 'jane_4.jpeg')

# --------------------------------------------------------------

business6 = Business.create!(name: 'The Smith',
                        address: '956 2nd Ave',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10022',
                        phone: '212-644-2700',
                        lat: 40.75533201367178,   
                        lng: -73.96792262870831,
                        website: 'thesmithrestaurant.com',
                        mon_fri: "11PM - 10PM",
                        sat_sun: "9AM - 10PM",
)

business6r1 = Review.create!(rating: 4,
                        description: "The Smith is practically an institution for Manhattanites.  What's not to love?  They have excellent drinks, a cool vibe and the food is as my daughter would say, bussin'. Came here to catch up with an old friend for dinner and drinks and most definitely had a great time.",
                        user_id: u1.id,
                        business_id: business6.id                       
)

business6r2 = Review.create!(rating: 5,
                        description: "I missed coming into the city, what a lovely evening to dine out. Great to dine at The once again.",
                        user_id: demo.id,
                        business_id: business6.id                       
)

business6r3 = Review.create!(rating: 5,
                        description: "My favourite weekend brunch go to. Egg Benedict is my must have, although I prefer smoked salmon rather than ham.  Home fries is delicious too.",
                        user_id: u2.id,
                        business_id: business6.id 
)

smith_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/smith/1.jpeg')
smith_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/smith/2.jpeg')
smith_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/smith/3.jpeg')
smith_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/smith/4.jpeg')
business6r1.pictures.attach(io: smith_1, filename: 'smith_1.jpeg')
business6r2.pictures.attach(io: smith_2, filename: 'smith_2.jpeg')
business6r3.pictures.attach(io: smith_3, filename: 'smith_3.jpeg')
business6r3.pictures.attach(io: smith_4, filename: 'smith_4.jpeg')

# --------------------------------------------------------------

business7 = Business.create!(name: 'Botanica Bar',
                        address: '47 E Houston St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10012',
                        phone: '212-343-7251',
                        lat: 40.72487238205152,     
                        lng: -73.99481151712136,
                        website: "botanicabar.com",
                        mon_fri: "4PM - 12AM",
                        sat_sun: "3PM - 2AM",
)

business7r1 = Review.create!(rating: 5,
                        description: "Lowkey my favorite bar to grab a quick drink with friends!! Asked an employee at F21 what his favorite bar was in the area and he told me to come here.",
                        user_id: demo.id,
                        business_id: business7.id                       
)

business7r2 = Review.create!(rating: 4,
                        description: "Great prices. 10 dollar cocktails, pizza good too. Frozen Marg was tasty, Prosecco decent. Frose a little too sweet and weak",
                        user_id: u2.id,
                        business_id: business7.id                       
)

business7r3 = Review.create!(rating: 5,
                        description: "Cute, hip, cozy, quaint bar on Houston Street. Happy hour sees a few discounted drink options, and the beer+shot combos are decent: $6 for a 'Gansett and whiskey will kickstart any evening's revelry.",
                        user_id: u4.id,
                        business_id: business7.id 
)

botanica_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/totanica/1.jpeg')
botanica_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/totanica/2.jpeg')
botanica_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/totanica/3.jpeg')
botanica_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/totanica/4.jpeg')
business7r1.pictures.attach(io: botanica_1, filename: 'botanica_1.jpeg')
business7r2.pictures.attach(io: botanica_2, filename: 'botanica_2.jpeg')
business7r3.pictures.attach(io: botanica_3, filename: 'botanica_3.jpeg')
business7r3.pictures.attach(io: botanica_4, filename: 'botanica_4.jpeg')

# --------------------------------------------------------------

business8 = Business.create!(name: 'Thursday Kitchen',
                        address: '424 E 9th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10009',
                        phone: '646-755-8088',
                        lat: 40.72780176433726,      
                        lng: -73.98372989993551,
                        website: "thursdaykitchen.com",
                        mon_fri: "6PM - 11PM",
                        sat_sun: "5PM - 12AM",
)

business8r1 = Review.create!(rating: 4,
                        description: "Thursday Kitchen is a fascinating restaurant.  I hear about how popular it is, making it difficult to get seats without waiting for an eternity. Thankfully, when my girlfriend and I arrived, we waited no longer than 15 minutes I believe.",
                        user_id: demo.id,
                        business_id: business8.id                       
)

business8r2 = Review.create!(rating: 5,
                        description: "One of the best restaurants I've been to in NYC and I loved the creativity of all the dishes. We shared 6 dishes among 4 people and left feeling still a little hungry, but it was fine given we had other food plans for the night. Come early and be prepared to wait, we took a walk to a nearby park as we waited for a table.",
                        user_id: u1.id,
                        business_id: business8.id                       
)

business8r3 = Review.create!(rating: 5,
                        description: "I was really looking forward to trying on this restaurant and I'm so glad we did! They don't offer reservations so it's first come first serve. We got there around 7pm on Memorial Day and it was about an hour wait. They took my name and number down and said they will text when my table it ready. We walked around the neighborhood to kill some time, luckily we were starving.",
                        user_id: u2.id,
                        business_id: business8.id 
)

thursday_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/thursday/1.jpeg')
thursday_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/thursday/2.jpeg')
thursday_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/thursday/3.jpeg')
thursday_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/thursday/4.jpeg')
business8r1.pictures.attach(io: thursday_1, filename: 'thursday_1.jpeg')
business8r2.pictures.attach(io: thursday_2, filename: 'thursday_2.jpeg')
business8r3.pictures.attach(io: thursday_3, filename: 'thursday_3.jpeg')
business8r3.pictures.attach(io: thursday_4, filename: 'thursday_4.jpeg')

#--------------------------------------------------------------------------

business9 = Business.create!(name: 'Yoon Haeundae Galbi',
                        address: '8 W 36th St',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10018',
                        phone: '212-691-8078',
                        lat: 40.75003667963467,    
                        lng: -73.9844621017804,
                        website: 'yoon-nyc.com',
                        mon_fri: "11PM - 10PM",
                        sat_sun: "12PM - 11PM",
)

business9r1 = Review.create!(rating: 5,
                        description: "A really great experience - service and food! My husband and friends raved about the meats being flavorful and absolutely tender.  I loved their mushroom and their uni bibimbap, which if anyone loves uni as much as I do you must order.",
                        user_id: u3.id,
                        business_id: business9.id                       
)

business9r2 = Review.create!(rating: 2,
                        description: "2 stars because the meat is good. We got the short ribs & the marinated short ribs! But wouldn't go back because the experience/service wasn't good.",
                        user_id: u1.id,
                        business_id: business9.id                       
)

business9r3 = Review.create!(rating: 5,
                        description: "A lot of Korean barbecue restaurants that have outdoor dining often just bring you the meat already cooked if you're doing outdoor dining, This is one of the few places that I'm aware that does grilling for outdoor dining!",
                        user_id: u4.id,
                        business_id: business9.id 
)

yoon_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Yoon/1.jpeg')
yoon_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Yoon/2.jpeg')
yoon_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Yoon/3.jpeg')
yoon_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/Yoon/4.jpeg')
business9r1.pictures.attach(io: yoon_1, filename: 'yoon_1.jpeg')
business9r2.pictures.attach(io: yoon_2, filename: 'yoon_2.jpeg')
business9r3.pictures.attach(io: yoon_3, filename: 'yoon_3.jpeg')
business9r3.pictures.attach(io: yoon_4, filename: 'yoon_4.jpeg')

# --------------------------------------------------------------

business10 = Business.create!(name: 'Gray Hawk Grill',
                        address: '1556 2nd Ave',
                        city: 'New York',
                        state: 'NY',
                        zipcode: '10028',
                        phone: '646-669-7376',
                        lat: 40.77459032404233,     
                        lng: -73.95413534775588,
                        website: 'grayhawkgrill.com',
                        mon_fri: "11PM - 10PM",
                        sat_sun: "11PM - 10PM",
)

business10r1 = Review.create!(rating: 4,
                        description: "The food was very good but there were a couple of issues. The biggest one was that the medium-rare steak I ordered came out medium if not medium-well. It was still a high quality cut and a very good steak, but it would've been even better if it came the way I wanted it.",
                        user_id: u3.id,
                        business_id: business10.id                       
)

business10r2 = Review.create!(rating: 5,
                        description: "We were hungry and wandering reading menus and Grey Hawk had the yummiest sounding food for our current tummy situation!",
                        user_id: u2.id,
                        business_id: business10.id                       
)

business10r3 = Review.create!(rating: 5,
                        description: "Glad I found this spot and that they pushed through during Covid to open. I cannot imagine how daunting that must be, but they really are worth it! They have been extremely accommodating (offering to put as in the window with the floor to ceiling windows when we weren't quite ready to indoor dine (despite the restrictions slowly being lifted) and holding that table for us until we arrived. You can tell they are taking all available precautions with contact tracing, hand sanitizer and temperature checks.",
                        user_id: demo.id,
                        business_id: business10.id 
)

hawk_1 = open('https://yupit-dev.s3.amazonaws.com/Businesses/hawk/1.jpeg')
hawk_2 = open('https://yupit-dev.s3.amazonaws.com/Businesses/hawk/2.jpeg')
hawk_3 = open('https://yupit-dev.s3.amazonaws.com/Businesses/hawk/3.jpeg')
hawk_4 = open('https://yupit-dev.s3.amazonaws.com/Businesses/hawk/4.jpeg')
business10r1.pictures.attach(io: hawk_1, filename: 'hawk_1.jpeg')
business10r2.pictures.attach(io: hawk_2, filename: 'hawk_2.jpeg')
business10r3.pictures.attach(io: hawk_3, filename: 'hawk_3.jpeg')
business10r3.pictures.attach(io: hawk_4, filename: 'hawk_4.jpeg')

# --------------------------------------------------------------

korean = Category.create!(category: 'Korean')
american = Category.create!(category: 'American')
lunch = Category.create!(category: 'Lunch')
dinner = Category.create!(category: 'Dinner')
bar = Category.create!(category: 'Bar')

b1_c1 = BusinessCategory.create!(category_id: american.id,
                                business_id: business1.id)                                
b1_c2 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business1.id)

b2_c1 = BusinessCategory.create!(category_id: korean.id,
                                business_id: business2.id)
b2_c2 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business2.id)

b3_c1 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business3.id)
b3_c2 = BusinessCategory.create!(category_id: korean.id,
                                business_id: business3.id)

b4_c1 = BusinessCategory.create!(category_id: american.id,
                                business_id: business4.id)
b4_c2 = BusinessCategory.create!(category_id: bar.id,
                                business_id: business4.id)

b5_c1 = BusinessCategory.create!(category_id: american.id,
                                business_id: business5.id)
b5_c2 = BusinessCategory.create!(category_id: bar.id,
                                business_id: business5.id)
b5_c3 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business5.id)

b6_c1 = BusinessCategory.create!(category_id: american.id,
                                business_id: business6.id)
b6_c2 = BusinessCategory.create!(category_id: bar.id,
                                business_id: business6.id)
b6_c3 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business6.id)

b7_c1 = BusinessCategory.create!(category_id: bar.id,
                                business_id: business7.id)

b8_c1 = BusinessCategory.create!(category_id: american.id,
                                business_id: business8.id)
b8_c2 = BusinessCategory.create!(category_id: korean.id,
                                business_id: business8.id)
b8_c3 = BusinessCategory.create!(category_id: dinner.id,
                                business_id: business8.id)

b9_c1 = BusinessCategory.create!(category_id: korean.id,
                                business_id: business9.id)
b9_c2 = BusinessCategory.create!(category_id: dinner.id,
                                business_id: business9.id)
b9_c3 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business9.id)

b10_c1 = BusinessCategory.create!(category_id: american.id,
                                business_id: business10.id)
b10_c2 = BusinessCategory.create!(category_id: dinner.id,
                                business_id: business10.id)
b10_c3 = BusinessCategory.create!(category_id: lunch.id,
                                business_id: business10.id)

delivery = Amenity.create!(amenity: 'Delivery')
takeout = Amenity.create!(amenity: 'Takeout')
indoor = Amenity.create!(amenity: 'Indoor Dining')
outdoor = Amenity.create!(amenity: 'Outdoor Seating')

b1_a1 = BusinessAmenity.create!(business_id: business1.id, amenity_id: delivery.id)
b1_a2 = BusinessAmenity.create!(business_id: business1.id, amenity_id: takeout.id)
b1_a3 = BusinessAmenity.create!(business_id: business1.id, amenity_id: indoor.id)

b2_a1 = BusinessAmenity.create!(business_id: business2.id, amenity_id: delivery.id)
b2_a2 = BusinessAmenity.create!(business_id: business2.id, amenity_id: takeout.id)
b2_a3 = BusinessAmenity.create!(business_id: business2.id, amenity_id: indoor.id)
b2_a4 = BusinessAmenity.create!(business_id: business2.id, amenity_id: outdoor.id)

b3_a1 = BusinessAmenity.create!(business_id: business3.id, amenity_id: delivery.id)
b3_a2 = BusinessAmenity.create!(business_id: business3.id, amenity_id: takeout.id)
b3_a3 = BusinessAmenity.create!(business_id: business3.id, amenity_id: indoor.id)
b3_a4 = BusinessAmenity.create!(business_id: business3.id, amenity_id: outdoor.id)

b4_a1 = BusinessAmenity.create!(business_id: business4.id, amenity_id: delivery.id)
b4_a2 = BusinessAmenity.create!(business_id: business4.id, amenity_id: takeout.id)
b4_a3 = BusinessAmenity.create!(business_id: business4.id, amenity_id: indoor.id)
b4_a4 = BusinessAmenity.create!(business_id: business4.id, amenity_id: outdoor.id)

b5_a1 = BusinessAmenity.create!(business_id: business5.id, amenity_id: delivery.id)
b5_a2 = BusinessAmenity.create!(business_id: business5.id, amenity_id: takeout.id)

b6_a1 = BusinessAmenity.create!(business_id: business6.id, amenity_id: delivery.id)
b6_a2 = BusinessAmenity.create!(business_id: business6.id, amenity_id: takeout.id)
b6_a4 = BusinessAmenity.create!(business_id: business6.id, amenity_id: outdoor.id)

b7_a1 = BusinessAmenity.create!(business_id: business7.id, amenity_id: indoor.id)
b7_a2 = BusinessAmenity.create!(business_id: business7.id, amenity_id: outdoor.id)

b8_a1 = BusinessAmenity.create!(business_id: business8.id, amenity_id: delivery.id)
b8_a2 = BusinessAmenity.create!(business_id: business8.id, amenity_id: takeout.id)
b8_a3 = BusinessAmenity.create!(business_id: business8.id, amenity_id: indoor.id)
b8_a4 = BusinessAmenity.create!(business_id: business8.id, amenity_id: outdoor.id)

b9_a1 = BusinessAmenity.create!(business_id: business9.id, amenity_id: takeout.id)
b9_a2 = BusinessAmenity.create!(business_id: business9.id, amenity_id: indoor.id)
b9_a3 = BusinessAmenity.create!(business_id: business9.id, amenity_id: outdoor.id)

b10_a1 = BusinessAmenity.create!(business_id: business10.id, amenity_id: delivery.id)
b10_a2 = BusinessAmenity.create!(business_id: business10.id, amenity_id: takeout.id)
b10_a3 = BusinessAmenity.create!(business_id: business10.id, amenity_id: indoor.id)
b10_a4 = BusinessAmenity.create!(business_id: business10.id, amenity_id: outdoor.id)