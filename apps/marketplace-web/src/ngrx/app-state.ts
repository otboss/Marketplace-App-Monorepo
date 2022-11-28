import AsyncState from "src/model/AsyncState";
import productSearchImagesResponse from "src/model/mock-api-responses/product-search-images-response";
import productSearchResponse from "src/model/mock-api-responses/product-search-response";
import ProductCategories from "src/model/ProductCategories";

const appState = Object.freeze({
    productSearch: {
        query: "",
        category: ProductCategories.ALL_CATEGORIES,
        page: 1,
        state: <AsyncState>"success",
        result: <typeof productSearchResponse>[],
        resultImages: <typeof productSearchImagesResponse>{}
    }
})

export default appState