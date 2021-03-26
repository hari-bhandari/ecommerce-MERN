const bcrypt=require('bcryptjs')
const users = [
  {
    firstName: 'Admin User',
    lastName: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    role: "admin"
  },
  {
    firstName: 'John',
    lastName: 'John',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'Jane Doe',
    lastName: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports= users
