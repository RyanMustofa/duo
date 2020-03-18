const globalState = {
    angka: 5,
    visible: false
};
export const rootReducer = (state = globalState, action) => {
    if (action.type === "TAMBAH_ANGKA") {
            return {
                ...state,
                angka: 20
            };
    }
    if (action.type === "KURANG_ANGKA") {
            return {
                ...state,
                angka: 5
            };
    }
    if(action.type === 'TRUE_VISIBLE'){
        return{
            ...state,
            visible: action.value
        }
    }
    if(action.type === 'FALSE_VISIBLE'){
        return{
            ...state,
            visible: action.value
        }
    }
    return state;
};
