//Colocamos express
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor Express escuchando en http://localhost:" + PORT);
});

//Hacemos la lista de estudiantes que vamos a utilizar
const estudiantes = [
    { id: 1, nombre: "Andrés", edad: 21, carrera: "Ingeniería de Sistemas", semestre: 5, promedio: 4.2 },
    { id: 2, nombre: "Laura", edad: 20, carrera: "Administración", semestre: 4, promedio: 3.8 },
    { id: 3, nombre: "Carlos", edad: 24, carrera: "Ingeniería de Sistemas", semestre: 7, promedio: 2.9 },
    { id: 4, nombre: "Mariana", edad: 22, carrera: "Contaduría", semestre: 6, promedio: 4.5 },
    { id: 5, nombre: "Juan", edad: 19, carrera: "Ingeniería de Sistemas", semestre: 3, promedio: 3.2 },
    { id: 6, nombre: "Sofía", edad: 23, carrera: "Administración", semestre: 8, promedio: 4.7 },
    { id: 7, nombre: "Daniel", edad: 25, carrera: "Contaduría", semestre: 9, promedio: 2.7 },
    { id: 8, nombre: "Valentina", edad: 21, carrera: "Ingeniería de Sistemas", semestre: 5, promedio: 3.9 },
    { id: 9, nombre: "Sebastián", edad: 22, carrera: "Administración", semestre: 6, promedio: 3.4 },
    { id: 10, nombre: "Camila", edad: 20, carrera: "Contaduría", semestre: 4, promedio: 4.1 }
];

//Función para listar estudiantes
//Sirve para recorrer el array y copia lo que tenga
function listarEstudiantes() {
    const lista = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        lista.push(estudiantes[indice]);
    }
    return lista;
}

//Función para buscar por ID
//Busca el dato que coinsida con el parámetro
function buscarPorId(id) {
    for (let indice = 0; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].id === id) {
            return estudiantes[indice];
        }
    }
    return "El estudiante no fue encontrado";
}

//Función para buscar estudiantes por carrera
//Busca en el array y agrupa todos a los que le coinsida la carrera
function buscarPorCarrera(carrera) {
    const resultados = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].carrera === carrera) {
            resultados.push(estudiantes[indice]);
        }
    }
    return resultados;
}

//Función para obtener estudiantes aprobados
//Saca los datos donde el promedio es menor que tres
function obtenerAprobados() {
    const aprobados = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].promedio >= 3.0) {
            aprobados.push(estudiantes[indice]);
        }
    }
    return aprobados;
}

//Función para obtener estudiantes reprobados
//Saca los datos donde el promedio es mayor que tres
function obtenerReprobados() {
    const reprobados = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].promedio < 3.0) {
            reprobados.push(estudiantes[indice]);
        }
    }
    return reprobados;
}

//Función para calcular el promedio en general
function calcularPromedioGeneral() {
    let suma = 0;
    for (let indice = 0; indice < estudiantes.length; indice++) {
        suma += estudiantes[indice].promedio;
    }
    return estudiantes.length === 0 ? 0 : suma / estudiantes.length;
}

//Función para encontrar al mejor estudiante
function mejorEstudiante() {
    let mejor = estudiantes[0];
    for (let indice = 1; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].promedio > mejor.promedio) {
            mejor = estudiantes[indice];
        }
    }
    return mejor;
}

//Función para encontrar al estudiante con peor promedio
function menorPromedio() {
    let menor = estudiantes[0];
    for (let indice = 1; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].promedio < menor.promedio) {
            menor = estudiantes[indice];
        }
    }
    return menor;
}

//Función para contar cuantos estudiantes hay por carrera
//Si la carrera no existe se crea con valor de uno, pero si ya existe le suma uno
function contarPorCarrera() {
    const conteo = {};
    for (let indice = 0; indice < estudiantes.length; indice++) {
        const carrera = estudiantes[indice].carrera;
        if (conteo[carrera] === undefined) {
            conteo[carrera] = 1;
        } else {
            conteo[carrera] = conteo[carrera] + 1;
        }
    }
    return conteo;
}

//Función para buscar estudiantes por semestre
function buscarPorSemestre(semestre) {
    const resultados = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].semestre === semestre) {
            resultados.push(estudiantes[indice]);
        }
    }
    return resultados;
}

//Función para obtener estudiantes que son mayores de edad
function mayoresDeEdad() {
    const resultados = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        if (estudiantes[indice].edad >= 18) {
            resultados.push(estudiantes[indice]);
        }
    }
    return resultados;
}

//Función para crear un reporte general
//Llama las funciones anteriores para hacer el reporte
function generarReporte() {
    console.log("---------- REPORTE ACADÉMICO ----------");
    console.log("");
    console.log("Total de estudiantes: " + listarEstudiantes().length);
    console.log("Estudiantes aprobados: " + obtenerAprobados().length);
    console.log("Estudiantes reprobados: " + obtenerReprobados().length);
    console.log("Promedio general: " + calcularPromedioGeneral().toFixed(2));
    const mejor = mejorEstudiante();
    console.log("Mejor estudiante: " + mejor.nombre + " - " + mejor.promedio);
    const peor = menorPromedio();
    console.log("Estudiante con menor promedio: " + peor.nombre + " - " + peor.promedio);
    console.log("");
    console.log("---------------------------------------");
}

//Reto - Ranking de mayor a menor promedio
function ranking() {
    const copia = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        copia.push(estudiantes[indice]);
    }

    for (let indice = 0; indice < copia.length - 1; indice++) {
        for (let siguiente = indice + 1; siguiente < copia.length; siguiente++) {
            if (copia[siguiente].promedio > copia[indice].promedio) {
                const temporal = copia[indice];
                copia[indice] = copia[siguiente];
                copia[siguiente] = temporal;
            }
        }
    }

    console.log("----- RANKING -----");
    console.log("");
    for (let indice = 0; indice < copia.length; indice++) {
        console.log((indice + 1) + ". " + copia[indice].nombre + " - " + copia[indice].promedio);
    }
}

//Filter pero para las rutas de Express
function filtrarPorAprobados() {
    const lista = obtenerAprobados();
    let texto = "Estudiantes aprobados:\n";
    for (let indice = 0; indice < lista.length; indice++) {
        texto += " - " + lista[indice].nombre + " (promedio " + lista[indice].promedio + ")\n";
    }
    return texto;
}

//Ejecución en consola
console.log(".....SISTEMA DE GESTIÓN DE ESTUDIANTES .....");
console.log("--- Listado completo ---");
const todos = listarEstudiantes();
for (let indice = 0; indice < todos.length; indice++) {
    console.log(todos[indice].id + ". " + todos[indice].nombre + " - " + todos[indice].carrera + " - Semestre " + todos[indice].semestre + " - Promedio " + todos[indice].promedio);
}
console.log("");
console.log("--- Buscar por ID 6 ---");
console.log(buscarPorId(6));
console.log("");
console.log("--- Buscar por ID 999 ---");
console.log(buscarPorId(999));
console.log("");
console.log("--- Estudiantes de Ingeniería de Sistemas ---");
const ingenieria = buscarPorCarrera("Ingeniería de Sistemas");
for (let indice = 0; indice < ingenieria.length; indice++) {
    console.log(" - " + ingenieria[indice].nombre);
}
console.log("");
console.log("--- Conteo por carrera ---");
const conteo = contarPorCarrera();
for (const carrera in conteo) {
    console.log(carrera + ": " + conteo[carrera]);
}
console.log("");
console.log("--- Mayores de edad (18 o más) ---");
const mayores = mayoresDeEdad();
for (let indice = 0; indice < mayores.length; indice++) {
    console.log(" - " + mayores[indice].nombre + " (" + mayores[indice].edad + " años)");
}

generarReporte();
console.log("");
ranking();

//Aquí ponemos la información que se va a mandar para express
app.get("/", (req, res) => {
    res.send("Sistema de Gestión de Estudiantes. Rutas: /estudiantes, /estudiantes/:id, /estudiantes/carrera/:carrera, /estudiantes-aprobados, /estudiantes-reprobados, /promedio-general, /mejor-estudiante, /peor-estudiante, /estudiantes-por-carrera, /semestre/:semestre, /mayores-de-edad, /reporte, /ranking");
});

app.get("/estudiantes", (req, res) => res.json(listarEstudiantes()));

app.get("/estudiantes/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const resultado = buscarPorId(id);
    res.json(resultado);
});

app.get("/estudiantes/carrera/:carrera", (req, res) => {
    const resultados = buscarPorCarrera(req.params.carrera);
    res.json(resultados.length > 0 ? resultados : "No se encontraron estudiantes de esa carrera");
});

app.get("/estudiantes-aprobados", (req, res) => res.json(obtenerAprobados()));

app.get("/estudiantes-reprobados", (req, res) => res.json(obtenerReprobados()));

app.get("/promedio-general", (req, res) => {
    res.json({ promedioGeneral: calcularPromedioGeneral() });
});

app.get("/mejor-estudiante", (req, res) => res.json(mejorEstudiante()));

app.get("/peor-estudiante", (req, res) => res.json(menorPromedio()));

app.get("/estudiantes-por-carrera", (req, res) => res.json(contarPorCarrera()));

app.get("/semestre/:semestre", (req, res) => {
    const semestre = parseInt(req.params.semestre, 10);
    const resultados = buscarPorSemestre(semestre);
    res.json(resultados.length > 0 ? resultados : "No se encontraron estudiantes de ese semestre");
});

app.get("/mayores-de-edad", (req, res) => {
    const resultados = mayoresDeEdad();
    res.json(resultados.length > 0 ? resultados : "No hay estudiantes mayores de edad");
});

app.get("/reporte", (req, res) => {
    const reporte =
        "---------- REPORTE ACADÉMICO ----------" +
        "Total de estudiantes: " + listarEstudiantes().length + "\n" +
        "Estudiantes aprobados: " + obtenerAprobados().length + "\n" +
        "Estudiantes reprobados: " + obtenerReprobados().length + "\n" +
        "Promedio general: " + calcularPromedioGeneral().toFixed(2) + "\n" +
        "Mejor estudiante: " + mejorEstudiante().nombre + " - " + mejorEstudiante().promedio + "\n" +
        "Estudiante con menor promedio: " + menorPromedio().nombre + " - " + menorPromedio().promedio + "\n\n" +
        "---------------------------------------";
    res.send(reporte);
});

app.get("/ranking", (req, res) => {
    const copia = [];
    for (let indice = 0; indice < estudiantes.length; indice++) {
        copia.push(estudiantes[indice]);
    }
    for (let indice = 0; indice < copia.length - 1; indice++) {
        for (let siguiente = indice + 1; siguiente < copia.length; siguiente++) {
            if (copia[siguiente].promedio > copia[indice].promedio) {
                const temporal = copia[indice];
                copia[indice] = copia[siguiente];
                copia[siguiente] = temporal;
            }
        }
    }
    res.json(copia);
});

const resumenFunciones = filtrarPorAprobados();
console.log("\n" + resumenFunciones);

//Pregunta final
//Cuando dividimos el código en funciones, después lo podemos reutilizar, 
//es más organizado y así también cada parte tiene su propia tarea entonces cada una se puede trabajar 
//de manera independiente.
