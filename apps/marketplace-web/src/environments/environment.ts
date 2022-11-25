// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import ProductCategories from "src/model/ProductCategories";

export const environment = {
  production: false,
  useMockAPI: true,
  backend: {
    backendOrigin: "https://localhost:8080",
    endpoints: {
      productSearch: (queryParams?: {query: string, category: ProductCategories, page: number}): string => {
        if(queryParams != null)
          return `/api/Product/search?query=${encodeURIComponent(queryParams.query.trim().replace(/ /g, '+'))}&category=${encodeURIComponent(queryParams.category.trim().replace(/ /g, '+'))}&page=${queryParams.page}`
        return "/api/Product/search"
          
      },
      productGetImages: () => "/api/Product/images",
      // productGetImages: (queryParams: {productIds: Array<string>}): string => {
      //   if(queryParams != null)
      //     return `/api/Product/images?productId=${queryParams.productIds}}`
      //   throw new Error("parameter not provided")
      // },
      // productGetDisplayImages: (queryParams: {productId: string}): string => {
      //   if(queryParams != null)
      //     return `/api/Product/images?productId=${queryParams.productId}}`
      //   throw new Error("parameter not provided")
      // },
      signIn: () =>`/api/Session/signIn`,
      signUp: () =>`/api/Session/signUp`,
      signOut: () =>`/api/Session/signOut`,
      forgotPassword: () =>`/api/Session/forgotPassword`,
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
