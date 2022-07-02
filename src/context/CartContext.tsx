import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/navbar/ShoppingCart";

type CartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getQuantity: (id: number) => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItem: CartItems[]
}

type CartItems = {
  id: number,
  quantity: number  
}

const CartContext = createContext({} as ShoppingCartContext)

export function useCartContext() {
  return useContext(CartContext)
}

export function CartProvider({children} : CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItem, setCartItem] = useState<CartItems[]>([])

  const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)  

  function getQuantity(id: number) {
    return cartItem.find(item => item.id === id)?.quantity || 0
  }

  function increaseQuantity(id: number) {
    setCartItem(currItem => {
      if(currItem.find(item => item.id) == null) {
        return [...currItem, {id, quantity: 1}]
      } else {
        return currItem.map(item => {
          if(item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseQuantity(id: number) {
    setCartItem(currItem => {
      if(currItem.find(item => item.id)?.quantity === 1) {
        return currItem.filter(item => item.id !== id)
      } else {
        return currItem.map(item => {
          if(item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItem(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <CartContext.Provider value={{ 
        getQuantity, 
        increaseQuantity, 
        decreaseQuantity, 
        removeFromCart, 
        openCart,
        closeCart,
        cartItem, 
        cartQuantity,
      }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  )
}













