import React, { Component } from 'react'

class PaslaugosList extends Component {

    constructor() {
        super();
        this.state = {
          currentPage: 1,
          ServicesPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    
    render()
    {

        const {data, filterText} = this.props;
        const { currentPage, ServicesPerPage} = this.state;

        ////////////PUSLAPIAVIMAS IR FILTER/////////////////
        const indexOfLastService = currentPage * ServicesPerPage;
        const indexOfFirstService = indexOfLastService - ServicesPerPage;
        /////SEARCH FUNKCIJA//////
        const sliceData = data.filter( paslauga => {
            //Panaikina neatitinkancius ivesto kriterijaus
            return paslauga.paslauga.toLowerCase().indexOf(filterText) >= 0
        })
        /////SUKARPO PUSLAPIAVIMui
        const currentData = sliceData.slice(indexOfFirstService,indexOfLastService);
        ////PUSLAPIAVIMO LOGIKA
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(sliceData.length / ServicesPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <button 
              key={number}
              id={number}
              onClick={this.handleClick}>
              {number}
            </button>
          );
        });


        ////LENTELES PILDYMAS/////
        const paslaugosList = currentData
        .map( paslauga => {
          return (
            <tr>
            <td>{paslauga.paslauga} </td>
            <td>{paslauga.kaina} </td>  
            </tr> 
          )
        })
        
        //////LENTELES ATVAIZDAVIMAS
        return ( 
          <div className="App">
            <table>
              <tr>
              <th>Paslauga</th>
              <th>Kaina</th>
              </tr>
              {paslaugosList}
            </table>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
          
        );
        
    }
}

export default PaslaugosList;