import React, { useEffect, useState } from "react"
import { Header } from "../layout/Header/Header"

export const Home = () => {

    const endpoint = `${process.env.REACT_APP_POKEMON_ENDPOINT}pokemons`
    const token = process.env.REACT_APP_POKEMON_BEARER

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        const getAll = async () => {
            try {

                const response = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'User-Agent': 'Seu User Agent'
                    }
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

    if (error)
        return <div>Ocorreu um erro {error}</div>

    return (
        <>
            <Header />

            <div id="center-div">

            </div>
        </>
    )
}