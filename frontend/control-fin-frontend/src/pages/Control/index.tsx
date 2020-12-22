import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../service/api';


import moment from 'moment';

interface IControl {
  ID: null;
  description: String;
  date: Date;
  value: number;
}

const Control: React.FC = () => {

  const [control, setControl] = useState<IControl[]>([])

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

  return(
    <div className="container">
      <br/>
      <h1>Controle Financeiro</h1>
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
              <tr key={control.ID} className="table-light">
                <td className="text-left"> { control.description } </td>
                <td> { formatDate(control.date) } </td>
                { 
                  control.value >= 0 ? 
                  <td className="text-info"> { formatValue(control.value) } </td> 
                  : <td className="text-danger"> { formatValue(control.value) } </td>
                }
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );
}

export default Control;