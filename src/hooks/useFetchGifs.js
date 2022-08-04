import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoaging, setIsLoaging] = useState(true);
    
    useEffect(() => {
        getGifs(category).then(res => setImages(res));
        setIsLoaging(false);
    }, [category])

    return {
        images: images,
        isLoaging: isLoaging
    }
}
