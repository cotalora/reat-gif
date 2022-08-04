import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ({ onNewCategory }) => {
    
    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = (category) => {
        if (categories.find(x => x.toUpperCase() === category.toUpperCase())) return;
        setCategories([category, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={ onAddCategory } />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}
