import { createFeatureSelector, createSelector } from "@ngrx/store";
import AsyncState from "src/model/AsyncState";
import Payload from "src/model/Payload";
import ProductCategories from "src/model/ProductCategories";
import * as appState from "../app-state"

export const selectProductSearchQuery = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.default.productSearch) => <Payload<string>>{
        payload: state.query
    }
)

export const selectProductSearchCategory = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.default.productSearch) => <Payload<ProductCategories>>{
        payload: state.category
    }
)

export const selectProductSearchState = createSelector(
    createFeatureSelector("productSearch"),
    (state: typeof appState.default.productSearch) => <Payload<AsyncState>>{
        payload: state.state
    }
)