import  products from './data/products.js';

import { renderCartBtn } from './render/renderCartBtn.js';

import { renderProduct } from './render/renderProduct.js';

renderCartBtn();

renderProduct('.products', products[0]);
renderProduct('.products', products[1]);
renderProduct('.products', products[2]);
renderProduct('.products', products[3]);
renderProduct('.products', products[4]);


