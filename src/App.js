import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth",
      block: "center" });

      // Cerrar la navegación al hacer clic en un enlace
      setIsNavOpen(false);
    }
  };

  return (
    <>
      <section className="container-fluid">
        <main className="container-nav">
          <header className="my-5 p-5 header-nav-sm">
            <h1 className="title">PORSCHE</h1>
            <nav className={`nav ${isNavOpen ? "nav-open" : ""}`}>
              <ul className="nav-list">
                <li>
                  <a onClick={() => handleScrollTo("home")} className="nav-link">
                    HOME
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollTo("about")} className="nav-link">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollTo("historia")} className="nav-link">
                    HISTORIA
                  </a>
                </li>
                <li>
                  <a onClick={() => handleScrollTo("contacto")} className="nav-link">
                    CONTACTO
                  </a>
                </li>
              </ul>
            </nav>
            <div className="hamburger">
              <input
                type="checkbox"
                id="checkbox"
                checked={isNavOpen}
                onChange={handleToggleNav}
              />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
          </header>
        <section className="section-hero" id="home"></section>
      </main>
      <main>
        <section className=" about-section container " id="about">
          <div className="about">
             <div className="col-md-6 img-about"></div>
              <div className="col-md-6">
              <div className="general-text">
                <h2 className="general-h2">About</h2>
                <p className="general-p">
                  Porsche, pionero en la cumbre de la ingeniería automotriz,
                  deslumbra con creaciones que entrelazan lujo y potencia. Con
                  diseño cautivador y rendimiento magistral, cada vehículo es
                  una obra maestra que transforma la experiencia de conducción.
                  Porsche encarna una elegancia dinámica, fusionando
                  apasionadamente innovación y tradición en una armonía única.
                </p>
              </div>
             </div>
          </div>
        </section>
        <section className="  historia-section container" id="historia">
          <div className="about">
            <div className="col-md-6">
              <div className="general-text">
                <h2 className="general-h2">Fundación Porsche </h2>
                <p className="general-p">
                  Porsche fue fundada por Ferdinand Porsche en 1931 en
                  Stuttgart, Alemania. Antes de establecer su propia compañía,
                  Ferdinand Porsche ya tenía una reputación destacada en la
                  industria automotriz, habiendo trabajado en proyectos para
                  otras marcas, como el diseño del famoso Volkswagen Beetle.
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div>
                <h2 className="historia-h2">31´</h2>
              </div>
              <div className="img-historia-0"></div>
            </div>
          </div>
        </section>
        <section className=" historia-section container">
          <div className="about">
            <div className="col-md-6 ">
              <div>
                <h2 className="historia-h2">38´</h2>
              </div>
              <div className="img-historia-1"></div>
            </div>
            <div className="col-md-6">
              <div className=" general-text">
                <h2 className="general-h2">Volkswagen Beetle </h2>
                <p className="general-p">
                  Uno de los proyectos más significativos de Porsche en los
                  primeros años fue el diseño del Volkswagen Beetle, que fue
                  encargado por el gobierno alemán nazi. Aunque no fue diseñado
                  inicialmente por Porsche, Ferdinand Porsche contribuyó
                  significativamente al desarrollo del Beetle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" historia-section container">
          <div className="about">
            <div className="col-md-6">
              <div className=" general-text">
                <h2 className="general-h2">
                  Primer Porsche, el Porsche 356
                </h2>
                <p className="general-p">
                  El primer automóvil que lleva el nombre de Porsche fue el
                  Porsche 356, introducido en 1948. Este vehículo deportivo de
                  dos plazas estableció las bases para el enfoque de Porsche en
                  la fabricación de automóviles deportivos de alto rendimiento.
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div>
                <h2 className="historia-h2">48´</h2>
              </div>
              <div className="img-historia-2"></div>
            </div>
          </div>
        </section>
        <section className=" historia-section container">
          <div className="about">
            <div className="col-md-6 ">
              <div className="img-historia-3"></div>
            </div>
            <div className="col-md-6">
              <div className=" general-text">
                <h2 className="general-h2">Porsche en Competiciones</h2>
                <p className="general-p">
                  Porsche ha sido un competidor destacado en las carreras
                  automovilísticas, especialmente en eventos icónicos como las
                  24 Horas de Le Mans. Con numerosas victorias y un legado
                  impresionante, Porsche continúa siendo sinónimo de rendimiento
                  y éxito en el mundo de las competiciones automovilísticas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-contacto" id="contacto">
          <h2 className="text-center title h2-contacto">Contact</h2>
          <form
            className="px-1 py-5"
            action="direccionDestinoDeLainfo"
            method="post"
          >
            <div className="contact container">
              <div>
                <label className="form-label mx-2 " type="nombre">
                  Nombre
                </label>
                <input className="form-control-lg input-1" id="nombre" type="text" />
              </div>

              <div>
                <label className="form-label mx-2" type="apellido">
                  Apellido
                </label>
                <input className="form-control-lg" id="apellido" type="text"  />
              </div>
              <div>
                <label className="form-label mx-3" for="email">Email</label>
                <input className="form-control-lg" type="email" id="email" placeholder="Email"></input>
              </div>
              <div>
                <input className="input-enviar my-3" type="submit" value="ENVIAR" formTarget="_blank" ></input>
              </div>
            </div>
          </form>
        </section>
        <hr/>
        
        <footer className="section-footer container">
          <p>&copy; 2023 JVDEV. Todos los derechos reservados.</p>
          <h3>Pagina realizada por Julian videla</h3>
          
        </footer>
      </main>
    </section>
    </>
  );
}

export default App;
