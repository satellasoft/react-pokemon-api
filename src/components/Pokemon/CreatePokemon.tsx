import React, { useState } from "react"
import { Header } from "../layout/Header/Header"

import { Alert } from "../../util/Alert"

export const CreatePokemon = () => {

    const [alert, setAlert] = useState(Alert('Preencha corretamente todos os campos', 'info'))

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [level, setLevel] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
            <Header />
            <div className="center-div">
                <h1>New Pokemon</h1>

                <form id="frm-create">

                </form>
            </div>
        </>
    )
}