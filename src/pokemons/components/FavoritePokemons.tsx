'use client';

import { useEffect, useRef, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
// import { createSelector } from "@reduxjs/toolkit";

// import { RootState, useAppSelector } from "@/store";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { SimplePokemon } from "../interfaces/simple-pokemon";


// const buildFavoritePokemon = createSelector(
//   [(state: RootState) => state.pokemons.favorites],
//   (pokemons: Record<string, SimplePokemon>) => Object.values(pokemons)
// )


export const FavoritePokemons = () => {

  // const favoritePokemons = useAppSelector(buildFavoritePokemon);
  // const [pokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   // console.log({ favoritePokemons });
  //   // setPokemons( favoritePokemons );
  // }, [favoritePokemons])

  const favoritePokemons = useAppSelector(state => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(Object.values(favoritePokemons));
  const isLoad = useRef<boolean>(false);

  useEffect(() => {
    if (isLoad.current === false && Object.values(favoritePokemons).length !== 0) {
      setPokemons(Object.values(favoritePokemons));
      isLoad.current = true;
    }
  }, [favoritePokemons]);



  return (
    <>
      {/* <PokemonGrid pokemons={ favoritePokemons } /> */}
      {
        pokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={pokemons} />)
      }
    </>
  )
}



export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}