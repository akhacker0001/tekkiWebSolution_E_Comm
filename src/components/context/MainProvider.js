import React, { createContext, useEffect, useState } from 'react'
import { errorFieldMapping, errorFieldMessages, fieldCondition, formInitialState, interfaces } from '../utils/formConstant'

export const MainContext = createContext({})
const MainProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [itemKeys, setItemKeys] = useState({})
    const [userData, setUserData] = useState({ ...formInitialState });
    const [formError, setFormError] = useState({ ...errorFieldMapping })
    const [currentInterFace, setCurrentInterFace] = useState(interfaces.dashboard)
    // const [erorr,setError] = useState()
    const checkErroOrUpdate = () => {
        let errorFieldsTemp = { ...formError }
        Object.keys(userData).forEach((ele) => {
            let error = fieldCondition[ele](userData[ele])
            if (error) {
                errorFieldsTemp[ele] = errorFieldMessages[ele]
            } else {
                errorFieldsTemp[ele] = ""
            }
        })
        setFormError(errorFieldsTemp)
        let isError = Object.values(errorFieldsTemp).filter(Boolean).length;
        return isError
        
    }
    const handleSubmitData = () => {
        if(!checkErroOrUpdate()){
            setCurrentInterFace(interfaces.review)
        }
    }
    const handleSetUserData = (event) => {
        let { target: {
            name, value
        } } = event
        setUserData(state => ({
            ...state,
            [name]: value
        }))


    }
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
    
    return (
        <MainContext.Provider value={{ currentInterFace, setCurrentInterFace, cartItems, handleSetCartItems, itemKeys, userData, setUserData, formError, handleSubmitData, handleSetUserData }}  >
            {children}

        </MainContext.Provider>
    )
}

export default MainProvider
