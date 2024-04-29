import "./LandingPage.css"
import logo from "../assets/corriendo.png"

export  const LandingPage = ()=>{

return (
    <div className="Seccion">
        
        <div className="containerLogo">
            <img src={logo} alt="image-description" className="logolanding" />
            <h3 className="tituloasistente">ASISTENTE</h3>
        </div>
        
        <div className="containerBoton">
            <h1 className="titulolading">SÉ TU MEJOR</h1>
            <button className="botonUnete">
                <p className="pbotonunete">
                    ÚNETE HOY
                </p>
            </button>
        </div>
    </div>
)
   

}