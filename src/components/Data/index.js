const products = [
  {
    id: 1,
    name: "Wedding Cake #WD01",
    description: "Wedding Cake model 01",
    price: 16.99,
    gender: "women",
    type: "shirt",
        img: "https://i.ibb.co/HX12hYK/pexels-duan-viljoen-7808273.jpg" ,
    inCart: false,
    category: "WD"
  },
  {
    id: 2,
      name: "Wedding Cake #WD02",
      description: "Wedding Cake model 02",
    price: 4.99,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/ZcxNM4S/pexels-daria-shevtsova-1070850.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
      name: "Wedding Cake #WD03",
      description: "Wedding Cake model 03",
    price: 14.99,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/9c6pQzq/pexels-alicia-zinn-19640.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
      name: "Wedding Cake #WD04",
      description: "Wedding Cake model 04",
    price: 20.00,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/VMhFHm5/pexels-brent-keane-1702373.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
      name: "Wedding Cake #WD05",
      description: "Wedding Cake model 05",
    price: 4.99,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/cJ87G66/pexels-jai-kumar-5186877.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 6,
      name: "Wedding Cake #WD06",
      description: "Wedding Cake model 06",
    price: 19.99,
    gender: "women",
    type: "blouse",
      img: "https://i.ibb.co/zG90PQh/pexels-kasonya-wilcox-3012214.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 7,
      name: "Wedding Cake #WD07",
      description: "Wedding Cake Model 07",
    price: 6.00,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/J2MHSWj/pexels-transtudios-photography-video-3829793-2.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
      name: "Wedding Cake #WD08",
      description: "Wedding Cake model 08",
    price: 14.99,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/ySN7Csg/pexels-jonathan-borba-3014858.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
      name: "Wedding Cake #WD09",
      description: "Wedding Cake model 09",
    price: 20.99,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/6DftZxb/pexels-caleb-oquendo-3038302.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
      name: "Wedding Cake #WD10",
      description: "Wedding Cake model 10",
    price: 4.99,
    gender: "women",
    type: "shirt",
      img: "https://i.ibb.co/X36Z36B/pexels-avonne-stalling-6018398.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
      name: "Wedding Cake #WD11",
      description: "Wedding Cake model 11",
    price: 45.99,
    gender: "women",
    type: "watch",
      img: "https://i.ibb.co/9YG06xx/pexels-avonne-stalling-3923555.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 12,
    name: "Anniversary Cake #AS01",
      description: "Anniversary Cake Model 01",
    price: 14.99,
    gender: "women",
    type: "necklace",
      img: "https://i.ibb.co/wL8NvrS/pexels-cleyder-duque-6400948.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 13,
    name: "Birthday cake #BD01",
    description: "Birthday cake Model 01",
    price: 10.99,
    gender: "men",
    type: "shirt",
      img: "https://i.ibb.co/Npt23kK/pexels-karolina-grabowska-4959709.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 14,
      name: "Birthday cake #BD02",
      description: "Birthday cake Model 02",
    price: 14.99,
    gender: "men",
    type: "shirt",
      img: "https://i.ibb.co/QD7KL0T/pexels-rodrigo-souza-2531546.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 15,
      name: "Birthday cake #BD03",
      description: "Birthday cake Model 03",
    price: 20.99,
    gender: "men",
    type: "shirt",
      img: "https://i.ibb.co/ZXRNk3N/1.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 16,
      name: "Birthday cake #BD04",
      description: "Birthday cake Model 04",
    price: 13.99,
    gender: "men",
    type: "shirt",
      img: "https://i.ibb.co/rwxvrJr/pexels-jonathan-borba-5610326.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 17,
      name: "Anniversary Cake #AS02",
      description: "Anniversary Cake Model 02",
    price: 13.99,
    gender: "men",
    type: "tie",
      img: "https://i.ibb.co/wpNmHJ2/pexels-jusper-mwangi-2510104.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
      name: "Birthday cake #BD05",
      description: "Birthday cake Model 05",
    price: 9.99,
    gender: "men",
    type: "shirt",
      img: "https://i.ibb.co/Z1D70z0/pexels-tara-winstead-6479548.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 19,
      name: "Anniversary Cake #AS03",
      description: "Anniversary Cake Model 03",
    price: 35.99,
    gender: "men",
    type: "tie",
      img: "https://i.ibb.co/bPRtXMK/pexels-tim-douglas-6210767.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
      name: "Anniversary Cake #AS04",
      description: "Anniversary Cake Model 04",
    price: 15.99,
    gender: "men",
    type: "tie",
      img: "https://i.ibb.co/hRGNbXZ/pexels-rachel-claire-5865068.jpg",
    inCart: false,
    category: "accessories"
  },
];

export default products;
