import ProductCategories from "../ProductCategories";

const productSearchResponse: Array<{
    id: string
    title: string
    rating: number
    minCost: number
    maxCost: number
    category: ProductCategories
}> = [
    {
        id: "11212",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "Shoes",
        category: ProductCategories.APPAREL
    },
    {
        id: "11213",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "T Shirt",
        category: ProductCategories.APPAREL
    },
    {
        id: "11214",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "Loafers",
        category: ProductCategories.APPAREL
    },
    {
        id: "11215",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "Jeans",
        category: ProductCategories.APPAREL
    },
    {
        id: "11216",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "Jeans",
        category: ProductCategories.APPAREL
    },
    {
        id: "11217",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "Jeans",
        category: ProductCategories.APPAREL
    },
    {
        id: "11218",
        minCost: 122,
        maxCost: 122,
        rating: 0.76,
        title: "Jeans",
        category: ProductCategories.APPAREL
    },
]

export default productSearchResponse