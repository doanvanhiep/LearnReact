const initialState = {
    items: []
}

const ADD_TODO1 = "ADD_TODO1";

export const addTodo1 = (text) => (
    {
        type: ADD_TODO1,
        payload: text
    }
);

const reducer1 = (state = initialState, action) => {
   console.log(action);
    switch (action.type) {
        case "ADD_TODO1":
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
};

export default reducer1