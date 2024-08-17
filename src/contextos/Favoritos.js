import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    const adicionarFavorito = (novoItem) => {
        const favoritoRepetido = favorito.some((item => item.id === novoItem.id))

        if (!favoritoRepetido) {
            return setFavorito([...favorito, novoItem])
        }

        if (favoritoRepetido) {
            return setFavorito(favorito.filter(item => item.id != novoItem.id))
        }

    }


    return {
        favorito,
        adicionarFavorito
    }
}