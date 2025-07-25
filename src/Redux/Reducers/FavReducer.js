const INITIAL_VALUE = {
    fav: [] 
};

export default function FavReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "CHANGE_FAV": 
            return {
                ...state,
                fav: action.payload
            };
        default:
            return state;
    }
}
