let pekerjaan = ['Front End Developer', 'Back End Developer', 'Full Stack Engginer', 'Android Developer', 'Data Scientist']
console.log(pekerjaan)
console.log(pekerjaan.length)
document.write('<h3> 5 Pekerjaan di bidang IT :</h3>')
document.write('<ol>')

 pekerjaan.forEach((data) => {
     document.write(`<li>${data}</li>`)
 })
 document.write('</ol>');
 document.write('</br>')
 document.write('Panjang Data : ')
 document.write(pekerjaan.length)