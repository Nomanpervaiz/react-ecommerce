import { useContext, useEffect, useState } from "react"

import { Button, Image } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { contextCart } from "../context/CartContext"
import AppButton from "../components/Button"


function AppCartPage() {
    const { cartItems, removeItemFromCart,updateQuantity } = useContext(contextCart)
    const totalAmount = cartItems.reduce((total, product) => total + product.price * product.quantity, 0)
    const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0)

    const increaseQuantity = (productId)=>{
        const product = cartItems.find((item)=> item.id == productId )
        if (product) {
            updateQuantity(productId,product.quantity+1)
        }

    }
    const decreaseQuantity = (productId)=>{
        const product = cartItems.find((item)=> item.id == productId )
        if (product && product.quantity > 1) {
            updateQuantity(productId,product.quantity-1)
        }
    }


    return (

        <div className="container mx-auto ">
            <div className="flex gap-2 my-6">
                <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
                    <h1>Total Amount</h1>
                    <h1 className="font-semibold text-3xl">$ {totalAmount?.toFixed(2)}</h1>
                </div>
                <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
                    <h1>Total Quantity</h1>
                    <h1 className="font-semibold text-3xl"> {totalQuantity}</h1>
                </div>
            </div>

            {
                cartItems.map((data) => {
                    return (
                        <div className="flex p-3 border my-0" key={data.id} >
                            <Image
                                height={100}
                                width={100}
                                src={data.thumbnail} className="h-32 w-32 rounded-full" />
                            <div className="pl-5">
                                <h1 className="text-2xl font-bold my-1">{data.title}</h1>
                                <h1 className="text-1xl font-medium my-1">Price : {data.price} , Quantity : {data.quantity}</h1>
                                <div className="flex">

                                    <AppButton className="font-bold text-3xl pt-0 p-2" onClick={() => decreaseQuantity(data.id)} name={"-"} />
                                    <h1 className="p-2 pt-0 text-xl">{data.quantity}</h1>
                                    <AppButton className="font-bold text-2xl pt-0 p-2" onClick={() => increaseQuantity(data.id)} name={"+"} />
                                </div>
                                <Button
                                    onClick={() => removeItemFromCart(data.id)}
                                    icon={<DeleteOutlined />}
                                    className="my-2"
                                    danger>Remove Item</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>


    )
}

export default AppCartPage