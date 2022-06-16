import React, { useRef, useState } from "react";
import { Button, Form as BulmaForm} from 'react-bulma-components'

const { Field, Control, Label, Input} = BulmaForm

const Form = ({handlesubmit}) => {

    const [formValues, setFormValues] = useState({
        name: '',
        unitaryPrice: '',
        size: '',
        description: ''
    })

    const inputFileRef = useRef()

    const handleChange = (e) => {
        const  {name, value} = e.target

        setFormValues({...formValues, [name]: value})
    }

    const _handlesubmit = (e) => {
        e.preventDefault()
        handlesubmit({...formValues, image: inputFileRef.current.files[0]})
        
    }

    return(
        <form onSubmit={_handlesubmit} >
        <Field>
            <Label>
                Name
            </Label>
            <Control>
                <Input 
                    placeholder="Text input"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
            </Control>
        </Field>
        <Field>
            <Label>
                Price Unitary
            </Label>
            <Control>
                <Input 
                    placeholder="Text input"
                    name="unitaryPrice"
                    type="number"
                    value={formValues.unitaryPrice}
                    onChange={handleChange}
                    required
                />
            </Control>
        </Field>
        <Field>
            <Label>
                Size
            </Label>
            <Control>
                <Input 
                    placeholder="Text input"
                    name="size"
                    type="number"
                    value={formValues.size}
                    onChange={handleChange}
                    required
                />
            </Control>
        </Field>
        <Field>
            <Label>
                description
            </Label>
            <Control>
                <Input 
                    placeholder="Text input"
                    name="description"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                />
            </Control>
        </Field>
        <Field>
            <Label>
                Image
            </Label>
            <Control>
               <input type="file" ref={inputFileRef} required/>
            </Control>
        </Field>
        <Button type="submit" color="primary">Save</Button>
        </form>
    )
}
export default Form