class Calculadora{
    isBuscado(arr,buscar){
        let pos=0,enc=0
        while(pos<arr.length && enc==0){
            if (arr[pos]==buscar){
               enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos
        }else{
            return -1
        }
    }
     
    isPalabras(frase){
        let cp=1
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            if(frase[pos]==' ' && frase[pos+1]!=' '){
                cp+=1
            }
        }
        return cp
    }

     isCopiarCaracteres(frase,car){
        let copia=""
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            if (frase[pos]==car ){
                copia = copia + frase[pos]
            }
        }
        return copia
    }
    copiarCaracteres(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter = prompt("Ingrese caracter")
        let cc = this.isCopiarCaracteres(cadena,caracter)
        $input.value=`${cadena} - ${cc} `
   
    }
      isDivisor(arr,divisor){
        let divisores=[],pos2=0
        for (let pos=0;pos<arr.length;pos++){
            let num=parseInt(arr[pos])
            if (num%divisor==0){
                divisores.push(num)
            }

        }
        return divisores
    }
   
    isExponente(base,exp){
        let res = 1
        for(let i=1;i<=exp;i++){
            res*=base
        }
        return res
    }   
    
    isDigitos(numero,base){
        let  digitos= []
        while(numero > 0){
            digitos.push(numero%base)
            numero = parseInt(numero/base)
        }
        return digitos
    }
    
    Isbase8o16(numerop,basep){
        let arreglo=[]
        while(numerop>basep){
          arreglo.push(numerop%basep)
          numerop=parseInt(numerop/basep)
        }
         arreglo.push(numerop)
         return arreglo
    }
    
    isreverse(arreglo){
        arreglo.reverse()
        arreglo=arreglo.join("")
        return arreglo
    }

    Isbase16(arreglo){
        let arreglo16=[], numero=0
        for (let i=0;i<=arreglo.length-1;i++){ 
         numero=arreglo[i]
        if (numero>9){
          if (numero==10){
             numero="A"
             arreglo16.push(numero)
          }  if (numero==11){
             numero="B"
             arreglo16.push(numero)
          }  if (numero==12){
             numero="C"
             arreglo16.push(numero)
          }  if (numero==13){
             numero="D"
             arreglo16.push(numero)
          }  if (numero==14){
             numero="E"
             arreglo16.push(numero)
          }  if (numero==15){
             numero="F"
             arreglo16.push(numero)
          }
         }else{
             arreglo16.push(numero)
          }
     }
     return arreglo16
     }

    base10_2(){
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        if($input.value){
            if(numero>0){
                let r=this.isDigitos(numero,2)
                let j=this.isreverse(r)
                $input.value=`El número ${numero} escrito en base diez es igual a: ${j} en base dos `
            }else{
                $input.value="No se permite numeros negativos, ni el 0"
            }
        }else{
            $input.value="No ingresastes numero"
        }
    }

    base10_16(){
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        if($input.value){
            if(numero>0){
                let q=this.Isbase8o16(numero,16)
                let r=this.Isbase16(q)
                let j=this.isreverse(r)
                $input.value=`El número ${numero} escrito en base diez es igual a: ${j} en base dieciseis `   
            }else{
                $input.value="No se permite numeros negativos, ni el 0"
            }
        }else{
            $input.value="No ingresastes numero"
        }
    }

    base10_8(){
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        if($input.value){
            if(numero>0){
                let r=this.Isbase8o16(numero,8)
                let j=this.isreverse(r)
                $input.value=`El número ${numero} escrito en base diez es igual a: ${j} en base ocho `  
            }else{
                $input.value="No se permite numeros negativos, ni el 0"
            }
        }else{
            $input.value="No ingresastes numero"
        }
    }

    isbase10(numerop){
        let arreglo=this.isDigitos(numerop,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10=base10+arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
        return base10
    }

    validezbinario(binario){
        let prev="", verificado=0
       for(let i=0;i<binario.length;i++){
          if(binario[i]=="1" || binario[i]=="0"){
            prev=prev+binario[i]
          }else{
            return -1
          }
        }
        verificado=parseInt(prev)
        return verificado
    }
    
    base2_10(){
        let $input=document.getElementById("result")
        let num=$input.value
        let numero=this.validezbinario(num)
        if($input.value){
            if(num>0){
                if(numero==num){
                    let b10=this.isbase10(numero)
                    $input.value=`El número ${num} escrito en base dos es igual a: ${b10} en base diez`
                }else{
                    $input.value="El numero no es binario"
                }     
            }else{
                $input.value="No se permiten textos, numeros negativos ni el numero 0"
            }
        }else{
            $input.value="No ingresastes numero"
        }
    }

    base2_16(){
       let $input=document.getElementById("result")
       let num=$input.value
       let numero=this.validezbinario(num)
       if($input.value){
        if(num>0){
            if(numero==num){
                let b10=this.isbase10(numero)
                let q=this.Isbase8o16(b10,16)
                let r=this.Isbase16(q)
                let j=this.isreverse(r)
                $input.value=`Base2=${num} a Base16=${j}`
            }else{
                $input.value="El numero no es binario"
            }
        }else{
            $input.value="No se permiten textos, numeros negativos ni el numero 0"
        }
    }else{
          $input.value="No ingresastes numero"
       }
    
    }

    base2_8(){
        let $input=document.getElementById("result")
        let num=$input.value
        let numero=this.validezbinario(num)
        if($input.value){
            if(num>0){
                if(numero==num){
                    let b10=this.isbase10(numero)
                    let q=this.Isbase8o16(b10,8)
                    let j=this.isreverse(q)
                    $input.value=`Base2=${num} a Base8=${j}`    
                }else{
                    $input.value="El numero no es binario"
                }
            }else{
                $input.value="No se permiten textos, numeros negativos ni el numero 0"
            }
        }else{
            $input.value="No ingresastes numero"
        }
    }

    baseNaN(){
        let $input=document.getElementById("result")
        let numero=$input.value
        if($input.value){
            if(numero>0){
                let base1=prompt("Ingresa la primera base (10 o 2)")    
                let base2=prompt("Ingresa la base a convertir (2 o 10 o 8 o 16)") 
            if((base1==10 || base1==2) && (base2==10 || base2==2 || base2==16 || base2==8)){
                if(base1==10){
                    if(base2==2){ 
                    let r=this.isDigitos(numero,2)
                    let j=this.isreverse(r)
                    $input.value=`Base10=${numero} a Base2=${j}`
                    }if(base2==16){
                        let q=this.Isbase8o16(numero,16)
                        let r=this.Isbase16(q)
                        let j=this.isreverse(r)
                        $input.value=`Base10=${numero} a Base16=${j}`
                    }if(base2==8){
                        let r=this.Isbase8o16(numero,8)
                        let j=this.isreverse(r)
                        $input.value=`Base10=${numero} a Base8=${j}`
                    }
                }else{
                    if(base1==2){ 
                    let num=this.validezbinario(numero)
                    if(num==numero){
                        if(base2==10){
                            let r=this.isbase10(num)
                            $input.value=`Base2=${numero} a Base10=${r}`
                        }if(base2==16){
                            let b10=this.isbase10(num)
                            let q=this.Isbase8o16(b10,16)
                            let r=this.Isbase16(q)
                            let j=this.isreverse(r)
                            $input.value=`Base2=${numero} a Base16=${j}`
                        }if(base2==8){
                            let b10=this.isbase10(num)
                            let q=this.Isbase8o16(b10,8)
                            let j=this.isreverse(q)
                            $input.value=`Base2=${numero} a Base8=${j}`
                        }
                    }else{
                        $input.value="El numero no es binario"
                    }
                  }
                }
            }else{
                $input.value="Bases invalidas, vuelve a ingresar"
            }
            }else{
                $input.value="No se permite numeros negativos, ni el 0"
            }
        }else{
            $input.value="No ingresastes numero"
        }
    } 

    darvuelto(dolar){
     let vuelto=[50,20,10,5,1], dinero=[]
     for(let i=0;i<vuelto.length;i++){
        let pvuelto=vuelto[i]
        if(dolar>=pvuelto){
            let cvuelto=Math.floor(dolar/pvuelto)
            dinero.push(`[${cvuelto}]:$${pvuelto}`)
            dolar=dolar%pvuelto
        }
     }
    return dinero
    }

    vuelto(){
    let $input=document.getElementById("result")
    let numero=parseInt($input.value)
    if($input.value){
        if(numero>=100){
            $input.value="El numero es mayor de 100"
        }else{
            if(numero>0){
                let r=this.darvuelto(numero)
                $input.value=`El vuelto de $${numero} es: ${r}`
            }else{
                $input.value="El numero es negativo"
            }
        }
    }else{
        $input.value="No ingresaste un numero"
    }
    }

    romanos(){
    let $input=document.getElementById("result")
    let numero=parseInt($input.value), num=numero
    if($input.value){
        if(numero>0){
            if(numero<=100){
                let valoresRomanos=["C","XC","L","XL","X","IX","V","IV","I"]
                let valoresNumericos=[100,90,50,40,10,9,5,4,1]
                let resultado="";
                for (let i=0;i<valoresNumericos.length;i++){
                  while (numero>=valoresNumericos[i]){
                    resultado+=valoresRomanos[i]
                    numero-=valoresNumericos[i]
                  }
                }
                $input.value=`${num} en romano es: ${resultado}` 
            }else{
                $input.value="El numero debe ser menor o igual a 100"
            }
        }else{
            $input.value="El numero es negativo"
        }
    }else{
        $input.value="No ingresastes un numero"
    }
    }

    posicionc(frasep,pedidop){
    let x=0, q=0, cont=0, cont2=0, posicion2=0, posicion=0
    let lonfrase=frasep.length, lonpedido=pedidop.length
    frasep=frasep.toLowerCase(), pedidop=pedidop.toLowerCase()
    for(let i=1;i<=lonfrase;i++){
      if(frasep[i]==pedidop[x]){
        q=i
        while(pedidop[x]!=pedidop[lonpedido]){
         if(frasep[q]==pedidop[x]){
            q=q+1, x=x+1, cont=cont+1
         }else{
            q=q+1,x=x+1
         }
        }
        if(cont==lonpedido){
            cont=cont, cont2=cont, posicion2=i
          }else{
            cont=0
          }
          posicion=i, q=posicion, x=0
        }
    }
    if(cont2==lonpedido){
        return posicion2
    }else{
        return -1
    }
    }

    buscarcadena(){
    let $input=document.getElementById("result")
    let fra=$input.value
    if($input.value){
        let ped=prompt("ingresa una cadena a buscar")
        let posicion=this.posicionc(fra,ped)
        if(posicion==-1){
            $input.value="La cadena pedida no se encontró"
        }else{
            $input.value=`La cadena pedida: "${ped}" está en la posición ${posicion}`
        }
    }else{
        $input.value="No se ingresó la cadena"
    }
    }

    validezarreglo(numerox,c){
        let v=0
        for(let i=0;i<numerox.length;i++){
            if(numerox[i]==c){
                v=v+1
            }
        }
        return v
    }

    mayor(){
        let $input=document.getElementById("result")
        let numerox = $input.value.trim()
        let va=this.validezarreglo(numerox,",")
        if($input.value){
            if(va!=0){
                let numero=this.splitmioo(numerox,",")
                let nummayor=numero[0]
                for (let i=0;i<numero.length;i++){
                    if (numero[i]>nummayor){
                        nummayor=numero[i]
                    }
                }
                $input.value=`El numero mayor del arreglo [${numero}] es: ${nummayor}`  
            }else{
                $input.value="Los valores del arreglo deben ser separados por comas ej: N,N,N"
            }
        }else{
            $input.value="No ingresastes el arreglo"
        }
     }

    menor(){
        let $input=document.getElementById("result")
        let numerox = $input.value.trim()
        let va=this.validezarreglo(numerox,",")
        if($input.value){
            if(va!=0){
                let numero=this.splitmioo(numerox,",")
                let nummenor=numero[0]
                for (let i=0;i<numero.length; i++){
                    if (numero[i]<nummenor){
                        nummenor=numero[i]
                    }
                }
                $input.value=`El numero menor del arreglo [${numero}] es: ${nummenor}`    
            }else{
                $input.value="Los valores del arreglo deben ser separados por comas ej: N,N,N"
            }
        }else{
            $input.value="No ingresastes el arreglo"
        }
    }

    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena=$input.value
        let va=this.validezarreglo(cadena,",")
        if($input.value){
            if(va!=0){
            let arreglo=this.splitmioo(cadena,",")
            let buscado=prompt("Ingrese elemento a buscar")
            let pos=this.isBuscado(arreglo,buscado)
            if (pos >= 0){
                $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
            }else{
                $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
            }
            }else{
                $input.value="Los elementos del arreglo deben ser separados por comas ej: N,N,N"
            }
        }else{
            $input.value="No ingresastes el arreglo"
        }
    }  

    eliminararreglo(){
        let $input=document.getElementById("result")
        let numero=$input.value
        let va=this.validezarreglo(numero,",")
        if($input.value){
            if(va!=0){
                let arreglo=this.splitmioo(numero,",")
                let buscado=prompt("Ingrese elemento a eliminar")
                let pos=this.isBuscado(arreglo,buscado)
                if(pos==-1){
                $input.value="No existe el numero"
                }else{
                arreglo.splice(pos,1)
                $input.value=`Nuevo Arreglo: [${arreglo}]`
            }
            }else{
                $input.value="Los elementos del arreglo deben ser separados por comas ej: N,N,N"
            }
        }else{
            $input.value="No ingresastes el arreglo"
        }
    }

    insertarelemento(){
        let $input=document.getElementById("result")
        let numero=$input.value
        let va=this.validezarreglo(numero,",")
        if($input.value){
            if(va!=0){
            let arreglo=this.splitmioo(numero,",")
            let buscado=prompt("Ingrese elemento a ingresar")
            arreglo.push(buscado)
            $input.value=`Nuevo arreglo: [${ arreglo.sort(function(a,b){
                return a - b;
              })}]`
            }else{
                $input.value="Los elementos del arreglo deben ser separados por comas ej: N,N,N"
            }
        }else{
            $input.value="No ingresastes el arreglo"
        }
    } 
    
    splitmioo(cadena,caracter){
    let arreglo=[], numeros=0, indi="", enteros=0
    for(let i=0;i<cadena.length;i++){
       if(cadena[i]!=caracter){
         indi=indi+cadena[i]
        }else{
        enteros=indi
        numeros=enteros
        arreglo.push(numeros)
        indi="", numeros=0
        }
    }
    arreglo.push(indi)
    return arreglo
    }

    Cadena_Arreglo(){
        let $input=document.getElementById("result")
        let arreglop=$input.value
        if($input.value){
            let caracter=prompt("Ingresa el caracter con el cual concatenaste la cadena")
            let va=this.validezarreglo(arreglop,caracter)
            if(va!=0){
                let r=this.splitmioo(arreglop,caracter)
                $input.value=`La cadena en arreglo es: [${r}]`
            }else{
                $input.value=`Con "${caracter}" no concatenaste la cadena, intenta de nuevo`
            }
        }else{
            $input.value="No ingresastes la cadena"
        }
    }

    Arreglo_Cadena(){
        let $input=document.getElementById("result")
        let arreglop=$input.value, cadena="", recadena=""
        if($input.value){
            if(arreglop[0]=="[" && arreglop[arreglop.length-1]=="]"){
                let va=this.validezarreglo(arreglop,",")
                if(va!=0){
                    let caracter=prompt("Con que caracter especial quieres concatenar?")
                for(let i=1;i<arreglop.length-1;i++){
                if(arreglop[i]!="[" || arreglop[i]!="]"){
                   recadena=recadena+arreglop[i]
                }else{
                   let v=v+1
                }
                }
                let r=this.splitmioo(recadena,",")
                cadena=r[0]
                for(let i=1;i<r.length;i++){
                cadena+=caracter+r[i]
               }
               $input.value=`El arreglo concatenado en cadena es: "${cadena}"`
                }else{
                    $input.value="Los elementos del arreglo deben ser separados por comas ej: N,N,N"
                }
            }else{
               $input.value="Por favor ingrese el arreglo entre corchetes, ej:[N,N,N]"
            }
        }else{
            $input.value="No ingresastes el arreglo"
        }
    }

    PalabraCapital(){
        let $input=document.getElementById("result")
        let oracion=$input.value, capi=oracion.charAt(0).toUpperCase()
        if($input.value){
            oracion=oracion.trim()
            oracion=oracion.toLowerCase()
            for(let i=1;i<=oracion.length-1;i++){
                if(oracion[i]!=" " && oracion[i-1]==" "){
                   capi=capi+oracion.charAt(i).toUpperCase()
                }else{
                    capi=capi+oracion[i]
                }
            }
            $input.value=`La cadena a tipo oracion es: "${capi}"`
        }else{
            $input.value="No ingresaste la cadena"
        }
    }
    
    Cespeciales(){
        let $input=document.getElementById("result")
        let cadena=$input.value, c=0, p=0, pc=0, dp=0, v=0
        if($input.value){
            for(let i=0;i<cadena.length;i++){
                if(cadena[i]==","){
                   c=c+1
                }if(cadena[i]=="."){
                   p=p+1
                }if(cadena[i]==";"){
                   pc=pc+1
                }if(cadena[i]==":"){
                   dp=dp+1
                }else{
                   v=v+1
                }
            }
            $input.value=`Resultados: Comas: ${c}, Puntos: ${p}, Punto y comas: ${pc}, Dos puntos: ${dp}`
        }else{
            $input.value="No ingresastes la cadena"
        }
    }

    sumadigitosporcadena(cadena){
    let suma=0, num=0
    for(let i=0;i<cadena.length;i++){
        num=parseInt(cadena[i])
        suma=suma+num
    }return suma
    }

    sumadigitos(){
        let $input=document.getElementById("result")
        let numero=$input.value
        if($input.value){
            let cadenap=numero.toString();
            let r=this.sumadigitosporcadena(cadenap)
            $input.value=`La suma de:"${numero}" es: ${r}`
        }else{
            $input.value="No ingresastes la cadena"
        } 
    }
} 

let cal = new Calculadora()

