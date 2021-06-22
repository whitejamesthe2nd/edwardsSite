export const COMPLETION = "COMPLETION";

//!ACTIONS
export const completion = (completion) => {
    return {
        type: COMPLETION,
        completion
    }
}


//! THUNKS
// export const createCompletion = () => {

//     return async dispatch => {
//         const res = await fetch(`/api/skills/`);

//         if (res.ok) {
//             const data = await res.json();
//             console.log(data)
//             dispatch(loadSkills(data))
//         }
//         return res;
//     };
// };
