import React, { useState } from "react"
import { Header } from "../layout/Header/Header"

import { Alert } from "../../util/Alert"
import { Levels, Types, Colors } from "../../util/PokemonUtil"

export const CreatePokemon = () => {

    const [alert, setAlert] = useState(Alert('Preencha corretamente todos os campos', 'info'))

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [level, setLevel] = useState('')
    const [description, setDescription] = useState('')

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }

    const handleLevelChange = (e: any) => {
        setLevel(e.target.value)
    }

    const handleTypeChange = (e: any) => {
        setType(e.target.value)
    }

    const handleColorChange = (e: any) => {
        setColor(e.target.value)
    }

    const handleImageUrlChange = (e: any) => {
        setImageUrl(e.target.value)
    }

    const handleDescriptionChange = (e: any) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e: any) => {

        console.log('Test')

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
                            <select name="level" id="level" className="form-control" onChange={handleLevelChange}>
                                {
                                    Levels.map(item => {
                                        return <option key={item} value={item}>{item}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="mt-3 item">
                            <label htmlFor="type">Type:</label>
                            <select name="type" id="type" className="form-control" onChange={handleTypeChange}>
                                {
                                    Types.map(item => {
                                        return <option key={item} value={item}>{item}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="mt-3 item">
                            <label htmlFor="color">Color:</label>
                            <select name="color" id="color" className="form-control" onChange={handleColorChange}>
                                {
                                    Colors.map(item => {
                                        return <option key={item} value={item}>{item}</option>
                                    })
                                }
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
                        <button type="submit" className="btn btn-success">Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}