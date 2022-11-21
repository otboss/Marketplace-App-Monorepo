import ProductCategories from "./ProductCategories"

interface ProductSearch {
    query: string
    category: ProductCategories
    page: number 
}

export default ProductSearch