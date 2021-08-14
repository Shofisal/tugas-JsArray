let jumlahTeam = ['Iko', 'Besty', 'Dila', 'Pavita']
let team1 = jumlahTeam.slice (0,2)
let team2 = jumlahTeam.slice (2,4)
console.log(team1 , team2);
document.getElementById('team1').innerHTML =(`Team 1 :${team1}`);
document.getElementById('team2').innerHTML =(`Team 2 :${team2}`);

