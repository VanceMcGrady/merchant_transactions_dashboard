import { Merchant } from './entities/merchant.entity';

export const merchants: Merchant[] = [
  {
    id: 1,
    name: 'Blue Bottle Coffee',
    category: 'Food & Beverage',
    city: 'Oakland',
    state: 'CA',
    email: 'billing@bluebottlecoffee.com',
    createdAt: '2023-01-15T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Green Leaf Grocers',
    category: 'Grocery',
    city: 'Portland',
    state: 'OR',
    email: 'accounts@greenleafgrocers.com',
    createdAt: '2023-03-02T00:00:00.000Z',
  },
  {
    id: 3,
    name: 'Summit Outdoor Supply',
    category: 'Retail',
    city: 'Denver',
    state: 'CO',
    email: 'finance@summitoutdoor.com',
    createdAt: '2023-04-21T00:00:00.000Z',
  },
  {
    id: 4,
    name: 'Riverside Auto Repair',
    category: 'Automotive',
    city: 'Austin',
    state: 'TX',
    email: 'billing@riversideauto.com',
    createdAt: '2023-06-09T00:00:00.000Z',
  },
  {
    id: 5,
    name: 'Harbor Books & Vinyl',
    category: 'Retail',
    city: 'Seattle',
    state: 'WA',
    email: 'orders@harborbooks.com',
    createdAt: '2023-08-30T00:00:00.000Z',
  },
];
