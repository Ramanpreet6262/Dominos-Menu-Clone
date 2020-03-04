let pizzas = [
  // {
  //   category: 'veg',
  //   crust: 'New Hand Tossed',
  //   description:
  //     'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
  //   favorite: 'false',
  //   id: '0',
  //   price: '215',
  //   quantity: 0,
  //   size: 'Regular',
  //   title: 'Peppy Paneer'
  // },
  // {
  //   category: 'veg',
  //   crust: 'New Hand Tossed',
  //   description:
  //     'Veg delight - onion, capsicum, grilled mushroom, corn & paneer',
  //   favorite: 'false',
  //   id: '1',
  //   price: '450',
  //   quantity: 0,
  //   size: 'Medium',
  //   title: 'Deluxe Veggie'
  // },
  // {
  //   category: 'veg',
  //   crust: 'New Hand Tossed',
  //   description:
  //     'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese',
  //   favorite: 'false',
  //   id: '2',
  //   price: '450',
  //   quantity: 0,
  //   size: 'Medium',
  //   title: 'Veg Extravaganza'
  // },
  // {
  //   category: 'nonveg',
  //   crust: 'New Hand Tossed',
  //   description:
  //     'Double pepper barbecue chicken, golden corn and extra cheese, true delight',
  //   favorite: 'false',
  //   id: '3',
  //   price: '450',
  //   quantity: 0,
  //   size: 'Medium',
  //   title: 'Chicken Golden Delight'
  // },
  // {
  //   category: 'nonveg',
  //   crust: 'New Hand Tossed',
  //   description:
  //     'The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo',
  //   favorite: 'false',
  //   id: '4',
  //   price: '570',
  //   quantity: 0,
  //   size: 'Medium',
  //   title: 'Indi Chicken Tikka'
  // },
  // {
  //   category: 'nonveg',
  //   crust: 'New Hand Tossed',
  //   description:
  //     'A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese',
  //   favorite: 'false',
  //   id: '5',
  //   price: '570',
  //   quantity: 0,
  //   size: 'Medium',
  //   title: 'Chicken Pepperoni'
  // },

  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: 'false',
    id: '0',
    crust: 'Cheese Burst',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 215,
        'Cheese Burst': 290,
        'Fresh Pan Pizza': 245,
        'Classic Hand Tossed': 215
      },
      Medium: {
        'New Hand Tossed': 395,
        'Cheese Burst': 494,
        'Fresh Pan Pizza': 435,
        'Wheat Thin Crust': 445
      },
      Large: {
        'New Hand Tossed': 595
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: 'false',
    id: '0',
    crust: 'Cheese Burst',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 215,
        'Cheese Burst': 290,
        'Fresh Pan Pizza': 245,
        'Classic Hand Tossed': 215
      },
      Medium: {
        'New Hand Tossed': 395,
        'Cheese Burst': 494,
        'Fresh Pan Pizza': 435,
        'Wheat Thin Crust': 445
      },
      Large: {
        'New Hand Tossed': 595
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: 'false',
    id: '0',
    crust: 'Cheese Burst',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 215,
        'Cheese Burst': 290,
        'Fresh Pan Pizza': 245,
        'Classic Hand Tossed': 215
      },
      Medium: {
        'New Hand Tossed': 395,
        'Cheese Burst': 494,
        'Fresh Pan Pizza': 435,
        'Wheat Thin Crust': 445
      },
      Large: {
        'New Hand Tossed': 595
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: 'false',
    id: '0',
    crust: 'Cheese Burst',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 215,
        'Cheese Burst': 290,
        'Fresh Pan Pizza': 245,
        'Classic Hand Tossed': 215
      },
      Medium: {
        'New Hand Tossed': 395,
        'Cheese Burst': 494,
        'Fresh Pan Pizza': 435,
        'Wheat Thin Crust': 445
      },
      Large: {
        'New Hand Tossed': 595
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: 'false',
    id: '0',
    crust: 'Cheese Burst',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 215,
        'Cheese Burst': 290,
        'Fresh Pan Pizza': 245,
        'Classic Hand Tossed': 215
      },
      Medium: {
        'New Hand Tossed': 395,
        'Cheese Burst': 494,
        'Fresh Pan Pizza': 435,
        'Wheat Thin Crust': 445
      },
      Large: {
        'New Hand Tossed': 595
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: 'false',
    id: '0',
    crust: 'Cheese Burst',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 215,
        'Cheese Burst': 290,
        'Fresh Pan Pizza': 245,
        'Classic Hand Tossed': 215
      },
      Medium: {
        'New Hand Tossed': 395,
        'Cheese Burst': 494,
        'Fresh Pan Pizza': 435,
        'Wheat Thin Crust': 445
      },
      Large: {
        'New Hand Tossed': 595
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  }
];

let allSizes = ['Regular', 'Medium', 'Large'];
let allCrusts = [
  'New Hand Tossed',
  'Cheese Burst',
  'Fresh Pan Pizza',
  'Classic Hand Tossed',
  'Wheat Thin Crust'
];

let data = {
  pizzas: pizzas,
  allSizes: allSizes,
  allCrusts: allCrusts
};

export default data;
