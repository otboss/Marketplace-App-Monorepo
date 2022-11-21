// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import ProductCategories from "src/model/ProductCategories";

export const environment = {
  production: false,
  backend: {
    backendOrigin: window.location.origin,
    endpoints: {
      productSearch: (query: string, category: ProductCategories = ProductCategories.ALL_CATEGORIES, page: number = 1): string => {
        return `/api/Product/search?query=${query}&category=${category}&category=${category}&page=${page}`
      },
      signIn: `/api/Session/signIn`,
      signUp: `/api/Session/signUp`,
      signOut: `/api/Session/signOut`,
      forgotPassword: `/api/Session/forgotPassword`,
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
