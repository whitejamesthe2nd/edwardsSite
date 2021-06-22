export const COMPLETION = "COMPLETION";
export const RELOAD = "RELOAD";

//!ACTIONS
export const completion = (data) => {
    return {
        type: COMPLETION,
        data
    }
}
export const reload = (data) => {
    return {
        type: RELOAD,
    }
}

//! THUNKS
export const createCompletion = (data) => {

    return async dispatch => {

        if (data) {
            console.log(data)
           dispatch(completion(data))
        }
        return data;
    };
};
