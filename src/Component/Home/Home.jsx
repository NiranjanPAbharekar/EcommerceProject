import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/product'
import Cart from '../Cart/Cart'
import WishList from '../WishList/WishList'

const Home = () => {
    const [searchTearm, setSearchTearm] = useState("");
     const [isScrolled, setIsScrolled] = useState(false);
       const [ActivePanel, setActivePanel] = useState(null);
       const [cart , setCart] = useState([]);
         const [wishlist, setWishlist] = useState([]);

     useEffect(() => {
    const changeNavBar = () => {
      setIsScrolled(window.scrollY >= 10); // true if scrolled 10px or more
    };
   
  

    window.addEventListener("scroll", changeNavBar);

    // cleanup on unmount
    return () => {
      window.removeEventListener("scroll", changeNavBar);
    };
  }, []);
    // Add product to wishlist
  const AddToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.id === product.id);
      if (exists) return prevWishlist; // avoid duplicates
      return [...prevWishlist, product];
    });
    // setActivePanel("wishlist");
  };

  // Clear all wishlist
  const clearWishlist = () => setWishlist([]);


    const handelScroll = (id) => {
        
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
     const handelActivePanel=(tabName)=>{
        setActivePanel(prev=>
          prev === tabName ? null : tabName
        );

    }

    
   const AddtoCart = (product) => {
  setCart((prevCart) => {
    const exists = prevCart.find((p) => p.id === product.id);
    if (exists) {
      return prevCart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
  
  

};

  return (
    <div>
        <Navbar handelScroll={handelScroll} setSearchTearm={setSearchTearm} isScrolled={isScrolled} handelActivePanel={handelActivePanel}  cartCount={cart.length}  
  wishlistCount={wishlist.length} />
        <Banner/>
        <Product searchTearm={searchTearm} AddtoCart={AddtoCart}  AddToWishlist={AddToWishlist} wishlist={wishlist} setWishlist={setWishlist}/>
           {ActivePanel && (
        <div 
          className="overlay"
          onClick={() => setActivePanel(null)}
        ></div>
      )}
             <Cart ActivePanel={ActivePanel} setActivePanel={setActivePanel} cart={cart} setCart={setCart} />
      <WishList 
  ActivePanel={ActivePanel} 
  setActivePanel={setActivePanel} 
  wishlist={wishlist}
  setWishlist={setWishlist}
  clearWishlist={clearWishlist}
  AddtoCart={AddtoCart}   
/>
    </div>
  )
}

export default Home