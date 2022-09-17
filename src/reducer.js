export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQBgTww4ObmsT14R23jpVrB1rPcBgue-mGlyGH-Mn6YwXKIAS1lx064HvyEhPSh_K2aNhWSW5y4U7FZnSD0VC-B4oGDHC6urmLv69TPlFqOCKdP_2d_m24670S3Bv0ooTngsroghoTBy6WXcu4mlrKDS6fh6-n3TnJ7DBOlIG89y2BZXPRwghSslF3BgNQg4htUy3Na_vT6SAj_-74QD'
};

const reducer = (state, action)   => { //state of datalayer and action
console.log(action);

//Action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
} 

export default reducer;