// import Product from "./api-response-types/Product"
import AsyncState from "./AsyncState"
import productSearchImagesResponse from "./mock-api-responses/product-search-images-response"
import productSearchResponse from "./mock-api-responses/product-search-response"
import ProductCategories from "./ProductCategories"

interface ProductSearch {
    query: string
    category: ProductCategories
    page: number
    state: AsyncState
    result: typeof productSearchResponse
    resultImages: typeof productSearchImagesResponse
}

export default ProductSearch