let angka = [3 ,5, 7, 9, 11]
let angka2 = angka.map ((item) => {
    return item * 5
})
console.log (angka2)
document.getElementById('angka2').innerHTML =(`Hasilnya :${angka2}`);