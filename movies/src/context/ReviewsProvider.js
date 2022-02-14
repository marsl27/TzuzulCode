import React from "react"

export const reviewsContext = React.createContext();

export default function ReviewsProvider({children}){

    const [reviews,setReviews] = React.useState([])

    return <reviewsContext.Provider value={{reviews,setReviews}}>
        {children}
    </reviewsContext.Provider>
}