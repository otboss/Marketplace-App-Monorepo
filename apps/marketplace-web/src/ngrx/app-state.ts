import ProductCategories from "src/model/ProductCategories";
import ProductSearch from "src/model/ProductSearch";

const appState = {
    productSearch: <ProductSearch>{
        query: "",
        category: ProductCategories.ALL_CATEGORIES,
        page: 1
    }
}

export default appState