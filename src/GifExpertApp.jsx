import { useState } from "react"
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'One piece']);
    const onAddCategory = () => {
        setCategories([...categories,'Dragon Ball'])
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory setCategories={setCategories}/>
            {/* Lisado de Gifs */}
            <ol>
                { 
                    categories.map( (category,i) => {
                    return <li key={i}>{category}</li>
                    }) 
                }
            </ol>
        </>
    )
}
