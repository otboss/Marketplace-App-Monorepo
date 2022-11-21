import { setProductSearchQuery, setProductSearchCategory } from "./product-search-actions";
import { createReducer, on } from "@ngrx/store";
import appState from "../app-state"
import ProductCategories from "src/model/ProductCategories";

const defaultState: typeof appState.productSearch = {
    query: "",
    category: ProductCategories.ALL_CATEGORIES
}

export const productSearchReducer = createReducer(
    defaultState,

    on(setProductSearchQuery, (state: typeof defaultState, action) => ({
        ...state,
        query: action.payload
    })),

    on(setProductSearchCategory, (state: typeof defaultState, action) => ({
        ...state,
        category: action.payload
    }))
)