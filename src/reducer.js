export const reducer = (state, action) => {
    switch (action.type) {
        case "change-theme":
            return {
                ...state,
                theme: state.theme === "danger" ? "primary" : "danger",
            };
        case "set-hotels":
            return {
                ...state, hotels: action.hotels
            };
        case "set-loading":
            return {
                ...state, loading: action.loading
            };
        case "login":
            return {
                ...state, isAuthenticated: true
            };
        case "logout":
            return {
                ...state, isAuthenticated: false
            };

        default:
            throw new Error("error action:" + action.type);
    }
};

export const initialState = {
    hotels: [],
    loading: true,
    isAuthenticated: false,
    theme: "danger",
};
