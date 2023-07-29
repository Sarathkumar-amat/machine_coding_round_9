import { createContext, useEffect, useReducer } from "react";
import { categories } from "../data/Category";

export const CategoryContext = createContext();

function categoryReducer(state, action)
{
    const {type,payload} = action;
    switch(type){
        case "set_category":
            return {...state,allCategory:payload};
    }

}
export function CategoryProvider({children})
{
    const [categoryData,dispatchCategory]  = useReducer(categoryReducer,{allCategory:[]})
    useEffect(()=>{dispatchCategory({type:"set_category",payload:categories})},[]);


    return (<div>
        <CategoryContext.Provider value={{categoryData,dispatchCategory}}>
            {children}
        </CategoryContext.Provider>
    </div>)
}