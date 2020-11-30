    import React from 'react';
    import './App.css';

    const request = require('request-promise');

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputField: "Value", heroe: null
            };
            
                    this.updateInputValue = this.updateInputValue.bind(this);
          

                    }
        handlerBtn = () => {

            var options = {
                method: 'GET',
                uri: `https://www.superheroapi.com/api.php/10223922732878088/${this.state.inputField}` ,
                json: true


            };
      
            var response = request(options).then(heroe => {

                console.log(heroe.name);
                console.log(heroe.powerstats);
                this.setState({
                         
                    heroe: heroe
                })
                console.log(this.state);
            });
            
           
            }

             numberList = () => {
                return(<ul><li>{this.state.heroe.powerstats.combat}</li>
                <li>{this.state.inputField}</li></ul>)
                   
                
                    
                }
        updateInputValue(evt) {

            this.setState ({inputField: evt.target.value});

        }
        

render() {
   
    return (

       
        <div>

            <button onClick={this.handlerBtn}> Probar Api </button>
            <input type="text" onChange={ this.updateInputValue} onKeyPress={this.handlerPress} placeholder='codigo de superheroe' />
            <h1>Elige un codigo del 1 al 731 y adivina tu heroe</h1>
            {this.state.heroe &&   <div> 
                <h1>Nombre: {this.state.heroe.name}</h1>
                <ul>
                    <li>Combat:{this.state.heroe.powerstats.combat}</li>
                    <li>Durability:{this.state.heroe.powerstats.durability}</li>
                    <li>Intelligence:{this.state.heroe.powerstats.intelligence}</li>
                    <li>Power:{this.state.heroe.powerstats.power}</li>
                    <li>Speed:{this.state.heroe.powerstats.speed}</li>
                    <li>Strength:{this.state.heroe.powerstats.strength}</li>
                    </ul>
                    </div>  }
            
            
            
        </div>
       
        
    );
}

}
 
  
    

    export default App;
