import React, { Component } from 'react'

class UzsakymaiList extends Component {

    constructor() {
        super();
        this.state = {
          currentPage: 1,
          ServicesPerPage: 5,
          statusas: '',
          kategorija: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

      handleChange(event) {
        this.setState({statusas: event.target.value});
      }
      handleChange2(event) {
        this.setState({kategorija: event.target.value});
      }
      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render()
    {

        const {data2, filterText} = this.props;
        const { currentPage, ServicesPerPage, statusas, kategorija} = this.state;
        ////////////PUSLAPIAVIMAS IR FILTER/////////////////
        const indexOfLastService = currentPage * ServicesPerPage;
        const indexOfFirstService = indexOfLastService - ServicesPerPage;
        const sliceData = data2. filter( uzsakymas => {
            //Panaikina neatitinkancius ivesto kriterijaus
            return uzsakymas.uzsakymas.toLowerCase().indexOf(filterText) >= 0
        })
        ///////FILTRUOJA PAGAL KATEGORIJOS IR STATUSO SELECT
        const sliceData2 = sliceData. filter (uzsakymas => { 
          return ((!this.state.statusas) || (uzsakymas.statusas == this.state.statusas)) && 
          ((!this.state.kategorija) || (uzsakymas.kategorija == this.state.kategorija));
        })

        const currentData = sliceData2.slice(indexOfFirstService,indexOfLastService);
        

        //PUSLAPIAVIMO LOGIKA
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(sliceData2.length / ServicesPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <button 
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
              </button>
          );
        });
        ////LENTELES PILDYMAS/////
        const uzsakymaiList = currentData
        .map( uzsakymas => {
          return (
            <tr>
            <td>{uzsakymas.uzsakymas} </td>
            <td>{uzsakymas.kategorija} </td>
            <td>{uzsakymas.uzsakovas} </td>
            <td>{uzsakymas.statusas} </td>
            <td>{uzsakymas.kaina} </td>      
            </tr> 
          )
        })
        
        return (
          
          <div className="App">
            <label>Kategorija</label>
            <select value={this.state.kategorija} onChange={this.handleChange2}>
                <option value=""></option>
                <option value="Gruntavimo darbai">Gruntavimo darbai</option>
                <option value="Dažymo darbai">Dažymo darbai</option>
                <option value="Tinkavimo darbai">Tinkavimo darbai</option>
                <option value="Bendri darbai">Bendri darbai</option>
            </select>
            <label>Statusas</label>
           
            <select value={this.state.statusas} onChange={this.handleChange}>
                <option value=""></option>
                <option value="Ivykdytas">Ivykdytas</option>
                <option value="Vykdomas">Vykdomas</option>  
            </select>
            <table>
            <tr>
              <th>Užsakymas</th>
              <th>Kategorija</th>
              <th>Užsakovas</th>
              <th>Statusas</th>
              <th>Kaina</th>
            </tr>
                  {uzsakymaiList}
            </table>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
          
        );
        
    }
}

export default UzsakymaiList;