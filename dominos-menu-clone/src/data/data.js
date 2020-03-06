let pizzas = [
  {
    title: 'Peppy Paneer',
    quantity: 0,
    category: 'veg',
    description:
      'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',
    favorite: false,
    id: '0',
    crust: 'New Hand Tossed',
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
    availableSizes: ['Regular', 'Medium', 'Large'],
    extraCheese: false,
    // cheesePricing: {
    //   Regular: 50,
    //   Medium: 75,
    //   Large: 95
    // },
    // toppings: [1, 2]
    vegToppings: [],
    nonVegToppings: [],
    customised: false
  },
  {
    title: 'Deluxe Veggie',
    quantity: 0,
    category: 'veg',
    description:
      'Veg delight - onion, capsicum, grilled mushroom, corn & paneer',
    favorite: false,
    id: '1',
    crust: 'New Hand Tossed',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 235,
        'Cheese Burst': 310,
        'Fresh Pan Pizza': 265,
        'Classic Hand Tossed': 235
      },
      Medium: {
        'New Hand Tossed': 450,
        'Cheese Burst': 549,
        'Fresh Pan Pizza': 490,
        'Wheat Thin Crust': 500
      },
      Large: {
        'New Hand Tossed': 695
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Veg Extravaganza',
    quantity: 0,
    category: 'veg',
    description:
      'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese',
    favorite: false,
    id: '2',
    crust: 'New Hand Tossed',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 235,
        'Cheese Burst': 310,
        'Fresh Pan Pizza': 265,
        'Classic Hand Tossed': 235
      },
      Medium: {
        'New Hand Tossed': 450,
        'Cheese Burst': 549,
        'Fresh Pan Pizza': 490,
        'Wheat Thin Crust': 500
      },
      Large: {
        'New Hand Tossed': 695
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Chicken Golden Delight',
    quantity: 0,
    category: 'nonveg',
    description:
      'Double pepper barbecue chicken, golden corn and extra cheese, true delight',
    favorite: false,
    id: '3',
    crust: 'New Hand Tossed',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 235,
        'Cheese Burst': 310,
        'Fresh Pan Pizza': 265,
        'Classic Hand Tossed': 235
      },
      Medium: {
        'New Hand Tossed': 450,
        'Cheese Burst': 549,
        'Fresh Pan Pizza': 490,
        'Wheat Thin Crust': 500
      },
      Large: {
        'New Hand Tossed': 695
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Indi Chicken Tikka',
    quantity: 0,
    category: 'nonveg',
    description:
      'The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo',
    favorite: false,
    id: '4',
    crust: 'New Hand Tossed',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 305,
        'Cheese Burst': 380,
        'Fresh Pan Pizza': 335,
        'Classic Hand Tossed': 305
      },
      Medium: {
        'New Hand Tossed': 570,
        'Cheese Burst': 669,
        'Fresh Pan Pizza': 610,
        'Wheat Thin Crust': 620
      },
      Large: {
        'New Hand Tossed': 835
      }
    },
    availableSizes: ['Regular', 'Medium', 'Large']
  },
  {
    title: 'Chicken Pepperoni',
    quantity: 0,
    category: 'nonveg',
    description:
      'A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese',
    favorite: false,
    id: '5',
    crust: 'New Hand Tossed',
    size: 'Medium',
    availableCrusts: {
      //Size : {}
      Regular: {
        // Crust : price
        'New Hand Tossed': 305,
        'Cheese Burst': 380,
        'Fresh Pan Pizza': 335,
        'Classic Hand Tossed': 305
      },
      Medium: {
        'New Hand Tossed': 570,
        'Cheese Burst': 669,
        'Fresh Pan Pizza': 610,
        'Wheat Thin Crust': 620
      },
      Large: {
        'New Hand Tossed': 835
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
let cheesePricing = {
  Regular: 50,
  Medium: 75,
  Large: 95
};
let allVegToppings = [
  'Onion',
  'Fresh Tomato',
  'Grilled Mushroom',
  'Golden Corn',
  'Crisp Capsicum',
  'Black Olive'
];
let allNonVegToppings = [
  'Pepper Barbecue Chicken',
  'Peri-Peri Chicken',
  'Grilled Chicken Rasher',
  'Chicken Sausage',
  'Chicken Tikka',
  'Chicken Pepperoni'
];
let vegToppingsPricing = {
  Regular: 35,
  Medium: 60,
  Large: 80
};
let nonVegToppingsPricing = {
  Regular: 50,
  Medium: 75,
  Large: 95
};

let data = {
  pizzas: pizzas,
  allSizes: allSizes,
  allCrusts: allCrusts,
  allVegToppings: allVegToppings,
  allNonVegToppings: allNonVegToppings,
  cheesePricing: cheesePricing,
  vegToppingsPricing: vegToppingsPricing,
  nonVegToppingsPricing: nonVegToppingsPricing
};

export default data;
