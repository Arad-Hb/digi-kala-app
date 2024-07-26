'use client'
import React from 'react'
import styles from './DecrementButton.module.css'
import { useDispatch } from 'react-redux'
import { HiMinus } from "react-icons/hi"
import { decreaseItem } from '@/redux/features/slices/shoppingCartSlice'

const DecrementButton = ({product}) => {
    const dispatch=useDispatch()
  return (
    <button className={`${styles.counterButton}`} onClick={()=>dispatch(decreaseItem(product.id))}><HiMinus /></button>
  )
}

export default DecrementButton