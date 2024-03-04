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

