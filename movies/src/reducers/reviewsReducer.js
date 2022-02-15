export const reviewsInitialState = {
    reviews:[]
}

export default function ReviewsReducer(state,action){
    let newState;
    switch(action.type){
        case 'addReview':
            const {idMovie,comment} = action
            newState = {reviews:[...state.reviews,{id:state.reviews.length+1,idMovie,comment}]}
            break;
    }

    return newState
}