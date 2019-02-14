function berapatahun(n,d,p,t){
    var total = 0
    var tahun = 0
    //Hitung
        total = t - n
        tahun = parseInt(total / ((n*d/100) + p))
    
    return 'Kota akan mencapai ' + t + ' dalam ' + tahun + ' tahun '
} console.log(berapatahun(1000,5,50,1200))

