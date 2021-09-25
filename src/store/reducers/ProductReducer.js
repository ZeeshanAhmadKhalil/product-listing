import { v4 } from "uuid";

import {
    ADD_NEW_PRODUCT,
    SEARCH_PRODUCT,
    DELETE_PRODUCT,
} from '../actions/types'

const initialState = {
    products: [
        {
            id: v4(),
            image: require('../../assets/images/product-image/electronic/14.jpg').default,
            name: 'Huawei Band 6',
            description: 'HUAWEI Band 6 has a 1.47-inch AMOLED FullView display, with a 148% larger3 viewable area, and a low-bezel 64% screen-to-body ratio. Combine that with the high-resolution 194 x 368 display with 282 PPI and you’ve got something really impressive to look at on your wrist.',
            price: '10,000 pkr',
            inventoryDate: new Date(2021, 1, 1),
        },
        {
            id: v4(),
            image: require('../../assets/images/product-image/electronic/13.jpg').default,
            name: 'Speakers',
            description: 'A loudspeaker is an electroacoustic transducer, that is, a device that converts an electrical audio signal into a corresponding sound.',
            price: '300 pkr',
            inventoryDate: new Date(2021, 2, 3),
        },
        {
            id: v4(),
            image: require('../../assets/images/product-image/electronic/12.jpg').default,
            name: 'Ladies purse',
            description: `A purse, also known as a handbag, is a bag used to carry money, wallets, phones, and other daily essentials. Purses often feature a long strap or handle that you can rest on your shoulder or hold in your hand. You can use handbags for the function of transporting personal essentials or as a fashion statement.`,
            price: '69 pkr',
            inventoryDate: new Date(2021, 1, 1),
        },
        {
            id: v4(),
            image: require('../../assets/images/product-image/electronic/11.jpg').default,
            name: 'Pokemon Ball',
            description: 'A Poké Ball (sometimes spelled as Pokéball) is a round device used in the Pokémon series to catch and contain Pokémon. ... There are many types of the Poké Ball, such as the Great Ball or Ultra Ball. The term can be used to describe the basic style of ball, or for the entire group.',
            price: '10,000,000 pkr',
            inventoryDate: new Date(2021, 1, 1),
        },
    ],
}

export default (state = initialState, { type, payload }) => {
    // console.log('TYPE::')
    // console.log(type)
    // console.log('PAYLOAD::')
    // console.log(payload)
    switch (type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(obj => obj.id != payload),
            }
        case ADD_NEW_PRODUCT:
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            return {
                ...state,
                products: [
                    {
                        id: v4(),
                        image: require(`../../assets/images/product-image/electronic/${randomNumber}.jpg`).default,
                        name: payload.productName,
                        description: payload.description,
                        price: payload.price,
                        inventoryDate: new Date(),
                    },
                    ...state.products,
                ]
            }
        default:
            return state;
    }
}