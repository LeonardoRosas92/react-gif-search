import { useState } from "react"

function AddCategory( { setCategories } ) {
    const [ inputValue , setInputValue ] = useState('');
    const onInputChange = ( { target } ) => {
        setInputValue(target.value)
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        setCategories(categories => [ inputValue, ...categories ])
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                type=""
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

export default AddCategory