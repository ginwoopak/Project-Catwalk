const products = [
  // {
  //   id: 1,
  //   name: 'Camo Onesie',
  //   slogan: 'Blend in to your crowd',
  //   description:
  //     'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  //   category: 'Jackets',
  //   original_price: '140',
  //   sale_price: null,
  //   'default?': true,
  //   photos: [
  //     {
  //       thumbnail_url: './related_product_pics/onsie.jpg',
  //       url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  //     },
  //     {
  //       thumbnail_url:
  //         'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  //       url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  //     },
  //   ],
  //   rate: [4.0],
  // },
  // {
  //   id: 2,
  //   name: 'Bright Future Sunglasses',
  //   slogan: "You've got to wear shades",
  //   description:
  //     "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  //   category: 'Accessories',
  //   original_price: '69',
  //   sale_price: null,
  //   'default?': true,
  //   photos: [
  //     {
  //       thumbnail_url: './related_product_pics/sunglasses.jpg',
  //       url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  //     },
  //     {
  //       thumbnail_url:
  //         'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  //       url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  //     },
  //   ],
  //   rate: [2.5],
  // },
  // {
  //   id: 3,
  //   name: 'Morning Joggers',
  //   slogan: 'Make yourself a morning person',
  //   description:
  //     "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
  //   category: 'Pants',
  //   original_price: '40',
  //   sale_price: null,
  //   'default?': true,
  //   photos: [
  //     {
  //       thumbnail_url: './related_product_pics/jogger.jpg',
  //       url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  //     },
  //     {
  //       thumbnail_url:
  //         'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  //       url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  //     },
  //   ],
  //   rate: [3.5],
  // },
  // {
  //   id: 4,
  //   name: 'Air Minis 250',
  //   slogan: 'Full court support',
  //   description:
  //     'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  //   category: 'Basketball Shoes',
  //   original_price: '150',
  //   sale_price: null,
  //   'default?': true,
  //   photos: [
  //     {
  //       thumbnail_url: './related_product_pics/sneaker.jpg',
  //       url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  //     },
  //     {
  //       thumbnail_url:
  //         'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  //       url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  //     },
  //   ],
  //   rate: [5.0],
  // },
  {
    id: 5,
    name: 'Masks',
    slogan: 'Just wear it',
    description: '50 pcs per box',
    category: 'Accessories',
    original_price: '15',
    sale_price: 12.99,
    'default?': true,
    photos: [
      {
        thumbnail_url: './related_product_pics/mask.jpg',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url:
          'https://imaoriginalplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
    ],
    rate: [4.5],
  },
];

export default products;
