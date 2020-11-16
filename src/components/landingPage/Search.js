import React, { Component } from 'react'
import '../../scss/search.scss';

export default class Search extends Component {
    render() {
        return (
    <form  className="search">
    <select className="origin"  value="Origin" onChange={()=>{value=this.value}}>
    <option disabled>Origin</option>
    <option >Nyabugogo</option>
    <option >Downtown</option>
    <option >Kacyiru</option>
    <option >Remera</option>
    </select>
    <select className="destination"  value="Destination" onChange={()=>{value=this.value}}>
    <option  disabled>Destination</option>
    <option >Kimironko</option>
    <option >Downtown</option>
    <option >Kacyiru</option>
    <option >Remera</option>
    </select>
    <button className="searchBtn" type="submit" ><i className="fa fa-search"></i> Search</button>
    </form>
        )
    }
}