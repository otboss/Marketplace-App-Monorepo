import { setProductSearchQuery, setProductSearchCategory, setProductSearchState, setProductSearchResult, setProductSearchResultImages } from "./product-search-actions";
import { createReducer, on } from "@ngrx/store";
import appState from "../app-state"

const defaultState: typeof appState.productSearch = appState.productSearch

export const productSearchReducer = createReducer(
    defaultState,

    on(setProductSearchQuery, (state: typeof defaultState, action) => (<typeof appState.productSearch>{
        ...state,
        query: action.payload
    })),

    on(setProductSearchCategory, (state: typeof defaultState, action) => (<typeof appState.productSearch>{
        ...state,
        category: action.payload
    })),

    on(setProductSearchState, (state: typeof defaultState, action) => (<typeof appState.productSearch>{
        ...state,
        state: action.payload
    })),

    on(setProductSearchResult, (state: typeof defaultState, action) => (<typeof appState.productSearch>{
        ...state,
        result: action.payload
    })),

    on(setProductSearchResultImages, (state: typeof defaultState, action) => (<typeof appState.productSearch>{
        ...state,
        resultImages: action.payload
    })),

)