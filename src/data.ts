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

export {cardNavigation}