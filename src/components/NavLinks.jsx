// src/components/NavLinks.js

import Veggies from '../assets/images/Veggies.jpg';
import Grains from '../assets/images/Grains.jpg';
import Fruits from '../assets/images/Fruits.jpg';
import Carrots from '../assets/images/Carrots.jpg.webp';
import BellPeppers from '../assets/images/Bell Peppers.jpg.webp';
import Strawberries from '../assets/images/Strawberries.jpg.webp';
import GreenBeans from '../assets/images/Green Beans.jpg.webp';
import Cabbage from '../assets/images/Cabbage.jpg.webp';
import Tomatos from '../assets/images/Tomatos.jpg.webp';
import Broccoli from '../assets/images/Broccoli.jpg.webp';
import Juice from '../assets/images/Juice.jpg.webp';
import Onions from '../assets/images/Onions.jpg';
import Apples from '../assets/images/Apples.jpg';
import Chilli from '../assets/images/Chilli.jpg';
import Garlic from '../assets/images/Garlic.jpg';
import { Truck, Package, Award, Headphones } from 'lucide-react';

export const ProductData = [
  {
    title: 'Fresh Vegetables',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.',
    image: Veggies,
  },
  {
    title: 'Fresh Fruits',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.',
    image: Fruits,
  },
  {
    title: 'Organic Grains',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.',
    image: Grains,
  },
  
];
// Feature Data
export const FeatureData = [
  {
    icon: <Truck size={40} color="#FFFFFF" />,
    title: 'FREE SHIPPING',
    description: 'ON ORDER OVER GH₵300',
  },
  {
    icon: <Package size={40} color="#FFFFFF" />,
    title: 'ALWAYS FRESH',
    description: 'PRODUCT WELL PACKAGE',
  },
  {
    icon: <Award size={40} color="#FFFFFF" />,
    title: 'SUPERIOR QUALITY',
    description: 'QUALITY PRODUCTS',
  },
  {
    icon: <Headphones size={40} color="#FFFFFF" />,
    title: 'SUPPORT',
    description: '24/7 SUPPORT',
  },
];
export const products = [
  { id: 1, name: 'Bell Pepper', price: '$10.00', image: BellPeppers, category: 'Vegetables' },
  { id: 2, name: 'Strawberry', price: '$20.00', image: Strawberries, category: 'Fruits' },
  { id: 3, name: 'Green Beans', price: '$30.00', image: GreenBeans, category: 'Vegetables' },
  { id: 4, name: 'Purple Cabbage', price: '$40.00', image: Cabbage, category: 'Vegetables' },
  { id: 5, name: 'Tomato', price: '$10.00', image: Tomatos, category: 'Vegetables' },
  { id: 6, name: 'Broccoli', price: '$20.00', image: Broccoli, category: 'Vegetables' },
  { id: 7, name: 'Carrots', price: '$30.00', image: Carrots, category: 'Vegetables' },
  { id: 8, name: 'Fruit Juice', price: '$40.00', image: Juice, category: 'Juices' },
  { id: 9, name: 'Onion', price: '$10.00', image: Onions, category: 'Vegetables' },
  { id: 10, name: 'Apple', price: '$20.00', image: Apples, category: 'Fruits' },
  { id: 11, name: 'Garlic', price: '$30.00', image: Garlic, category: 'Roots' },
  { id: 12, name: 'Chili', price: '$40.00', image: Chilli, category: 'Vegetables' },
];