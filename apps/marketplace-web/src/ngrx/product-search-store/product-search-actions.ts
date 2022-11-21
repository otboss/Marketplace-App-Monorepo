// export { SET_PRODUCT_SEARCH } from "../actions";

import { createAction, props } from "@ngrx/store"
import Payload from "src/model/Payload"
import ProductCategories from "src/model/ProductCategories"

export const setProductSearchQuery = createAction("SET_PRODUCT_SEARCH_QUERY", props<Payload<string>>())
export const setProductSearchCategory = createAction("SET_PRODUCT_SEARCH_CATEGORY", props<Payload<ProductCategories>>())