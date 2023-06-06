import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    _id: "1",

    itemName: "Roadster",
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?size=626&ext=jpg&ga=GA1.1.1963083236.1682951392&semt=sph",
    description: "A stylish and durable jacket for men.",
    rating: 4.8,
    reviews: 12,
    size: "XL",
    category: "Men",
    oldPrice: 2099,
    newPrice: 1154,
    discount: 45,
    isTrending: true,
    inStock: true,
    delivery_time: "4-6 business days",
    fewLeft: true,
  },
  {
    _id: "2",
    itemName: "Wrogan",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22999034/2023/5/8/340ba336-657c-472f-a9b1-03adeef83b0b1683544216065-WROGN-Men-Tshirts-2821683544215702-1.jpg",
    description: "A premium quality and stylish T-shirt for men.",
    rating: 4.5,
    reviews: 10,
    size: "L",
    category: "Men",
    oldPrice: 1499,
    newPrice: 704,
    discount: 53,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,

  },

  {
    _id: "3",
    itemName: "Indo Era",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19400474/2022/9/9/26504aeb-e4cc-4bd1-b6cd-2ebaa1233d481662709149371-Okane-Women-Grey-Solid-Hooded-Parka-Jacket-7441662709148311-5.jpg",
    description: "A stylish and versatile jacket for women.",
    rating: 4.7,
    reviews: 15,
    size: "M",
    category: "Women",
    oldPrice: 3599,
    newPrice: 1799,
    discount: 50,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false,
  },
  {
    _id: "4",
    itemName: "Roadster",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11982060/2022/11/15/ee788c72-73ac-4ccb-94fb-20f84c4cf7931668510053866-YK-Boys-Blue-and-White-Colourblocked-Hooded-Acrylic-Cardigan-1.jpg",
    rating: 4.4,
    reviews: 12,
    size: "M",
    category: "Kids",
    oldPrice: 1599,
    newPrice: 1000,
    discount: 37,
    isTrending: true,
    description: "A cozy and stylish sweater for Kids.",
    delivery_time: "2-4 business days",
    inStock: true,
    fewLeft: false,
  },

  {
    _id: "5",
    itemName: "CottonKing",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12816688/2020/11/11/fe2ebbe1-bfed-4a43-b01e-a170a9d0c5351605092237406-INVICTUS-Men-Blazers-3281605092235507-1.jpg",
    rating: 4.2,
    reviews: 10,
    size: "S",
    category: "Men",
    oldPrice: 2999,
    newPrice: 1699,
    discount: 45,
    isTrending: true,
    description: "A sophisticated and stylish blazer for Men.",
    delivery_time: "2-4 business days",
    inStock: true,
    fewLeft: true,
  }, {
    _id: "6",

    itemName: "H&M",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21389214/2023/5/18/343f2b24-cd9e-43e4-8939-e02d697c52401684399857695HERENOWBoysPrintedPureCottonHoodedSleevelessT-shirt1.jpg",
    description: "A comfortable and stylish Jacket for kids.",
    rating: 3.9,
    reviews: 8,
    size: "S",
    category: "Kids",
    oldPrice: 900,
    newPrice: 499,
    discount: 44,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,

  },
  {
    _id: "7",
    itemName: "Ahika",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/gown/w/r/d/na-l-short-sleeve-stitched-sl-sky-flower-m-style-of-life-na-original-imagmg4ckp4qgfk4.jpeg?q=70",
    description: "A comfortable and trendy Dress for women.",
    rating: 4.8,
    reviews: 15,
    size: "M",
    category: "Women",
    oldPrice: 1587,
    newPrice: 890,
    discount: 43,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false,
  },
  {
    _id: "8",
    itemName: "Wrogan",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18981664/2022/11/7/175a049e-60e8-497e-8dfe-4ad9decc51981667825689547PumaMenBlackDryCELLSlimFitEvostripeTrackPants1.jpg",
    description: "Stylish and comfortable pants for men.",
    rating: 4.4,
    reviews: 14,
    size: "L",
    category: "Men",
    oldPrice: 1587,
    newPrice: 890,
    discount: 43,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false,
  },

  {
    _id: "9",
    itemName: "Indo Era",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21198842/2022/12/14/9a511316-c266-46ef-bdd2-7eede25afb171671036255206WomensSelfDesiganRoundNeckFullsleeveCardigan1.jpg",
    description: "A cozy and stylish sweater for women.",
    rating: 4.1,
    reviews: 9,
    size: "S",
    category: "Women",
    oldPrice: 4248,
    newPrice: 1699,
    discount: 60,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false,
  }, {
    _id: "10",

    itemName: "H&M",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22796530/2023/4/17/b0f139d6-51b8-471e-836c-daede9afdf5c1681714621811Oversizedshort-sleevedhoodie1.jpg",
    description: "A cozy and warm hoodie for kids.",
    rating: 4.7,
    reviews: 8,
    size: "S",
    category: "Kids",
    oldPrice: 1099,
    newPrice: 619,
    discount: 43,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: false,
  },
  {
    _id: "11",
    itemName: "Puma",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22122592/2023/2/25/dc5ce1ba-f232-483f-a7c7-921fc21af8c116773180225627AltbyPantaloonsMenOffWhiteSlimFitShorts1.jpg",
    description: "Comfortable and breathable shorts for men.",
    rating: 4.6,
    reviews: 11,
    size: "M",
    category: "Men",
    oldPrice: 1599,
    newPrice: 447,
    discount: 68,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,
  }, {
    _id: "12",
    itemName: "Nautica",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22315416/2023/3/13/2872c796-12d8-49d9-9bb8-b11092ae19d81678697400130LouisPhilippeMenBlackSlimFitOpaqueFormalShirt1.jpg",
    description: "A classic and formal shirt for men.",
    rating: 3.9,
    reviews: 6,
    size: "XXL",
    category: "Men",
    oldPrice: 1599,
    newPrice: 959,
    discount: 40,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: false,

  },
  {
    _id: "13",
    itemName: "Indo Era",
    image: "https://img.freepik.com/premium-photo/beautiful-smiling-woman-wearing-modern-trendy-dress_208024-705.jpg?size=626&ext=jpg",
    description: "A stylish and elegant dress for women.",
    rating: 3.8,
    reviews: 7,
    size: "XL",
    category: "Women",
    oldPrice: 1998,
    newPrice: 998,
    discount: 50,
    isTrending: false,
    inStock: false,
    delivery_time: "3-5 business days",
    fewLeft: true,
  },
  {
    _id: "14",
    itemName: "Biba",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11227214/2020/1/8/4d6a32ab-1c19-4fd8-a688-cdc37ee0700e1578462959742-anayna-Women-Black--Beige-Printed-Flared-Maxi-Skirt-26815784-1.jpg",
    description: "A fashionable and versatile skirt for women.",
    rating: 4.2,
    reviews: 13,
    size: "M",
    category: "Women",
    oldPrice: 1599,
    newPrice: 1000,
    discount: 37,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false,
  },

  {
    _id: "15",
    itemName: "Puma",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12351694/2020/10/6/8c45ad15-ad1c-48d4-9433-86431a99fbe61601958136611TrackPantsUSPoloAssnDenimCoMenJeansUSPoloAssnDenimCoMenShirt1.jpg",
    description: "A warm and trendy hoodie for men.",
    rating: 3.9,
    reviews: 11,
    size: "L",
    category: "Men",
    oldPrice: 699,
    newPrice: 384,
    discount: 22,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false,
  },
  {
    _id: "16",
    itemName: "BonOrganik",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20412344/2022/10/15/922512cc-d23d-4d17-9f74-1c15b5e42e3f1665807925616SuperstretchSlimFitJeans1.jpg",
    description: "A classic jeans for kids.",
    rating: 4.1,
    reviews: 9,
    size: "S",
    category: "Kids",
    oldPrice: 899,
    newPrice: 699,
    discount: 22,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,
  },
  {
    _id: "17",
    itemName: "Kaya",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18663212/2022/6/8/12d6e867-5dfd-4162-81b3-d621cef0e1871654671378895TokyoTalkiesWomenPinkJoggersTrousers1.jpg",
    rating: 4.0,
    reviews: 9,
    size: "M",
    category: "Women",
    oldPrice: 1587,
    newPrice: 890,
    discount: 43,
    isTrending: false,
    description: "Comfortable and stylish joggers for women.",
    delivery_time: "3-5 business days",
    inStock: true,
    fewLeft: false,
  },
  {
    _id: "18",
    itemName: "Lyra",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18669064/2022/6/14/03e2fdcf-a8f8-48dc-a0cb-3d3f7b603d5e1655207268522-White-Base-Floral-Maxi-Dress-6651655207267986-1.jpg",
    description: "An elegant and fashionable dress for women.",
    rating: 3.2,
    reviews: 5,
    size: "M",
    category: "Women",
    oldPrice: 2210,
    newPrice: 1810,
    discount: 18,
    isTrending: true,
    inStock: false,
    delivery_time: "3-5 business days",
    fewLeft: true,
  },
  {
    _id: "19",
    itemName: "Jordan",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg",
    rating: 4.6,
    reviews: 14,
    size: "XL",
    category: "Men",
    oldPrice: 1499,
    newPrice: 974,
    discount: 35,
    isTrending: true,
    description: "A warm and fashionable Jacket for men.",
    delivery_time: "2-4 business days",
    inStock: true,
    fewLeft: false,
  },

  {
    _id: "20",
    itemName: "Kaya",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17519072/2022/4/4/8d976f2e-55f5-4d0f-9b78-a2f7f300b2751649065176391-plusS-Women-Jeans-5961649065175819-1.jpg",
    rating: 3.7,
    reviews: 7,
    size: "L",
    category: "Women",
    oldPrice: 3599,
    newPrice: 1799,
    discount: 50,
    isTrending: false,
    description: "A comfortable and trendy jeans for Women.",
    delivery_time: "3-5 business days",
    inStock: true,
    fewLeft: true,
  },
  {
    _id: "21",
    itemName: "Wrogan",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22257502/2023/3/8/a1be671d-ae84-4c53-93cc-f2542c3e6b271678274363991Shirts1.jpg",
    description: "A classic shirt for kids.",
    rating: 4.6,
    reviews: 9,
    size: "L",
    category: "Kids",
    oldPrice: 895,
    newPrice: 645,
    discount: 28,
    isTrending: true,
    inStock: true,
    delivery_time: "4-5 business days",
    fewLeft: false,
  },
  {
    _id: "22",
    itemName: "Allen Solly",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21995600/2023/3/24/fa7a6b30-15b5-421e-97f8-45da9ba740441679642116565-Allen-Solly-Men-Tshirts-4561679642115872-1.jpg",
    rating: 3.5,
    reviews: 16,
    size: "XXL",
    category: "Men",
    oldPrice: 1890,
    newPrice: 1494,
    discount: 21,
    isTrending: false,
    description: "A fashionable tshirt for men.",
    delivery_time: "3-4 business days",
    inStock: true,
    fewLeft: true,
  },
  {
    _id: "23",
    itemName: "Kaya",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg",
    description: "An elegant and fashionable dress for women.",
    rating: 38,
    reviews: 15,
    size: "XL",
    category: "Women",
    oldPrice: 2790,
    newPrice: 2065,
    discount: 26,
    isTrending: true,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false,
  },
  {
    _id: "24",
    itemName: "Puma",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21805092/2023/2/20/86ddde4b-6e24-49c7-9e19-5a28dd6c6de31676885316374PumaESSLOGOLABTeeB1.jpg",
    description: "A classic tshirt for kids.",
    rating: 3.8,
    reviews: 9,
    size: "M",
    category: "Kids",
    oldPrice: 599,
    newPrice: 540,
    discount: 10,
    isTrending: false,
    inStock: false,
    delivery_time: "2-3 business days",
    fewLeft: false,
  },
  {
    _id: "25",
    itemName: "CottonKing",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15746308/2021/10/6/4de7e28a-c4a3-4dba-b1fd-10d0a77c83221633492260671RegularJeans1.jpg",
    description: "A stylish dark blue Jeans made from premium cotton.",
    rating: 4.5,
    reviews: 120,
    size: "M",
    category: "Men",
    oldPrice: 2095,
    newPrice: 1446,
    discount: 31,
    isTrending: true,
    inStock: true,
    delivery_time: "2-3 business days",
    fewLeft: true
  },
  {
    _id: "26",
    itemName: "Puma",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15161140/2021/11/24/5eed5d91-097b-4297-9a64-45a3f9636b941637753705748PumaBoysBlueMustardYellowColourblockedone8ViratKohliSportyJa2.jpg",
    description: "Best Jacket for kids",
    rating: 4.8,
    reviews: 250,
    size: "S",
    category: 749,
    newPrice: 562,
    discount: 25,
    isTrending: true,
    inStock: true,
    delivery_time: "1-2 business days",
    fewLeft: false
  },
  {
    _id: "27",
    itemName: "Ladyyy",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/5/21/1eb52f74-95ff-47fe-98ff-858b9bbd25a01621615720227-1.jpg",
    description: "A classic Women Kurta.",
    rating: 4.2,
    reviews: 80,
    size: "XXL",
    category: "Women",
    oldPrice: 859,
    newPrice: 559,
    discount: 35,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: true
  },
  {
    _id: "28",
    itemName: "Wrogan",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16971882/2022/2/24/db3854d7-93bf-4e6d-bd24-0120d4278ed31645692369422-BEAT-LONDON-by-PEPE-JEANS-Men-Sky-Blue-Classic-Slim-Fit-Soli-1.jpg",
    description: "Best Men skyblue double pocket shirt",
    rating: 4.7,
    reviews: 150,
    size: "XL",
    category: "Men",
    oldPrice: 1999,
    newPrice: 1180,
    discount: 41,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false
  }
];