import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var firstname = this.props.data.firstname;
      var lastname = this.props.data.lastname;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var state= this.props.data.address.state;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm <span className="firstname">{firstname}</span> {lastname}.</h1>
            <h3>I'm a {state} based <span>{occupation}</span>, currently living in {city}, {state}. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
