import { setProductSearchQuery, setProductSearchCategory, setProductSearchState } from "./product-search-actions";
import { createReducer, on } from "@ngrx/store";
import appState from "../app-state"
import ProductSearch from "src/model/ProductSearch";

const defaultState: ProductSearch= appState.productSearch

export const productSearchReducer = createReducer(
    defaultState,

    on(setProductSearchQuery, (state: typeof defaultState, action) => ({
        ...state,
        query: action.payload
    })),

    on(setProductSearchCategory, (state: typeof defaultState, action) => ({
        ...state,
        category: action.payload
    })),

    on(setProductSearchState, (state: typeof defaultState, action) => ({
        ...state,
        state: action.payload
    })),

)