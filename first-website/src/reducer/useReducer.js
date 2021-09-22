export const initialState = null;
export const reducer = (state,action) => {
    if(action.type === "STUDENT")
    {
       return action.payload;
    }
    else if(action.type === "SEARCH")
    {
       return action.payload;
    }
    return state;
};