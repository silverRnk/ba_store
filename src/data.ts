import MikaKeyChain from '../src/assets/Product_Img.png'

//Types
import { NewDeals } from './interface'

interface INavigationCard {
    title: string,
    backgroundImg?: string,
    link?:string
}

const cardNavigation: INavigationCard[] = [
    {title: 'New Arrivals'},
    {title: 'Deals'},
    {title: 'Best Sellers'},
    {title: 'Categories'},
]

const newDeals: NewDeals[] = [
    {title: "Mika Key Chain", price: 10.00, rating: 3.5, reviews: 3215, isFavorite: false, url: "", imageURL:MikaKeyChain},
    {title: "Seia Key Chain", price: 10.00, rating: 3.5, reviews: 3215, isFavorite: false, url: "", imageURL:MikaKeyChain},
    {title: "Nagisa Key Chain", price: 10.00, rating: 3.5, reviews: 3215, isFavorite: false, url: "", imageURL:MikaKeyChain},
    {title: "Mika Key Chain", price: 10.00, rating: 3.5, reviews: 3215, isFavorite: false, url: "", imageURL:MikaKeyChain},
    {title: "Seia Key Chain", price: 10.00, rating: 3.5, reviews: 3215, isFavorite: false, url: "", imageURL:MikaKeyChain},
    {title: "Nagisa Key Chain", price: 10.00, rating: 3.5, reviews: 3215, isFavorite: false, url: "", imageURL:MikaKeyChain},
];

export {cardNavigation, newDeals}