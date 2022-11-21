export const RouteEntries = Object.freeze({
    account: "account",
    search: "search",
    cart: "cart",
    home: "",
    signIn: "sign-in",
})

export const RouteMapper = Object.freeze({
    home: RouteEntries.home,
    account: [RouteEntries.home, RouteEntries.account].join("/"),
    cart: [RouteEntries.home, RouteEntries.cart].join("/"),
    search: [RouteEntries.home, RouteEntries.search].join("/"),
    signIn: RouteEntries.signIn,
})