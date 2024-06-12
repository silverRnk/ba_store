interface INavigationCard {
    title: string,
    backgroundImg?: string,
    link?:string
}

interface NewDeals {
    title: string,
    price: number,
    rating: number,
    reviews: number,
    isFavorite: boolean,
    url: string,
    imageURL: string,
}

const cardNavigation: INavigationCard[] = [
    {title: 'New Arrivals'},
    {title: 'Deals'},
    {title: 'Best Sellers'},
    {title: 'Categories'},
]

const newDeals: NewDeals[] = [];

export {cardNavigation}