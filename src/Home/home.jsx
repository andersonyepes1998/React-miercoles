
import './Home.css'

import { Footer } from '../Footer/footer';

export function Home(){

    let Conciertos = [
        {
            ciudad:"Bogota - Colombia",
            nombre: "Concierto por la vida",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Concierto1.jpg?alt=media&token=4f1ae2b9-30b4-49ca-a2a8-2ecb3c2ade80",
            fecha: 2012
        },
        {
            ciudad:"Cali - Valle del Cauca",
            nombre: "Concierto Riopaila",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Concierto2.jpg?alt=media&token=6061e395-4f8e-43ff-9218-e55858270de0",
            fecha: 2013
        },
        {
            ciudad:"Pereira - Risaralda",
            nombre: "Concierto del Café",
            imagen: "https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/Concierto3.jpg?alt=media&token=f9d68fcd-9c2b-40bc-b5dd-047fd59355a9",
            fecha: 2016
        }
    ]

    return(
        <>
        
            <img src="https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/banner.jpg?alt=media&token=96fec05c-2e53-469b-8932-658e1fcb5666" alt="banner" className="w-100 img-fluid"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className='title'>BINOMIO DE ORO</h1>
                            <p>
                            El origen del nombre de la agrupación viene de "binomio" porque eran 2 integrantes y de "oro" porque su música vale oro, el estilo musical del grupo es catalogado como romanza vallenata, con el cual han exportado el género internacionalmente y realizado numerosas giras en América y Europa.

                            El Binomio de Oro ha sido nominado tres veces al Grammy Latino categoría Cumbia/Vallenato, han ganado el premio Congo de Oro en siete oportunidades en el Festival de Orquestas y Acordeones del Carnaval de Barranquilla y el Premio Orquídea del Festival Internacional de la Orquídea en Venezuela.

                            El Binomio de Oro está directamente relacionado con el Festival Cuna de Acordeones de Villanueva, La Guajira, con Israel Romero entre sus principales promotores.
                            </p>
                            <hr/>

                        </div>
                    </div>

                        <div className="row">
                            <div className="col-12 col-md-8">
                                <img src="https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/binomio232321.jpg?alt=media&token=c6dd0286-4531-4844-8d68-22d1811357c6" className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-12 col-md-4 align-self-center">
                                <h1 className="title">HISTORIA</h1>
                                <p>
                                    El cantante y compositor Rafael Orozco había grabado en 1975 dos discos con el acordeonero Emilio Oviedo,​ mientras que en el mismo año, el acordeonero Israel Romero había grabado también dos discos con el cantante Daniel Celedón.​En 1976, Rafael Orozco e Israel Romero se conocieron durante una parranda en Manaure Balcón del César, tras ser presentados por el compositor de vallenato Lenín Bueno Suárez.A partir de ese momento conformaron la agrupación en Barranquilla con el nombre de "La Pareja Ideal", pero al poco tiempo optaron por un nombre que hiciera alusión a los nombres de los integrantes, el cual incluyó la palabra Oro, cuyo significado es "Organización Romero-Orozco".

                                    El primer trabajo fue titulado El Binomio de Oro grabado por Codiscos con los temas 'La Creciente', 'Bonito el amor', Momentos de amor' con el que tuvieron gran acogida en Colombia.

                                    Para su segundo trabajo discográfico con Codiscos, en 1976, El Binomio lanzó al mercado el álbum titulado Por lo alto con canciones de la autoría de Tomás Darío Gutiérrez, Poncho Cotes Jr, Sergio Moya Molina, Rosendo Romero, Héctor Zuleta Díaz, Fernando Meneses, Alberto 'Beto' Murgas, Hernando Marín y Julio Oñate Martínez.
                                </p>
                            </div>
                            <hr/>
                        </div>

                        <h1 className="title">ALGUNOS DE NUESTROS CONCIERTOS</h1>
                            <div className="row row-cols-1 row-cols-md-3 g-1 mt-3 ">
                                {
                                    Conciertos.map(function(concierto){
                                        return(
                                            <>
                                                <div className='col mt-3 p-2 '>
                                                    <div className='card h-100 color'>
                                                        <h4 className='text-center fw-bold text-tittle'> {concierto.nombre}</h4>

                                                        <img src={concierto.imagen} className="img-fluid-w-100 h-100" />

                                                        <h6 className='fw-bold'>{concierto.ciudad}</h6>
                                                        
                                                        <h6 className='fw-bold'>Año:   {concierto.fecha}</h6>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                </div>
                <Footer></Footer>
            </section>
            
        </>
    )
}

