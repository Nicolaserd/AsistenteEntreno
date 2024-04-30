
import logo from "../assets/corriendo.png"
import "./Actividades.css"
import { Actividad } from "../components/Actividad.jsx";
import Navbar from "../components/Navbar.jsx";

const actividades = [
    {
      title: "Lunes: Correr 5km a un ritmo cómodo",
      description: "Aproximadamente 70-75% de tu esfuerzo máximo.",
      realizado: true
    },
    {
      title: "Martes: Descanso o cross-training ligero",
      description: "30 minutos de natación o ciclismo suave.",
      realizado: true
    },
    {
      title: "Miércoles: Correr 6km con intervalos",
      description: "Incluyendo 4 intervalos de 400 metros a ritmo rápido (aprox. 85-90% de tu esfuerzo máximo) con 200 metros de trote para recuperarte entre cada intervalo.",
      realizado: false
    },
    {
      title: "Jueves: Descanso o cross-training ligero",
      description: "30 minutos de natación o ciclismo suave.",
      realizado: false
    },
    {
      title: "Viernes: Correr 7km a un ritmo moderado",
      description: "Aproximadamente 75-80% de tu esfuerzo máximo.",
      realizado: false
    },
    {
      title: "Sábado: Descanso o cross-training ligero",
      description: "",
      realizado: false
    },
    {
      title: "Domingo: Correr 5-6km a un ritmo fácil",
      description: "Aproximadamente 60-65% de tu esfuerzo máximo.",
      realizado: false
    }
  ];

export  const Actividades = ()=>{

return (
    <div className="SeccionActividad">

      <Navbar/>

        <div className="containerLogoActividad">
            <img src={logo} alt="image-description" className="logoActividades" />
            <h3 className="tituloasistenteActividades">ASISTENTE</h3>
        </div>

        
        {actividades.length===0?
        <h1 className="titulonohayactividades">Aún no hay Actividades </h1>:null}
        <section>
            <div className="tituloSemana">
                <h2 className="tituloSemanainner">Semana 1</h2>
            </div>
            <div className="container__Actividad">
                {actividades?.map((actividad) => {
                    return <Actividad key={actividad.title} actividad={actividad} />
                })}
            </div>
        </section>
        
        

    </div>
)
   

}