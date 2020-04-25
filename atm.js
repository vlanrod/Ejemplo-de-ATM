function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  saldo = disponible - dinero;

if((saldo + dinero) >= dinero)
 {
   for(var bi of caja)
   {
     if(dinero > 0)
     {
      div = Math.floor(dinero / bi.valor);
       if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }

      else
      {
        papeles = div;
      }
       entregado.push(new billete(bi.valor, papeles) );
       dinero = dinero - (bi.valor * papeles);
      }
   }
 if(dinero > 0 )
   {
    resultado.innerHTML = "No hay suficiente dinero";
    // innerHTML es el uso correcto de introducir texto a html
   }

   else
     {
      for(var e of entregado)
      {
        if(e.cantidad > 0)
        {
          var foto = new Image();
          foto.src = imagenes[e.valor];
          document.body.appendChild(foto);
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
          cash.innerHTML = "Disponible en tu cuenta: " + saldo + " Dolares";
        }
       }
      }
    disponible = saldo;
    console.log(saldo);
  }
  else
  {
    resultado.innerHTML = "No tienes fondos en tu cuenta";
  }
}

var imagenes = [];
imagenes["5"] = "dollar5.png";
imagenes["10"] = "dollar10.png";
imagenes["20"] = "dollar20.png";
imagenes["50"] = "dollar50.png";
imagenes["100"] = "dollar100.png";

var caja = [];
var entregado = [];
caja.push( new billete(100, 10) );
caja.push( new billete(50, 10) );
caja.push( new billete(20, 10) );
caja.push( new billete(10, 10) );
caja.push( new billete(5, 10) );

var dinero;
var div = 0;
var papeles = 0;
var disponible = 2500;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
