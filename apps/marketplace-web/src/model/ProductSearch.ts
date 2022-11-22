import AsyncState from "./AsyncState"
import ProductCategories from "./ProductCategories"

interface ProductSearch {
    query: string
    category: ProductCategories
    page: number
    state: AsyncState
}

export default ProductSearch