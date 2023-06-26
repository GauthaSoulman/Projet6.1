    class Accueil {
      constructor() {
        //Recupere Element
          this.listePhotographes = document.querySelector('.photographer_section');
          //Recupere Data   
          this.photographesApi = new PhotographeApi('/data/photographers.json');
      }

      
    async main() {
      let photographesData = await this.photographesApi.getPhotographes();
      let Photographe = photographesData.map(photographe => new PhotographesFactory(photographe));

      Photographe.forEach(photographe => {
          let CarteTemplate = new PhotographesCarte(photographe);
          this.listePhotographes.appendChild(
              CarteTemplate.createPhotographeCarte()

          );
          console.log("====")
          console.log(photographe)
          console.log("====")
      })
  }
}

let accueil = new Accueil();
accueil.main()
