const taskList = [
    {
      Title: "Percevabilité",
      Items: [
        "Toutes les images ont un texte alternatif significatif",
        "les vidéos sont sous-titrées et accompagnées d'une transcription.",
        "Le contraste entre le texte et l'arrière-plan est suffisant."
      ]
    },
    { 
      Title: "Utilisabilité",
      Items: [
        "Toutes les fonctionnalités du site sont accessibles au clavier. ","Les liens et les boutons sont facilement cliquables et sélectionnables.","Les formulaires sont correctement étiquetés et structurés."
      ]
    },
    {
      Title: "Compréhensibilité",
      Items: [
        "Le langage utilisé est simple et compréhensible.","Les erreurs dans les formulaires sont clairement identifiées et expliquées.","Les pages ont une structure logique avec des en-têtes appropriés"
      ]
    },
    {
        Title: "Robustesse",
        Items: [
          "Le langage utilisé est simple et compréhensible","Les erreurs dans les formulaires sont clairement identifiées et expliquées.","Les pages ont une structure logique avec des en-têtes appropriés"
        ]
      },
      {
        Title: " Adaptabilité ",
        Items: [
          "Le site est réactif et s'adapte à différents écrans (responsive design).","Les polices de caractères sont redimensionnables sans perte de lisibilité.","Les fonctionnalités du site sont compatibles avec les technologies d'assistance."
        ]
      },
      {
        Title: "Contenu multimédia",
        Items: [
          "Les médias (images, vidéos, etc.) sont munis de descriptions alternatives.","Les contenus multimédias sont conçus de manière à ne pas déclencher de crises épileptiques (par exemple, éviter les animations clignotantes intenses)."
        ]
      },
];

const container = document.createElement('div');
container.classList.add("container");
document.body.appendChild(container);



taskList.forEach(function(listItem) {
    let myinput = "";
   container.innerHTML += `
        <h2>${listItem.Title}</h2> `;


    for (let i = 0; i < listItem.Items.length; i++) {
        myinput += "<fieldset><input id='scales" + i + "' type='checkbox'  name='valeurs" + i + "'>" + `<label for="scales">${listItem.Items[i]}</label> </fieldset>`;
    }
    container.innerHTML += myinput;
});
    

const fieldsets = document.querySelectorAll('fieldset');
fieldsets.forEach(function (fieldset) {
  fieldset.addEventListener('click', function () {
    // Find the checkbox inside the clicked fieldset
    const checkbox = fieldset.querySelector('input[type="checkbox"]');

    // Check the checkbox
    checkbox.checked = !checkbox.checked;

    // Update the checked tasks count
    const checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;

    // Display the progress percentage
    updateProgress(checkedTasks);
  });
});

// Function to update and display the progress percentage
function updateProgress(checkedTasks) {
  const totalTasks = fieldsets.length;
  const progress = (checkedTasks / totalTasks) * 100;
  progress.toFixed(0) // afficher en nombre entier

  let progressDisplay = document.querySelector("#progress-container")
  progressDisplay.textContent = `Progress: ${progress.toFixed(0)}% ` // afficher en nombre entier

}
//   console.log(`Progress: ${progress.toFixed(2)}% (${checkedTasks}/${totalTasks} tasks completed)`);


//Reste a faire le localStorage, quand on stock sur application c que en chaine de caractèere 
    //donc faut transformer les objet en chain de caractere et viceversa pour quand on recupere du storage
        // json stringify pour obj=> string 
      //json parse pour string=> obj


      //creer une fx qui saveTolocalStorage 
      // // definiamo dunque: 
      //function saveTolocalStorage(key){
       // localStorage.getItem(key.JSON.stringify(tableau))
       //}
       //dunque key puo cambiare quando richiamo saveToLocalStorage 
       //possiamo fare anche senza key , pck elle est "sottointesa"
       //richiamando la fx avec les () vuote. Senza Argomento

      // 


    //exemple : 
    //const lalala =  JSON.parse(localStorage.getItem("saved")) || structuredClone("il mio tableau iniziale dupliacto")
// ricorda ritradurre lo string salvato in objet con JSON.parse(elemento recuperato dal local storage)














//tableau sans des tableaux nested in it
// const body = document.querySelector('body')

// const laliste = [
//     {
//         titre : "percevabilité",
//         desc : "texte alternatif"
//     },
//     {
//         titre : "utilisabilité",
//         desc : "toutes les fonctionnalités du site sont accessibles au clavier "
//     },
//     {
//         titre : "compréhensibilité",
//         desc : "toutes les fonctionnalités du site sont accessibles au clavier "
//     },
//     {
//         titre : "robustesse",
//         desc : "toutes les fonctionnalités du site sont accessibles au clavier "
//     },
//     {
//         titre : "adaptabilité",
//         desc : "toutes les fonctionnalités du site sont accessibles au clavier "
//     },
//     {
//         titre : "contenu multimédia",
//         desc : "photos lien etc ont des descriptions alternatives"
//     },]

//     laliste.forEach(function(ListItem){

//         body.innerHTML += `
//         <div>
//             <h2>${ListItem.titre}</h2>
//             <input type = checkbox>${ListItem.desc}</input>
//         </div>
//         `


//     })
