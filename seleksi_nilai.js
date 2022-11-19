let nilai = [3, 28, 8, 2, 19, 23, 9, 16, 32]
nilai = nilai.sort((a, b) => a - b);
const Awal = 5;
const Akhir = 25;
const hasil = nilai.filter(el => el > Awal && el < Akhir)
console.log(hasil);


