let pelajaran1 = ['Math', 'English', 'Programmer']
let pelajaran2 = ['Geography', 'Spanish', 'Programmer']

function cekPelajaran (pelajaran1, pelajaran2) {
    return pelajaran1.some((cek) => pelajaran2.includes(cek))
}
console.log(cekPelajaran(pelajaran1, pelajaran2))
document.getElementById('pelajaran1').innerHTML =(`Pelajaran 1 :${pelajaran1}`);
document.getElementById('pelajaran2').innerHTML =(`Pelajaran 2 :${pelajaran2}`);
document.getElementById('hasil').innerHTML=(`Hasilnya : ${cekPelajaran(pelajaran1,pelajaran2)}`)