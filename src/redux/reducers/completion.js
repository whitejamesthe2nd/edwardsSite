import {COMPLETION} from '../actions/CompletionActions'

export const completion = (state = {}, action) => {
    switch (action.type) {
        case COMPLETION:
            return action.completion;
        // case CREATE_SKILL:
        //     return action.skill;
        // case REMOVE_SKILL:
        //     return {}
        default:
            return state
    }
}
