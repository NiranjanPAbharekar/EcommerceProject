import Jeans from '../../assets/Images/Jeans.png'
import Hoodie from '../../assets/Images/hoodie.png'
import LeatherJacket from '../../assets/Images/leather-jacket.png'
import Skirt from '../../assets/Images/skirt.png'
import TShirt from '../../assets/Images/tshirt.png'
import Sleepsuit from '../../assets/Images/sleepsuit.png'
import Shirt from '../../assets/Images/shirt.png'
import Dress from '../../assets/Images/dress.png'
import Skater from '../../assets/Images/skater.png'
import Sweater from '../../assets/Images/sweater.png'
import BabyShirt from '../../assets/Images/baby-shirt.png'
import ShirtDress from '../../assets/Images/shirt-dress.png'

const ProductList = [
  {
    id: 1,
    name: "Sports TShirt",
    image: TShirt,
    price: 25.99,
    oldPrice: 35.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    image: Jeans,
    price: 45.0,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 3,
    name: "Leather Jacket",
    image: LeatherJacket,
    price: 89.99,
    oldPrice: 129.99,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 4,
    name: "Casual Tshirt",
    image: TShirt,
    price: 19.99,
    oldPrice: 29.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 6,
    name: "Long Sleeve Shirt",
    image: Shirt,
    price: 49.99,
    oldPrice: null,
    onSale: false,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 8,
    name: "Stripes Sweater",
    image: Sweater,
    price: 65.0,
    oldPrice: 85.0,
    onSale: true,
    newArrival: false,
    category: "Kids",
  },
  {
    id: 9,
    name: "Pink Skirt",
    image: Skirt,
    price: 15.99,
    oldPrice: 20.99,
    onSale: false,
    newArrival: true,
    category: "Womens",
  },
  {
    id: 10,
    name: "Baby Shirt",
    image: BabyShirt,
    price: 22.0,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 11,
    name: "Hoodie",
    image: Hoodie,
    price: 35.0,
    oldPrice: 45.0,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 12,
    name: "Full Sleeve Shirt",
    image: ShirtDress,
    price: 10.0,
    oldPrice: 18.0,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
]

export default ProductList
