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
function listarEstudiantes() {
    const lista = [];
    for (let i = 0; i < estudiantes.length; i++) {
        lista.push(estudiantes[i]);
    }
    return lista;
}

//Función para buscar por ID
function buscarPorId(id) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === id) {
            return estudiantes[i];
        }
    }
    return "El estudiante no fue encontrado";
}

//Función para buscar estudiantes por carrera
function buscarPorCarrera(carrera) {
    const resultados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].carrera === carrera) {
            resultados.push(estudiantes[i]);
        }
    }
    return resultados;
}

//Función para obtener estudiantes aprobados
function obtenerAprobados() {
    const aprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio >= 3.0) {
            aprobados.push(estudiantes[i]);
        }
    }
    return aprobados;
}

//Función para obtener estudiantes reprobados
function obtenerReprobados() {
    const reprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio < 3.0) {
            reprobados.push(estudiantes[i]);
        }
    }
    return reprobados;
}

//Función para calcular el promedio en general
function calcularPromedioGeneral() {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        suma += estudiantes[i].promedio;
    }
    return estudiantes.length === 0 ? 0 : suma / estudiantes.length;
}

//Función para encontrar al mejor estudiante
function mejorEstudiante() {
    let mejor = estudiantes[0];
    for (let i = 1; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio > mejor.promedio) {
            mejor = estudiantes[i];
        }
    }
    return mejor;
}

//Función para encontrar al estudiante con peor promedio
function menorPromedio() {
    let menor = estudiantes[0];
    for (let i = 1; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio < menor.promedio) {
            menor = estudiantes[i];
        }
    }
    return menor;
}

//Función para contar cuantos estudiantes hay por carrera
function contarPorCarrera() {
    const conteo = {};
    for (let i = 0; i < estudiantes.length; i++) {
        const carrera = estudiantes[i].carrera;
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
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].semestre === semestre) {
            resultados.push(estudiantes[i]);
        }
    }
    return resultados;
}

//Función para obtener estudiantes que son mayores de edad
function mayoresDeEdad() {
    const resultados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].edad >= 18) {
            resultados.push(estudiantes[i]);
        }
    }
    return resultados;
}

//Función para crear un reporte general
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
function rankingPorPromedio() {
    const copia = [];
    for (let i = 0; i < estudiantes.length; i++) {
        copia.push(estudiantes[i]);
    }

    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = i + 1; j < copia.length; j++) {
            if (copia[j].promedio > copia[i].promedio) {
                const temporal = copia[i];
                copia[i] = copia[j];
                copia[j] = temporal;
            }
        }
    }

    console.log("----- RANKING -----");
    console.log("");
    for (let i = 0; i < copia.length; i++) {
        console.log((i + 1) + ". " + copia[i].nombre + " - " + copia[i].promedio);
    }
}

//Filter pero para las rutas de Express
function filtrarPorAprobados() {
    const lista = obtenerAprobados();
    let texto = "Estudiantes aprobados:\n";
    for (let i = 0; i < lista.length; i++) {
        texto += " - " + lista[i].nombre + " (promedio " + lista[i].promedio + ")\n";
    }
    return texto;
}

//Ejecución en consola
console.log(".....SISTEMA DE GESTIÓN DE ESTUDIANTES .....");
console.log("--- Listado completo ---");
const todos = listarEstudiantes();
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].id + ". " + todos[i].nombre + " - " + todos[i].carrera + " - Semestre " + todos[i].semestre + " - Promedio " + todos[i].promedio);
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
for (let i = 0; i < ingenieria.length; i++) {
    console.log(" - " + ingenieria[i].nombre);
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
for (let i = 0; i < mayores.length; i++) {
    console.log(" - " + mayores[i].nombre + " (" + mayores[i].edad + " años)");
}

generarReporte();
console.log("");
rankingPorPromedio();

//Aquí ponemos la información que se va a mandar para express
app.get("/", (req, res) => {
    res.send("Sistema de Gestión de Estudiantes. Rutas: /estudiantes, /estudiantes/:id, /estudiantes/carrera/:carrera, /aprobados, /reprobados, /promedio-general, /mejor, /peor, /conteo-carreras, /semestre/:semestre, /mayores-de-edad, /reporte, /ranking");
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

app.get("/aprobados", (req, res) => res.json(obtenerAprobados()));

app.get("/reprobados", (req, res) => res.json(obtenerReprobados()));

app.get("/promedio-general", (req, res) => {
    res.json({ promedioGeneral: calcularPromedioGeneral() });
});

app.get("/mejor", (req, res) => res.json(mejorEstudiante()));

app.get("/peor", (req, res) => res.json(menorPromedio()));

app.get("/conteo-carreras", (req, res) => res.json(contarPorCarrera()));

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
    for (let i = 0; i < estudiantes.length; i++) {
        copia.push(estudiantes[i]);
    }
    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = i + 1; j < copia.length; j++) {
            if (copia[j].promedio > copia[i].promedio) {
                const temporal = copia[i];
                copia[i] = copia[j];
                copia[j] = temporal;
            }
        }
    }
    res.json(copia);
});

const resumenFunciones = filtrarPorAprobados();
console.log("\n" + resumenFunciones);

//Pregunta final
//Cuando dividimos el código en funciones, después lo podemos reutilizar, es más organizado y así también cada parte tiene su propia
//tarea entonces cada una se puede trabajar de manera independiente.
