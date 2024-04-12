// click event listeners, kas nosiežiet pogu ved uz saiti
document.getElementById("grafikaPoga").addEventListener("click", function () {
  window.location.href = "https://www.espn.com/boxing/story/_/id/12508267/boxing-schedule";
});

kalendars();  // Izsaucam funkciju "kalendars()"

function kalendars() {
  // iegust esoso menesi un gadu
  const laiksTagad = new Date();
  const diena = laiksTagad.getDate();
  const menesis = laiksTagad.getMonth();
  const gads = laiksTagad.getFullYear();

  // menešu nosaukumi
  const menesuNosaukumi = ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs",
    "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"];

  const menesaPirmaDiena = new Date(gads, menesis, 0).getDay(); //iegūst mēneša pirmo dienu
  print
  const menesaPedejaDiena = new Date(gads, menesis + 1, 0).getDate(); //iegūst dienu skaitu

  const paradaMenesus = document.querySelector('.menesis'); //definē mainīgos, kas parādīs kalendāru
  const paradaDienas = document.querySelector('.dienas');

  paradaMenesus.textContent = menesuNosaukumi[menesis] + ' ' + gads;  //html pusē izvada mēnesi un gadu

  for (let i = 0; i < menesaPirmaDiena; i++) {  //izveido tukšus laukus dienām
    const emptyDiv = document.createElement('div');
    emptyDiv.textContent = '';
    paradaDienas.appendChild(emptyDiv);
  }

  for (let i = 1; i <= menesaPedejaDiena; i++) {  // izvada dienas
    const dienaDiv = document.createElement('div');
    dienaDiv.textContent = i;
    if (i === diena) dienaDiv.classList.add('current-day');    // iegūst šodienu, definē to
    paradaDienas.appendChild(dienaDiv);
  }
}
