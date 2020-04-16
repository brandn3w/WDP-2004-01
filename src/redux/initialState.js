const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  galleryTabs: [
    { id: 'featured', name: 'Featured' },
    { id: 'topselller', name: 'Top seller', active: 'true' },
    { id: 'saleoff', name: 'Sale off' },
    { id: 'toprated', name: 'Top rated' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      customerStars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 42,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/269252/pexels-photo-269252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 32,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/945225/pexels-photo-945225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1863622/pexels-photo-1863622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/769585/pexels-photo-769585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/879821/pexels-photo-879821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1390062/pexels-photo-1390062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/909504/pexels-photo-909504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1030979/pexels-photo-1030979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/358572/pexels-photo-358572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/707579/pexels-photo-707579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'chair-1',
      name: 'Chair Bristique 24',
      category: 'chair',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'chair-2',
      name: 'Chair Ru Bristique 24',
      category: 'chair',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1701100/pexels-photo-1701100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'chair-3',
      name: 'Chair Ru Bristique 24',
      category: 'chair',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/769585/pexels-photo-769585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'Chair-4',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'sofa-1',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'sofa-2',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'sofa-3',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=apartament-architektura-dekoracja-wnetrz-dywan-276583.jpg&fm=jpg',
    },
    {
      id: 'sofa-4',
      name: 'Sofa Ru Bristique 24',
      category: 'sofa',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'table-1',
      name: 'Table Ru Bristique 24',
      category: 'table',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'table-2',
      name: 'Table Ru Bristique 24',
      category: 'table',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'table-3',
      name: 'Table Ru Bristique 24',
      category: 'table',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'table-4',
      name: 'Table Ru Bristique 24',
      category: 'table',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'dining-1',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'dining-2',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'dining-3',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'dining-4',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'dining-5',
      name: 'Dining Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      customerStars: 0,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  cart: {
    products: [],
  },
  search: {
    category: {},
    searchPhrase: '',
  },
  feedbacks: [
    {
      id: 0,
      name: 'John Smith',
      clientType: 'Furniture client',
      image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus lectus cursus sem placerat, quis tempus nibh auctor. Nulla hendrerit finibus blandit. Quisque molestie pharetra felis quis pharetra. Proin convallis accumsan auctor. Orci varius natoque penatibus et magnis dis parturient.',
    },
    {
      id: 1,
      name: 'Kate Morningstar',
      clientType: 'Shopaholic',
      image:
        'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus lectus cursus sem placerat, quis tempus nibh auctor. Nulla hendrerit finibus blandit. Quisque molestie pharetra felis quis pharetra. Proin convallis accumsan auctor. Orci varius natoque penatibus et magnis dis parturient.',
    },
    {
      id: 2,
      name: 'Jon Snow',
      clientType: 'Just a guy',
      image:
        'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus lectus cursus sem placerat, quis tempus nibh auctor. Nulla hendrerit finibus blandit. Quisque molestie pharetra felis quis pharetra. Proin convallis accumsan auctor. Orci varius natoque penatibus et magnis dis parturient.',
    },
  ],
  window: {
    mode: 'desktops',
    width: 0,
    height: 0,
  },
};

export default initialState;
