import React, { useState } from "react"
import { Header } from "../layout/Header/Header"

import { Alert } from "../../util/Alert"
import { Levels, Types, Colors } from "../../util/PokemonUtil"

const endpoint = `${process.env.REACT_APP_POKEMON_ENDPOINT}pokemons`
const token = process.env.REACT_APP_POKEMON_BEARER

export const CreatePokemon = () => {

    const [alert, setAlert] = useState(Alert('Preencha corretamente todos os campos', 'info'))

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [level, setLevel] = useState(1)
    const [description, setDescription] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [buttonText, setButtonText] = useState('Create')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLevel(parseInt(e.target.value))
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value)
    }

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value)
    }

    const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(e.target.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const resetForm = () => {
        setName('')
        setColor('')
        setType('')
        setLevel(1)
        setImageUrl('')
        setDescription('')
        setButtonText('Create')
        setButtonDisabled(false)
    }

    const handleSubmit = (e: any) => {

        const submit = async () => {
            try {
                setButtonText('Processing...')
                setButtonDisabled(true)

                const requestBody = {
                    name: name,
                    type: type,
                    color: color,
                    image_url: imageUrl,
                    level: level,
                    description: description
                }

                const response = await fetch(endpoint, {
                    method: 'POST',
                    mode: 'cors',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(requestBody)
                })

                if (!response.ok)
                    return setAlert(Alert('ERROR: Pokemon not created', 'danger'))

                await response.json()

                setAlert(Alert('Pokemon created', 'success'))
                resetForm()

            } catch (err: any) {
                setAlert(Alert(err.message, 'danger'))
            }
        }

        submit()

        e.preventDefault()
    }

    return (
        <>
            <Header />
            <div className="center-middle-div">
                <h1>New Pokemon</h1>

                <form id="frm-create" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: {name}</label>
                        <input type="text" name="name" id="name" className="form-control" value={name} onChange={handleNameChange} />
                    </div>

                    <div className="row-items">
                        <div className="mt-3 item">
                            <label htmlFor="level">Level:</label>
                            <select name="level" id="level" className="form-control" value={level} onChange={handleLevelChange}>
                                <option value="">Select</option>
                                {Levels.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>

                        <div className="mt-3 item">
                            <label htmlFor="type">Type:</label>
                            <select name="type" id="type" className="form-control" value={type} onChange={handleTypeChange}>
                                <option value="">Select</option>
                                {Types.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>

                        <div className="mt-3 item">
                            <label htmlFor="color">Color:</label>
                            <select name="color" id="color" className="form-control" value={color} onChange={handleColorChange}>
                                <option value="">Select</option>
                                {Colors.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="image">Image URL:</label>
                        <input type="text" name="image" id="image" className="form-control" value={imageUrl} onChange={handleImageUrlChange} />
                    </div>

                    <div className="mt-3">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" className="form-control" value={description} onChange={handleDescriptionChange} />
                    </div>

                    <div className="mt-3">
                        {alert}
                    </div>

                    <div className="mt-3 text-end">
                        <button type="submit" className="btn btn-success" disabled={buttonDisabled}>{buttonText}</button>
                    </div>
                </form>
            </div>
        </>
    )
}