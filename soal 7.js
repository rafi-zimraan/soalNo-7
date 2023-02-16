for (let v = 0; v < 17; v+=2) {
    for(let t = 0; t < 17; t+=2) {
        if (v == 8 || v + t == 16) {
            document.write( t + " ")
        }else if( t == 8 || t == v) {
            document.write((v+1) + " ")
        } else{
            document.write(" &nbsp ")
        }
    }document.write("</br>")
    
}



// for (let i = 0; i < 17; i+=2){
//     for (let j =0; j < 17; j+=2){
//         if(i == 8 || i + j == 16){
//             document.write(j + " ");
//         } else if(j == 8 || j == i){
//             document.write((i+1) + " ");
//         } else {
//             document.write(" &nbsp ");
//         }
//     }document.write("<br>")
// }