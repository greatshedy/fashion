const allProducts = [
  {
    id: 5,
    name: "Gaming Laptop",
    category: "Electronics",
    location: "Nevada",
    price: 1299,
    rating: 4.7,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Office Desk",
    category: "Furniture",
    location: "Illinois",
    price: 320,
    rating: 4.5,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Basketball Shoes",
    category: "Sports",
    location: "Ohio",
    price: 150,
    rating: 4.8,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "4K Smart TV",
    category: "Electronics",
    location: "Georgia",
    price: 799,
    rating: 4.6,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Wooden Bed Frame",
    category: "Furniture",
    location: "Arizona",
    price: 540,
    rating: 4.4,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Wireless Headphones",
    category: "Electronics",
    location: "Colorado",
    price: 199,
    rating: 4.3,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1170&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Wireless Headphones",
    category: "Electronics",
    location: "Colorado",
    price: 199,
    rating: 4.3,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1170&auto=format&fit=crop",
  },

  {
    id: 11,
    name: "Leather Jacket",
    category: "Fashion",
    location: "New York",
    price: 250,
    rating: 4.6,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 12,
    name: "Dining Table Set",
    category: "Furniture",
    location: "Texas",
    price: 899,
    rating: 4.5,
    featured: true,
    image:
      "https://plus.unsplash.com/premium_photo-1676320514175-8a41932fcd46?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Road Bike",
    category: "Sports",
    location: "California",
    price: 1100,
    rating: 4.7,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Smartphone Pro",
    category: "Electronics",
    location: "Florida",
    price: 999,
    rating: 4.6,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Luxury Watch",
    category: "Fashion",
    location: "Nevada",
    price: 650,
    rating: 4.8,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 1,
    name: "Luxury Sofa",
    category: "Furniture",
    location: "New York",
    price: 499,
    rating: 4.8,
    featured: true,
    image:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Mountain Bike",
    category: "Sports",
    location: "California",
    price: 899,
    rating: 4.7,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1608531428470-4471739c4359?q=80&w=1127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    location: "Texas",
    price: 199,
    rating: 4.6,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Designer Bag",
    category: "Fashion",
    location: "Florida",
    price: 349,
    rating: 4.5,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default allProducts;
