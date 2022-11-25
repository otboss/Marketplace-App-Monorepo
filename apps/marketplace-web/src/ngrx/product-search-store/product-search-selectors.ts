import { createFeatureSelector, createSelector } from "@ngrx/store";
import Payload from "src/model/Payload";
import appState from "../app-state"

export const selectProductSearchQuery = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.productSearch) => <Payload<typeof appState.productSearch.query>>{
        payload: state.query
    }
)

export const selectProductSearchCategory = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.productSearch) => <Payload<typeof appState.productSearch.category>>{
        payload: state.category
    }
)

export const selectProductSearchState = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.productSearch) => <Payload<typeof appState.productSearch.state>>{
        payload: state.state
    }
)

export const selectProductSearchResult = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.productSearch) => <Payload<typeof appState.productSearch.result>>{
        payload: state.result
    }
)

export const selectProductSearchResultImages = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.productSearch) => <Payload<typeof appState.productSearch.resultImages>>{
        payload: state.resultImages
    }
)