export const RouteEntries = Object.freeze({
    account: "account",
    cart: "cart",
    home: "",
    productDetails: "product-details",
    search: "search",
    signIn: "sign-in",
})

export const RouteMapper = Object.freeze({
    home: RouteEntries.home,
    account: [RouteEntries.home, RouteEntries.account].join("/"),
    cart: [RouteEntries.home, RouteEntries.cart].join("/"),
    productDetails: [RouteEntries.home, RouteEntries.search, RouteEntries.productDetails].join("/"),
    search: [RouteEntries.home, RouteEntries.search].join("/"),
    signIn: RouteEntries.signIn,
})