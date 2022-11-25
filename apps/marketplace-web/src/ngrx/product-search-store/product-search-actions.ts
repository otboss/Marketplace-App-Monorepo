// export { SET_PRODUCT_SEARCH } from "../actions";

import { createAction, props } from "@ngrx/store"
import productSearchImagesResponse from "src/model/mock-api-responses/product-search-images-response"
import productSearchResponse from "src/model/mock-api-responses/product-search-response"
import Payload from "src/model/Payload"
import appState from "../app-state"

export const setProductSearchQuery = createAction("SET_PRODUCT_SEARCH_QUERY", props<Payload<typeof appState.productSearch.query>>())
export const setProductSearchCategory = createAction("SET_PRODUCT_SEARCH_CATEGORY", props<Payload<typeof appState.productSearch.category>>())
export const setProductSearchState = createAction("SET_PRODUCT_SEARCH_STATE", props<Payload<typeof appState.productSearch.state>>())
export const setProductSearchResult = createAction("SET_PRODUCT_SEARCH_RESULTS", props<Payload<typeof productSearchResponse>>())
export const setProductSearchResultImages = createAction("SET_PRODUCT_SEARCH_IMAGES", props<Payload<typeof productSearchImagesResponse>>())