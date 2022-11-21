import { createFeatureSelector, createSelector } from "@ngrx/store";
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