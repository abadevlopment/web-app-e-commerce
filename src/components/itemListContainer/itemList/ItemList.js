import React, { memo } from 'react'
import Item from '../item/Item'

const ItemList = memo(() => {
    return (
        <>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </>
    )
})

export default ItemList