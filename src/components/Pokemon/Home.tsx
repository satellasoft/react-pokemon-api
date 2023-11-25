import React, { useEffect, useState } from "react"
import { Header } from "../layout/Header/Header"
import { Pokemon } from "../../types/"
import '../../shared/styles/pokemon.css'

export const Home = () => {

    const endpoint = `${process.env.REACT_APP_POKEMON_ENDPOINT}pokemons`
    const token = process.env.REACT_APP_POKEMON_BEARER

    const [data, setData] = useState<Pokemon[] | null>(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        const getAll = async () => {
            try {

                const response = await fetch(endpoint, {
                    method: 'GET',
                    mode: 'cors',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    })
                })

                if (!response.ok)
                    throw new Error('Erro ao buscar dados')

                const jsonData = await response.json()

                setData(jsonData)

            } catch (err: any) {
                setError(err.message)
            }
        }

        getAll()

        console.log(data)
    }, [])

    return (
        <>
            <Header />

            <div className="center-div">
                <div className="pokemon-container">
                    {data && data.map((item: Pokemon) => {
                        return (
                            <div className="pokemon-item">
                                <img src={item.image_url} alt={item.name} />
                                <span className="pokemon-name">{item.name}</span>
                                <span className={`pokemon-type ${item.color.toLowerCase()}`}>{item.type}</span>
                                <span className="pokemon-level">Level: {item.level}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}