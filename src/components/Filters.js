import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles.css'
const Filters = () => {
    return (
        <div className='filters'>
           <span className='title'>Filter Products</span>
           <span>
            <Form.Check inline label="Ascending" name="group1" type="radio" id={`inline-1`} />
           </span>
           <span>
                <Form.Check inline label="Descending" name="group1" type="radio" id={`inline-2`} />
           </span>
           <span>
                <Form.Check inline label="Fast Delivery Only" name="group1" type="Checkbox" id={`inline-3`} />
           </span>
           <Button variant="light">Clear Filters</Button>
        </div>
    )
}

export default Filters