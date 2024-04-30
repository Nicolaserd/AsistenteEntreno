
import "./Actividad.css"

export  const Actividad = ({actividad:{ title, description, realizado }})=>{
    const handleClick = ()=>{

        onCancelar(title);
        
      };
return (
    <div className="ActividadContainer">

        <div className="containeruno">
            <h1 className="tituloActividad">
              {title}
            </h1>
        </div>

        <div className="containerdos">

            <p className="descripcionActividad">
            {description}
            </p>
        </div>
 
        <div className="containertres">
            <a onClick={handleClick} className="butonactividad">
            {realizado?<h3 className="RealizadoActividad">Realizado</h3>:<h3 className="RealizadoPendiente">Pendiente</h3>}
            </a>
        </div>
        

    </div>
)
   

}