console.log("tutto ok");


const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


//MILESTON 1

for (let i = 0; i < team.length; i++) {
    const memberTeam = team[i];
    for (const key in memberTeam) {
        console.log(memberTeam[key]);
    }
}

//MILESTONE 2

const containerEl = document.querySelector(".container");
//stampo in console per controllare di aver stampato bene
console.log(containerEl);

//creo un ciclo for, così ad ogni iterazione vado a stamparmi un membro del team in DOM
for (let i = 0; i < team.length; i++) {
    const memberTeam = team[i];
    containerEl.innerHTML += `<p>membro ${i} : ${memberTeam.name}, ${memberTeam.role} , ${memberTeam.image}</p>`
}
/*
  //BONUS 1

  for (let i = 1; i <= team.length; i++) {
        const markup = `<img src="./assets/img/img/0${i}.jpg" alt="">`  
        console.log(markup);
        containerEl.innerHTML += `${markup}`
  }
*/
//BONUS 2

//mi creo un div con class="row" e lo appendo al mio container
const divEl = document.createElement("div");
divEl.classList.add("row"); //con class List accedo alle classi dell'elemento e con add aggiungo la classe all'elemento appena creato
containerEl.append(divEl);//appendo il div creato al container dell'html selezionato prima

//creo un ciclo for che mi scorra l'array team e per ogni oggetto membro creo un elemento col 
for (let i = 0; i < team.length + 1; i++) {
    const member = team[i];
    console.log(member);
    markup = `<div class="col"><div class="card mb-5"><img src="./assets/img/img/0${i + 1}.jpg" alt=""><div class="card-body">
        <h3 class="card-title">${member.name}</h3>
        <p>${member.role}</p>      
      </div></div></div>`

    divEl.innerHTML += `${markup}`
}
