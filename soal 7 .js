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