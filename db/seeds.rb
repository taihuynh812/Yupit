# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

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