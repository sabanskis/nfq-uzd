import React, { Component } from 'react'

class Search extends Component {
    
    filterUpdate(){
        const val = this.myValue.value.toLowerCase()
        this.props.filterUpdate(val)
    }
    
    render(){
        return (
            <header>
                <center>  
                    <form class="searchbox_1" action="">
                        <input type="text" class="search_1" placeholder="Ieškoti"
                        ref={ (value) => {this.myValue = value} }
                        onChange={this.filterUpdate.bind(this)} />
                    </form>
                </center>
            </header>
        )
    }
}

export default Search;