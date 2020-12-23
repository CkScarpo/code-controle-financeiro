import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import api from '../../service/api';

import moment from 'moment';

import './index.css';

interface IControl {
  id: number;
  description: String;
  date: Date;
  value: number;
}

const Control: React.FC = () => {

  const [control, setControl] = useState<IControl[]>([])
  const history = useHistory()

  useEffect(() => {
    loadControl()
  }, []) 

  async function loadControl() {
    
    const response = await api.get('/control')
    console.log(response)
    setControl(response.data)

  }

  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY")
  }

  function formatValue(value: Number) {
    return "R$ " + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
  }

  function newControl() {
    history.push('/control_cadastro')
  }

  function editControl(id: number) {
    history.push(`/control_cadastro/${id}`)
  }
 
  return(
    <div className="container">
      <br/>
      <div className="control-header">
        <h1>Controle Financeiro</h1>
        <Button variant="info" size="lg" onClick={newControl}> Novo </Button>
      </div>
      <br/>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr className="table-dark">  
            <th className="text-dark">Descrição</th>
            <th className="text-dark">Vencimento</th>
            <th className="text-dark">Valor</th>
            <th className="text-dark">Ações</th>
          </tr>
        </thead>
        <tbody>

          {
            control.map(control => (
              <tr key={control.id} className="table-light">
                <td className="text-left"> { control.description } </td>
                <td> { formatDate(control.date) } </td>
                { 
                  control.value >= 0 ? 
                  <td className="text-info"> { formatValue(control.value) } </td> :
                  <td className="text-danger"> { formatValue(control.value) } </td>
                }
                <td>
                  <Button size="sm" onClick={() => editControl(control.id)}> Editar </Button> {' '}
                  <Button size="sm" variant="danger"> Excluir </Button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );
}

export default Control;