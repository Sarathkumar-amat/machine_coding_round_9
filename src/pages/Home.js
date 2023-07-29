import { useContext } from "react"
import { CategoryContext } from "../contexts/CategoryProvider"
import { NavBar } from "../components/NavBar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export function Home()
{
    const {categoryData} = useContext(CategoryContext);
    const navigate = useNavigate();
    return (<div>
       <h1>Categories</h1>
      <div className="category-container"> {categoryData?.allCategory?.map(({category,thumbnail})=>
        <div onClick={()=>navigate(`/singleCategory/${category}`)} className="category-card">
            <img className="category-image" src={thumbnail} alt="category-thumbnail" />
            <div className="cat-name">{category}</div>
        </div>
       )}</div>
    </div>)
}