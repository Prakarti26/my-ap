import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      discription: "A popular shirt",
    },
    {
      name: "Fit shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "shirt2.jpg",
      price: 700,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
      countInStock: 20,
      discription: "A popular shirt",
    },
    {
      name: "Cool shirt",
      slug: "cool-shirt",
      category: "Shirts",
      image: "shirt3.jpg",
      price: 7000,
      brand: "Loyal",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
       discription: "A popular shirt",
    },
    {
      name: "Free pants",
      slug: "free-pants",
      category: "Pants",
      image: "pants1.jpg",
      price: 400,
      brand: "Nike Pants",
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
       discription: "A popular Pant",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "pants2.jpg",
      price: 600,
      brand: "Zara",
      rating: 3.9,
      numReviews: 10,
      countInStock: 20,
       discription: "A popular Pant",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "pants3.jpg",
      price: 7015,
      brand: "H&M",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
       discription: "A popular Pant",
    },
  ],
};

export default data;