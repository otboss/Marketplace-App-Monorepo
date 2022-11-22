// export { SET_PRODUCT_SEARCH } from "../actions";

import { createAction, props } from "@ngrx/store"
import AsyncState from "src/model/AsyncState"
import Payload from "src/model/Payload"
import ProductCategories from "src/model/ProductCategories"
import appState from "../app-state"

export const setProductSearchQuery = createAction("SET_PRODUCT_SEARCH_QUERY", props<Payload<string>>())
export const setProductSearchCategory = createAction("SET_PRODUCT_SEARCH_CATEGORY", props<Payload<ProductCategories>>())
export const setProductSearchState = createAction("SET_PRODUCT_SEARCH_STATE", props<Payload<AsyncState>>())