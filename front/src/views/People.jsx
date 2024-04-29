import "./People.css"
import logo from "../assets/corriendo.png"
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";

const personasAtletas = [
    {
      title: "Juan Pérez",
      description: "Campeón nacional de maratón",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "María García",
      description: "Atleta olímpica de salto de altura",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAywMBIgACEQEDEQH/xAAcAAADAAIDAQAAAAAAAAAAAAAAAQIFBgMEBwj/xAA4EAABAwIEAwUGBQMFAAAAAAABAAIDBBEFBhIhEzFBByJRYYEUQnGRobEjMlLB0RUk4TNEgsLw/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EACQRAQACAgEEAgIDAAAAAAAAAAABAgMRBAUSITEiURNBFDKh/9oADAMBAAIRAxEAPwD0EBcgSsqCACpJUAgAhMBOyBAJ2RZUAgghMBUUAIJISsrISFrFArKUzIwXu4C3NRHKyZuqJ7Xt8Wm6BpJoQSUiqKRQQQkrslZBNlJV2UlBKE0kAE0IQcyYCSsIABUEgqCAsqHJCaBWRZUhBNkKlN0CK0LPWdX4fUf0jA28XEnCz3WuIvIeLlueKVQo6CoqSQ0RRl9/gF5T2fQOxPNk1XVWcQOMwHqSVXkv2xtbip3S6dFlnNOLzCSpFY1z2uDpJJnNab8ri+48lUuF5pyVVMrGzsfTuNnOjuGu8nt6he6wOiZFZ4F/NapnWehmwuro5qylhmfGeG2SRrTfoqPyW9tEY6zuNOTLGP02YMNbVQgskB0yxHmx37jwWXXi+SMXdg+aoKdztNJXERuHQOO7T8z9V7QFprO2S1dSEiqSXp5SkqSQJSQrU2QRZJWQkglNCEHMqCkKwgAqSQEFhNIJoGEimhBKCgpEoNU7Sqz2TKtT3tJkLYx53O/0BXnvZ5TVNdic0EM2i9Nt3y25uLC43t8FsfbTUkYRSwNtYzBzt+Q3/wDfNal2d4g+hzJDKS20sZiaxxt4OHqbFUZfTTh9vWsvYNV4e50layKMk6bRXAcPhqO/munimW6vFonmiqmQudI7juMbSTubbkE28hZZKtrp5omgvqYHvcHRyQxteLeHe2WNw+sqqR1aXT1Mmm8kk84YGg9GgNPP/Czbj219svHs0RnDMUMLXfi0kwuR5G4PyXvuG1AqqKGYHVrYHX9F895oqH1WO1NU9we8y2cW/lPiPRet9mFZNNlyKGclwicWxk/p5j+PRa8c+GHLHluSSaRVqkJJoQShNJAipVqSEEoTshByhUFIVBSGFRCQTUBhMJBCkBCRuqQoEhJwVrjqH8OF7vAIPHu0fGo67GpKJrWuhpBpfq951+fotCkcWSEwPcx4Otsng4Hb6fdZHOLpW4/iUZPfdKXSfG/I/BY2nexsTePdwsZLeJty+apn7aI9PU8q55lgw2EY1SGeGRu0rG3BPXZYvPeehWUnsuEwcCHne1rlZbs7wZ02VGtroi3iEzxEj3SVj8x5RF4nRtOh8tnOtsNj+9lli0RdrmPj4aE1pgw+XXZ7h3hc73PP+V6P2NYnNU0tVQynUyndqjd1APT53Xmddxo3Ohla4GIll3CxcF6J2PzMjrqmANA40Wpp8S02P3C1Vnyx3jw9WCEDkhXKCQmkgSCmUkCSTQgkhFkykg5AmpCpSKCoKAmEFIvukmgd0XQkgd99lgMYxqWMuioYI5Ty1vdtfyA5/NZetl9npJpRza02+PRanYNsOYK4vVudfj9tMc+ZdPp/Frl3a8biHmubaGpqMXlr3x63y7SBjLWI6qsBypU1BhlqoxHG5wO/6V6FVxNFQ2UtBDu6/wDlcmwa3SNhsuVfq2WccRHv7dSOFj7u7/GZocTp6WnZTvpiI2t0gsN7D4Fc9Vi9BJHpDZDblZtlg2u2Q/8ALus1ep54jUymeJjmdvP84YHU1FfUVEAHAcbt8bHp910MrMxCDEGiCSWF7SSHt2AC3+qDSCDuPArhp4Gtdpa0Bz3AbDxWynU8n45ifbzPDx93cyNDmHEqJ0cVextVGffHdeB4+BW4RSMmiZLG7Ux7Q5p8QVpbmaqqUgDSxgYL+JFz9LLYcszcXB4rn8jnM+FiV0elcy+W047zv9uf1HjUpEXpGmVSQhdtyQkhCASTQoCKSZSQUE1IKakWChSFSBgp3UpoKQkCmgxeYpRHRMZ1kkA9Bv8AssFLbRfwXfxz+9xzDqFk4bw2ummjB3c07D0uFm56ekNMWezR2A91gFl871Dh25Oeb79O1w88YsURpq8jRMNBFiAFBhe3e1wuKorI6aobETcm9t+gQMUYR49F85bHkrOtOtE79OwAQNh81LmPdsN1DKsu2G1+q5mzgDnfrcrxMWhPl1X0TgdbyL9AopIv74uO7I2ktHiT1XJUV4YNyujSVfHqyIXEyy2YxgPqT9h6rRjpkvEvNpiI8u68Atke333k3+n2AXayLUGSPEoHbmOo1geAcLf9Su3Jgz4qUEytBDdmgLCZIqWsx/EqYka3NF2+bT/Dl2ul4cmLN3XhzudeuTFqG8nmhIckL6ZwQhCEAkmkgEkIUAVBSmpFJqU0DCaSEDCaSEGMxaQR1tMeFqLo3tL9QFrkczz8dgCVzNkhkdFF7REXAWLBYEn53XQzLE3XQ1DmB+iQsNxewcP5AXdpaOHhscGMA5izbWWDPOr606XH844aZm6i9gxJlQyUOikY4Bl76DcH5H9lg4pjxXgE7kOC9Ukjgds+NlvgpFPRgXDGejQubk4/dO4b6cntjTSaITTadEbyfJqy0eF10zQGxWDjuXkDlyHzWyB9PGO6Rb4LrS41Cx5jpWPqJv0RC/zPIepVNenU3u0ptzLeqw1jFMpYk6IzR1sV2sH4Wk2J697/AAsbkyiqIsxOFZEY3xROO/Lcjkeq3xk9VUs/uI2QtPuDvEevJRHh8bJNbLk2tcnotcYq1/qr/NaY+Sq+e0DjfaywOVsBpW1b8dvKaqYuZbX3A0Gw7vXl1Xex2QU1HIA650ru4JFwMIpIyLHhAn13/dbeLX5TMsPLtqIiHeuhJC3ueaEkIGkhCgCEJKQ07pIQUCmpCrogEIQEDQhCDq4nTGropImf6mzoyeWoG4WElxOeABsMFQ53vN4Tjb6LZUrnxKpyYYvO5XYs1scTDUXZkgZfjPALTZweQ2x6hY2rz3hkZc2GrpnSDl+KAPnyXH2sZfidgz8UwykP9QEzOI+EHU9p2Nx1PLfmtKyFgeMR5xwd+M4TiDKF9QGvfUUj2xnY2uSLc7KqONELZ5U/pvmFVVPi8nExfHKdsY/2lPLYf8nDf7LaYayhhiDKOanEQ5NiLQPovLcao8wVXtDJqSppZIq57OI+F0TZY9wLd3c9dua7GCdm2PYnxjYU8M4a6Ocucy1r7+O9x8bdFM8aPsjkz9PQJ8WibycfRY+ozEyFp7zh036JUfZO6HAqqiq8VmqamWRr4po3ujMVuYub7EeSwmPdmrcu8PEqc1NbRxPDquOWU6iwcnXBHJeP40fb1/Kn6bBFfHIIwxjzDI8a5SO7pB3sfotnFhsBYDkF1qAQNo4BStDYAwaAOg6LnutOPHFI1DPlyzknyZKLqbourFSk1N0XQUldK6V1Aq6LqU0FJpBVZSEqCSoIEmgoCBpKkIIKFRSQctHRvlqONJpdEG9xttw7q7z6dFlqeMRwMjJc/Q0NL5N3Ot1PmuCib+Aw9DuCV3FAbTbYI1JEdFxl2nmgu+6mVrZGOY9oc1wsQRsUNItdUgwNfA2Ce0YDWEbADkV11l8RiD2aiNxyWH2QNCSEDQkhAIQhA01IVIKarQhSBMJoQIphCEDQEIQIqUIQZilFmNA6ALsoQoEuGy4i0F+6EIOQAbDyTQhBwVABYbrAO5lCECQhCAQhCAQhCCgmhCD/2Q=="
    },
    {
      title: "Carlos Martínez",
      description: "Corredor de medio fondo",
      image: "data:image/jpeg;base64,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"
    },
    // Puedes añadir más personas aquí según sea necesario
  ];

export  const People = ()=>{

return (
    <div className="SeccionPeople">
        <Navbar/>
        
        <div className="container_h1_logo">

        
        <h1 className="personastitulo">Personas</h1>

        </div>
        {personasAtletas.length===0?
        <h1 className="titulonohaypersonas">Aún no hay personas </h1>:null}
        <section>
            <div className="container__card">
                {personasAtletas?.map((perosna) => {
                    return <Card key={perosna.title} perosna={perosna} />
                })}
            </div>
        </section>
        
    </div>
)
   

}