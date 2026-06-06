/* ==========================================
   MENÚ DE NAVEGACIÓN
========================================== */

const btnTransporte =
    document.getElementById("btnTransporte");

const btnCompras =
    document.getElementById("btnCompras");

const btnEscasez =
    document.getElementById("btnEscasez");

const seccionTransporte =
    document.getElementById("seccionTransporte");

const seccionCompras =
    document.getElementById("seccionCompras");

const seccionEscasez =
    document.getElementById("seccionEscasez");

/* MOSTRAR CASO C */

btnTransporte.addEventListener(
    "click",
    function () {

        seccionTransporte.classList.remove("oculto");

        seccionCompras.classList.add("oculto");

        seccionEscasez.classList.add("oculto");

        seccionTransporte.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);

/* MOSTRAR CASO D */

btnCompras.addEventListener(
    "click",
    function () {

        seccionCompras.classList.remove("oculto");

        seccionTransporte.classList.add("oculto");

        seccionEscasez.classList.add("oculto");

        seccionCompras.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);

/* MOSTRAR CASO E */

btnEscasez.addEventListener(
    "click",
    function () {

        seccionEscasez.classList.remove("oculto");

        seccionCompras.classList.add("oculto");

        seccionTransporte.classList.add("oculto");

        seccionEscasez.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);

/* ==========================================
   CASO C
   SIMULADOR DE TRANSPORTE
========================================== */

const calcularTransporte =
    document.getElementById("calcularTransporte");

const limpiarTransporte =
    document.getElementById("limpiarTransporte");

calcularTransporte.addEventListener(
    "click",
    simularTransporte
);

limpiarTransporte.addEventListener(
    "click",
    limpiarCasoC
);

function simularTransporte() {

    let distanciaNormal =
        parseFloat(
            document.getElementById("distanciaNormal").value
        );

    let distanciaDesvio =
        parseFloat(
            document.getElementById("distanciaDesvio").value
        );

    let costoKm =
        parseFloat(
            document.getElementById("costoKm").value
        );

    let viajesSemana =
        parseInt(
            document.getElementById("viajesSemana").value
        );

    if (
        isNaN(distanciaNormal) ||
        isNaN(distanciaDesvio) ||
        isNaN(costoKm) ||
        isNaN(viajesSemana)
    ) {

        alert(
            "Complete todos los campos."
        );

        return;
    }

    let costoNormal =
        distanciaNormal * costoKm;

    let costoDesvio =
        distanciaDesvio * costoKm;

    let diferencia =
        costoDesvio - costoNormal;

    let semanal =
        diferencia * viajesSemana;

    let mensual =
        semanal * 4;

    let resultado =
        document.getElementById(
            "resultadoTransporte"
        );

    resultado.innerHTML =

        "<strong>Costo normal:</strong> Bs "
        + costoNormal.toFixed(2) +

        "<br><strong>Costo con desvío:</strong> Bs "
        + costoDesvio.toFixed(2) +

        "<br><strong>Diferencia:</strong> Bs "
        + diferencia.toFixed(2) +

        "<br><strong>Costo adicional semanal:</strong> Bs "
        + semanal.toFixed(2) +

        "<br><strong>Costo adicional mensual:</strong> Bs "
        + mensual.toFixed(2);

    resultado.className =
        "resultado";

    if (mensual < 100) {

        resultado.classList.add(
            "normal"
        );

    }

    else if (mensual < 300) {

        resultado.classList.add(
            "advertencia"
        );

    }

    else {

        resultado.classList.add(
            "critico"
        );

    }

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function limpiarCasoC() {

    document.getElementById(
        "distanciaNormal"
    ).value = "";

    document.getElementById(
        "distanciaDesvio"
    ).value = "";

    document.getElementById(
        "costoKm"
    ).value = "";

    document.getElementById(
        "viajesSemana"
    ).value = "";

    document.getElementById(
        "resultadoTransporte"
    ).innerHTML = "";

}

/* ==========================================
   CASO D
   COMPRAS FAMILIARES
========================================== */

const calcularCompras =
    document.getElementById(
        "calcularCompras"
    );

const limpiarCompras =
    document.getElementById(
        "limpiarCompras"
    );

calcularCompras.addEventListener(
    "click",
    simularCompras
);

limpiarCompras.addEventListener(
    "click",
    limpiarCasoD
);

function simularCompras() {

    let presupuesto =
        parseFloat(
            document.getElementById(
                "presupuesto"
            ).value
        );

    let producto =
        document.getElementById(
            "producto"
        ).value;

    let precio =
        parseFloat(
            document.getElementById(
                "precio"
            ).value
        );

    let cantidad =
        parseInt(
            document.getElementById(
                "cantidad"
            ).value
        );

    if (
        producto === "" ||
        isNaN(presupuesto) ||
        isNaN(precio) ||
        isNaN(cantidad)
    ) {

        alert(
            "Complete todos los campos."
        );

        return;
    }

    let total =
        precio * cantidad;

    let saldo =
        presupuesto - total;

    let resultado =
        document.getElementById(
            "resultadoCompras"
        );

    let clasificacion = "";

    resultado.className =
        "resultado";

    if (total <= presupuesto) {

        if (total < presupuesto * 0.50) {

            clasificacion =
                "Gasto Bajo";

            resultado.classList.add(
                "normal"
            );

        }

        else if (total < presupuesto * 0.80) {

            clasificacion =
                "Gasto Medio";

            resultado.classList.add(
                "advertencia"
            );

        }

        else {

            clasificacion =
                "Gasto Alto";

            resultado.classList.add(
                "critico"
            );

        }

        resultado.innerHTML =

            "<strong>Producto:</strong> "
            + producto +

            "<br><strong>Total de compra:</strong> Bs "
            + total.toFixed(2) +

            "<br><strong>Saldo restante:</strong> Bs "
            + saldo.toFixed(2) +

            "<br><strong>Clasificación:</strong> "
            + clasificacion;
    }

    else {

        resultado.classList.add(
            "critico"
        );

        resultado.innerHTML =

            "<strong>Total de compra:</strong> Bs "
            + total.toFixed(2) +

            "<br><strong>Faltan:</strong> Bs "
            + Math.abs(
                saldo
            ).toFixed(2) +

            "<br><strong>Estado:</strong> Presupuesto insuficiente";
    }

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function limpiarCasoD() {

    document.getElementById(
        "presupuesto"
    ).value = "";

    document.getElementById(
        "producto"
    ).value = "";

    document.getElementById(
        "precio"
    ).value = "";

    document.getElementById(
        "cantidad"
    ).value = "";

    document.getElementById(
        "resultadoCompras"
    ).innerHTML = "";

}

/* ==========================================
   CASO E
   RUMOR DE ESCASEZ
========================================== */

const calcularEscasez =
    document.getElementById(
        "calcularEscasez"
    );

const limpiarEscasez =
    document.getElementById(
        "limpiarEscasez"
    );

calcularEscasez.addEventListener(
    "click",
    simularEscasez
);

limpiarEscasez.addEventListener(
    "click",
    limpiarCasoE
);

function simularEscasez() {

    let demanda =
        parseFloat(
            document.getElementById(
                "demanda"
            ).value
        );

    let porcentaje =
        parseFloat(
            document.getElementById(
                "porcentaje"
            ).value
        );

    let stock =
        parseFloat(
            document.getElementById(
                "stock"
            ).value
        );

    let familias =
        parseInt(
            document.getElementById(
                "familias"
            ).value
        );

    if (
        isNaN(demanda) ||
        isNaN(porcentaje) ||
        isNaN(stock) ||
        isNaN(familias)
    ) {

        alert(
            "Complete todos los campos."
        );

        return;
    }

    let nuevaDemanda =

        demanda +

        (
            demanda *
            porcentaje / 100
        );

    let totalDemanda =

        nuevaDemanda *
        familias;

    let restante =

        stock -
        totalDemanda;

    let resultado =
        document.getElementById(
            "resultadoEscasez"
        );

    resultado.className =
        "resultado";

    if (restante >= 0) {

        resultado.classList.add(
            "normal"
        );

        resultado.innerHTML =

            "<strong>Nueva demanda:</strong> "
            + nuevaDemanda.toFixed(2) +

            "<br><strong>Demanda total:</strong> "
            + totalDemanda.toFixed(2) +

            "<br><strong>Stock restante:</strong> "
            + restante.toFixed(2) +

            "<br><strong>Estado:</strong> Abastecimiento suficiente";
    }

    else if (restante > -50) {

        resultado.classList.add(
            "advertencia"
        );

        resultado.innerHTML =

            "<strong>Nueva demanda:</strong> "
            + nuevaDemanda.toFixed(2) +

            "<br><strong>Demanda total:</strong> "
            + totalDemanda.toFixed(2) +

            "<br><strong>Déficit:</strong> "
            + Math.abs(
                restante
            ).toFixed(2) +

            "<br><strong>Estado:</strong> Posible escasez";
    }

    else {

        resultado.classList.add(
            "critico"
        );

        resultado.innerHTML =

            "<strong>Nueva demanda:</strong> "
            + nuevaDemanda.toFixed(2) +

            "<br><strong>Demanda total:</strong> "
            + totalDemanda.toFixed(2) +

            "<br><strong>Déficit:</strong> "
            + Math.abs(
                restante
            ).toFixed(2) +

            "<br><strong>Estado:</strong> Escasez crítica";
    }

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function limpiarCasoE() {

    document.getElementById(
        "demanda"
    ).value = "";

    document.getElementById(
        "porcentaje"
    ).value = "";

    document.getElementById(
        "stock"
    ).value = "";

    document.getElementById(
        "familias"
    ).value = "";

    document.getElementById(
        "resultadoEscasez"
    ).innerHTML = "";

}