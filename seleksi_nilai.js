function deret(awal, akhir){
    let nilai = [3, 28, 8, 2, 19, 23, 9, 16, 32]
    nilai = nilai.sort((a, b) => a - b);
    terbesar = nilai[nilai.length - 1];

    //kondisi yg benar
    if(awal < akhir && terbesar > awal){
        const hasil = nilai.filter(el => el > awal && el < akhir)
        return hasil
    }
    //jika nilai lebih besar dari nilai pada array maka:
    else if(terbesar <= awal){
        return 'nilai tidak ditemukan'    
    }        

    //kondisi saat nilai awal lebih besar
    else if (awal > akhir){
        return 'nilai akhir harus lebih besar dari nilai awal'
    }
}
console.log(deret(5, 25));