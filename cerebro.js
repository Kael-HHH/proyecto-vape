//declaracion de variables porcentuales
let por_cerebro = 100;
let por_pulmones = 100;
let por_corazon = 100;

let fumadas = 0;
// declaracion de variables constantes
const FUMAR = document.getElementById("btnfumar")
const NCEREBRO = document.getElementById("NCerebro");
const NPULMONES = document.getElementById("NPulmones");
const NCORAZON = document.getElementById("NCorazon");
//Declaracion de constantes para barras de vida
const VIDACEREBRO =  document.getElementById("cerebro");
const VIDACORAZON = document.getElementById("corazon");
const VIDAPULMONES = document.getElementById("pulmones");
//Declaracion de constantes para organos
const IMGCEREBRO = document.getElementById("imgCerebro");
const IMGCORAZON = document.getElementById("imgCorazon");
const IMGPULMONES = document.getElementById("imgPulmones");
//declaracion general
const MENSAJE = document.getElementById("Mensajes");
const VAPE = document.getElementById("vape");

function actualizar()
{
    NCEREBRO.innerHTML = por_cerebro+"%";
    VIDACEREBRO.style.width = por_cerebro+"%";
    NPULMONES.innerHTML = `${por_pulmones}%`;
    VIDAPULMONES.style.width= por_pulmones + "%";
    NCORAZON.innerHTML = `${por_corazon}%`;
    VIDACORAZON.style.width = por_corazon+"%";
}

FUMAR.addEventListener("click", function(){
    VAPE.style.visibility = "visible";
    setTimeout( function(){
        VAPE.style.visibility = "hidden"
    }, 500);
    fumadas ++;

    por_cerebro = por_cerebro -2;
    por_corazon = por_corazon - 5;
    por_pulmones = por_pulmones -20;
    if (por_pulmones < 0){por_pulmones = 0;}
    if (por_corazon < 0){por_corazon = 0;}
    if (por_cerebro < 0){por_cerebro = 0;}

    if (por_pulmones < 80)
        {
            escala = 100 - por_pulmones;
            IMGPULMONES.style.filter = `grayscale(${escala}%)`;
        }
    if (por_corazon < 80)
        {
            escala = 100 - por_corazon;
            IMGCORAZON.style.filter = `grayscale(${escala}%)`;
        }
    if (por_cerebro < 80)
    {
        escala = 100 - por_cerebro;
        IMGCEREBRO.style.filter = `grayscale(${escala}%)`
    }

    if (fumadas == 1)
        {
            MENSAJE.innerHTML = "Vaya, asi que has fumado";
            setTimeout( function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    if (fumadas == 3)
        {
            MENSAJE.innerHTML = "¿Estas jodiendo tus pulmones por gusto?"
            setTimeout(function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    if (fumadas == 4)
        {
            MENSAJE.innerHTML = "los pulmones son los que más se dañan"
            setTimeout(function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    if (fumadas == 5)
        {
            MENSAJE.innerHTML = "Ya esta, no tienes pulmones"
            setTimeout(function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    if (fumadas == 14)
        {
            MENSAJE.innerHTML = "¿Me estas jodiendo?, tu corazon?, ya dejalo"
            setTimeout(function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    if (fumadas == 18)
        {
            MENSAJE.innerHTML = "te lo suplico detente"
            setTimeout(function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    if (fumadas == 20)
        {
            MENSAJE.innerHTML = "Olvidalo, me rindo"
            setTimeout(function(){
                MENSAJE.innerHTML = "";
            }, 2000);
        }
    actualizar()
});

