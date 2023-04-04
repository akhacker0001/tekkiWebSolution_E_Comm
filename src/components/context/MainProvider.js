import React, { createContext, useEffect, useState } from 'react'
import { interfaces } from '../utils/formConstant'

export const MainContext = createContext({})
const MainProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [itemKeys, setItemKeys] = useState({})
    const handleSetCartItems = (item) => {
        setCartItems(state => ([
            ...state,
            item
        ]))
    }
    useEffect(() => {
        if (cartItems) {
            let keys = {}
            cartItems.forEach((ele) => {
                keys[ele.id] = true
            })
            setItemKeys(keys)
        }
    }, [cartItems])
    const [currentInterFace, setCurrentInterFace] = useState(interfaces.dashboard)
    return (
        <MainContext.Provider value={{ currentInterFace, setCurrentInterFace, cartItems, handleSetCartItems, itemKeys }} >
            {children}

        </MainContext.Provider>
    )
}

export default MainProvider
