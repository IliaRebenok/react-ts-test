import React, { useState } from 'react'

const AddToList = () => {

    const [input,setInput] = useState({
        name: '',
        amount: '',
        "picture URL": '',
        description: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='addToList'>
            <input
                type="text"
                placeholder='name'
                className='addToList-input'
                value={input.name}
                onChange={handleChange}
                name='name'
            />
            <input
                type="number"
                min={0}
                placeholder='amount'
                className='addToList-input'
                value={input.amount}
                onChange={handleChange}
                name='amount'
            />
            <input
                type="url"
                placeholder='picture URL'
                className='addToList-input'
                value={input['picture URL']}
                onChange={handleChange}
                name='picture URL'
            />
            <textarea
                style={{resize: 'vertical'}}
                placeholder='description'
                className='addToList-input'
                value={input.description}
                onChange={handleChange}
                name='description'
            />

        </div>
    )
}

export default AddToList