
import './Home.css'

import { Footer } from '../Footer/footer';

export function Home(){

    return(
        <>
        
            <img src="https://firebasestorage.googleapis.com/v0/b/cineayb.appspot.com/o/banner.jpg?alt=media&token=96fec05c-2e53-469b-8932-658e1fcb5666" alt="banner" className="w-100 img-fluid"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>BINOMIO DE ORO</h1>
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
                                <h1 className="text-center">HSITORIA</h1>
                                <p>
                                El cantante y compositor Rafael Orozco había grabado en 1975 dos discos con el acordeonero Emilio Oviedo,​ mientras que en el mismo año, el acordeonero Israel Romero había grabado también dos discos con el cantante Daniel Celedón.​En 1976, Rafael Orozco e Israel Romero se conocieron durante una parranda en Manaure Balcón del César, tras ser presentados por el compositor de vallenato Lenín Bueno Suárez.A partir de ese momento conformaron la agrupación en Barranquilla con el nombre de "La Pareja Ideal", pero al poco tiempo optaron por un nombre que hiciera alusión a los nombres de los integrantes, el cual incluyó la palabra Oro, cuyo significado es "Organización Romero-Orozco".

                                    El primer trabajo fue titulado El Binomio de Oro grabado por Codiscos con los temas 'La Creciente', 'Bonito el amor', Momentos de amor' con el que tuvieron gran acogida en Colombia.

                                    Para su segundo trabajo discográfico con Codiscos, en 1976, El Binomio lanzó al mercado el álbum titulado Por lo alto con canciones de la autoría de Tomás Darío Gutiérrez, Poncho Cotes Jr, Sergio Moya Molina, Rosendo Romero, Héctor Zuleta Díaz, Fernando Meneses, Alberto 'Beto' Murgas, Hernando Marín y Julio Oñate Martínez.
                                </p>
                            </div>
                            
                        </div>
                </div>
                <Footer></Footer>
            </section>
            
        </>
    )
}

