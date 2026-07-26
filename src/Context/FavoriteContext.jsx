import React, {useState, useEffect, useContext, createContext} from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({children}){
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("Lumiere Lounge");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("Lumiere Lounge", JSON.stringify(favorites));
    },[favorites])

    const toggleFavorite = (movie) => {
        setFavorites((prev) => {
            const exists = prev.some((item) => movie.id === item.id)
            if(exists){
                return prev.filter((item) => movie.id !== item.id)
            }else{
                return [...prev, movie]
            }
        })
    }

    const isFavorite = (movie) => {
        return favorites.some((item) => movie.id === item.id)
    }

    return(
        <FavoriteContext.Provider value={{favorites, isFavorite, toggleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavorite = () => useContext(FavoriteContext)
