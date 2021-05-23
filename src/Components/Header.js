import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var firstname = this.props.data.firstname;
      var lastname = this.props.data.lastname;
      var occupation= this.props.data.occupation;
      var company = this.props.data.company;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline"><span className="firstname">{firstname}</span> {lastname}.</h1>
                  <h3><span>{occupation}</span></h3>
                  <h3>{company}.</h3>
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
