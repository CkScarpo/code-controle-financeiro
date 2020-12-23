import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import api from '../../../service/api';


import './index.css';

interface IControl {
  description: String;
  date: Date;
  value: number;
}

const ControlForm: React.FC = () => {

    const history = useHistory()
    const params = useParams()
    const [model, setModel] = useState<IControl>({
        description: '',
        date: new Date(),
        value: Number()
    })

    useEffect (() => {}, [])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setModel({
            ...model,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const response = await api.post('/control', model) 

        console.log(response)

    }

    function back() {
        history.goBack()
    }
    
    function formatValue(value: Number) {
        return "R$ " + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }      

    return(
        <div className="container">
        <br/>
        <div className="control-header">
            <h3>Novo lançamento</h3>
            <Button variant="info" size="lg" onClick={back}> Voltar </Button>
        </div>
        <br/>
        <div className="container">
            <Form onSubmit={onSubmit}>  
                <Form.Group>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="description" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => 
                        updatedModel(e)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Vencimento</Form.Label>
                    <Form.Control 
                        type="date" 
                        name="date"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => 
                            updatedModel(e)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Valor</Form.Label>
                    <Form.Control 
                        type="Number"
                        name="value" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => 
                            updatedModel(e)}     
                    />
                </Form.Group>
                <Button variant="info" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>  
        </div>
    );
}

export default ControlForm;