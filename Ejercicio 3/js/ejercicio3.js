document.addEventListener("DOMContentLoaded",function () {

    var btnNumeroEnlaces = document.getElementById("numeroEnlaces");
    btnNumeroEnlaces.addEventListener("click",function () {
        var enlaces = document.querySelectorAll("a");
        var numeroEnlaces = enlaces.length;
        
        var divNumeroEnlaces = document.createElement("div");
        var pNumeroEnlaces = document.createElement("p");
        divNumeroEnlaces.appendChild(pNumeroEnlaces);
        pNumeroEnlaces.textContent = "Hay " + numeroEnlaces + " enlaces totales en la página";
        
        document.body.appendChild(divNumeroEnlaces);
    });

    var btnReferenciaEnlaces = document.getElementById("referenciaEnlaces");
    btnReferenciaEnlaces.addEventListener("click",function () {
        var  enlaces = document.querySelectorAll("a");
       
        let links = "";
        enlaces.forEach((link,index)=>{
            links += `Enlace ${index +1 }: ${link.href}\n`;
        });
        
        var divNumeroEnlaces = document.createElement("div");
        var pNumeroEnlaces = document.createElement("p");
        divNumeroEnlaces.appendChild(pNumeroEnlaces);
        pNumeroEnlaces.textContent = "Las referencias de los enlaces són: " + links +"\n";
        
        document.body.appendChild(divNumeroEnlaces);
    });

});