import type { Cart } from '@types'

export const CartMockData: Cart[] = [
  {
    id: '01',
    itemId: '01',
    createdAt: new Date(2024, 3, 14),
    updatedAt: new Date(2024, 3, 14),
    name: 'Cryptocurrency Wallet App Ui Kit',
    link: '',
    image: 'https://images.ui8.net/uploads/1_1577433178933.png',
    price: 39,
    quantity: 1,
    userId: 'demo',
  },
  {
    id: '02',
    itemId: '02',
    createdAt: new Date(2024, 4, 30),
    updatedAt: new Date(2024, 5, 12),
    name: 'Remote Work & Collaboration UI Kit',
    link: '',
    image: 'https://images.ui8.net/uploads/detail_image_1_1715630604891.png',
    price: 24,
    quantity: 1,
    userId: 'demo',
  },
  {
    id: '03',
    itemId: '03',
    createdAt: new Date(2024, 5, 1),
    updatedAt: new Date(2024, 5, 2),
    name: 'All-Access Pass, All-Access Pass, All-Access Pass,All-Access Pass,All-Access Pass,All-Access Pass,All-Access Pass',
    link: '',
    image: 'https://ui8.net/img/aap/hero.jpg',
    price: 188,
    quantity: 1,
    userId: 'demo',
  },
]