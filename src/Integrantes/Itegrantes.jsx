import '../Home/Home.css';

import { Footer } from '../Footer/footer';

export function Integrantes(){

    let integrantes = [
        {
            nombre:"Israel Romero",
            instrumento:"Acordeonero",
            edad:"67",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Ismael.jpg?alt=media&token=8d6a1a4d-41db-44c9-a263-7f5d7347240a"
        },
        {
            nombre:"Alejandro Palacio",
            instrumento:"Vocalista",
            edad:"37",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Alejandro.jpg?alt=media&token=daf85017-4703-484f-affc-0d09485f16ca"
        },
        {
            nombre:"Jean Carlos Centeno",
            instrumento:"Vocalista",
            edad:"45",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/jean_carlos_centeno.jpg?alt=media&token=0425f3a0-eb69-49d6-befd-98605d459e5c"
        },
        {
            nombre:"Jorge Celedón",
            instrumento:"Vocalista",
            edad:"54",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/jorge-celedon.jpg?alt=media&token=944a950b-82dc-45be-8dc6-4c5fa7c8c1c3"
        },
    ]

    return(
      
        <>
            <h1 className="title">Nuestros Integrantes</h1>
            <div className="row row-cols-1 row-cols-md-4 g-1 mt-3 border-0">
                {
                    integrantes.map(function(integrante){
                        return(
                            <>
                                <div className="col mt-3 p-5">
                                    <div className="card h-100 ">
                                        <h2 className="text-center fw-bold">{integrante.nombre}</h2>
                                        <img src={integrante.fotografia} alt="foto" className="img-fluid-w-100 h-100"/>
                                        <br/>
                                        <h4 className="text-center">Rol: {integrante.instrumento}</h4>
                                        <h6 className="text-center">Edad: {integrante.edad} años</h6>
                                    </div>
                                </div>
                                
                            </>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </>
    )
}