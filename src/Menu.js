import React from "react";
import MainForm from './components/MainForm';

const Menu = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Bienvenido</h2>
                <button onClick={handleLogout}>Salir</button>
            </nav>
            <body>
            <div className="row mb-3 text-center hero">
                <div className="col-md-3 themed-grid-col"></div>
                <div className="col-md-6 themed-grid-col"><MainForm/></div>
                <div className="col-md-3 themed-grid-col"></div>
            </div>
            </body>
        </section>
    )
}
export default Menu;