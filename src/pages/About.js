import React from "react";

export default function About() {
  return (
    <section className="section about-section pb-5">
      <h1 className="section-title">Sobre Nosotros</h1>
      <p>
        El proyecto se realizó utilizando api de <b><a href="https://www.thecocktaildb.com/">TheCocktailDB.</a></b><br />
      Busca tus cócteles favoritos para ver la lista de ingredientes y cómo prepararlos.
      </p>
      <div class="container">
       <div class="row">
        <div class="col-7">
          <div class="mb-3 pt-5 px5">
            <label class="form-label"> Nombre</label>
            <input class="form-control" type="name" placeholder="Silva Brito"/>
          </div>
          <div class="mb-3  px5">
            <label class="form-label"> Telefono</label>
            <input class="form-control" type="phone" placeholder="000-000-000"/>
          </div>
          <div class="mb-3  px5">
            <label class="form-label"> mensaje</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>            </div>
            </div>
            </div>
                </section>
      

    
  );
  
}
