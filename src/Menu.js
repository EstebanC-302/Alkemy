import React  from 'react'; 
import Search  from './Search'
import './Menu.css'


function Menu(props) {
    return (
        <div className= "container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>

                <div className="search">
                    <Search/>
                </div>

                <div className="actions">
                    <button class="button btn-blue">Añadir Superheroes</button>
                </div>
            </div>
        </div>    
    );
  }

  
export default Menu;
