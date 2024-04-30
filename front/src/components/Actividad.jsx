
import "./Actividad.css"

export  const Actividad = ({actividad:{ title, description, realizado }})=>{

return (
    <div className="ActividadContainer">

        <div className="containeruno">
            <h1 className="tituloActividad">
              {title}
            </h1>
        </div>

        <div className="containerdos">

            <div>
            {description}
            </div>
        </div>
 
        <div className="containertres">
            <div>
            {realizado?<h3>Realizado</h3>:<h3>Pendiente</h3>}
            </div>
        </div>
        

    </div>
)
   

}