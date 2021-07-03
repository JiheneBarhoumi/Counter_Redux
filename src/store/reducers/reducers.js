
const initialState = {
    count: 1,
    title: "My counter"
}

const counterReducer = (state = initialState, action) => {

    // console.log(state)

    switch (action.type) {

        case 'INCREMENT':

            return {
                ...state,
                count: state.count + action.payload
            }

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }

        default:
            return state;
    }

}

export default counterReducer;
