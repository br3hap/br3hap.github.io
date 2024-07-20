const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


let arrProyectos = [
//     {
//         id: 1,
//         nombre: "LucyCRM®",
//         Category: "App Web",
//         Client: "Inlearning Institutos",
//         ProjectDate: "Septiembre 2021",
//         img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
//         ProjectURL: "https://inlearninginstitutos.edu.pe",
//         Detalles: `<h2>Información del Proyecto</h2><br>
//         <p>LucyCRM® es un CRM comercial, o Customer Relationship Management, es una herramienta diseñada para ayudar a las empresas a gestionar y mejorar sus relaciones con los clientes. Permite almacenar información detallada sobre los clientes, como sus datos de contacto, historial de compras, interacciones pasadas y preferencias.
//         Además de almacenar información, un CRM comercial también puede ayudar a las empresas a realizar un seguimiento de las interacciones con los clientes, como llamadas telefónicas, correos electrónicos y reuniones. Esto permite a las empresas ofrecer un servicio más personalizado y eficiente a sus clientes, lo que puede conducir a una mayor satisfacción y lealtad del cliente.        
//         En resumen, un CRM comercial es una herramienta esencial para cualquier empresa que busque gestionar de manera efectiva sus relaciones con los clientes y mejorar su rendimiento en ventas y marketing.</p>`
//     },
//     {
//         id: 2,
//         nombre: "FerCRM®",
//         Category: "App Web",
//         Client: "Inlearning Institutos",
//         ProjectDate: "Febrero 2020",
//         img: ["portfolio-details-1.jpg", "portfolio-details-2.jpg", "portfolio-details-3.jpg"],
//         ProjectURL: "https://inlearninginstitutos.edu.pe",
//         Detalles: `<h2>Información del Proyecto</h2><br>
//         <p>FerCRM® es un CRM financiero educativo es una herramienta diseñada específicamente para instituciones educativas, que desean gestionar eficazmente las relaciones con sus estudiantes, exalumnos, padres y personal académico y administrativo.
//         Este tipo de CRM permite a las instituciones educativas mantener un registro detallado de la información de contacto de los estudiantes y exalumnos, así como de su historial académico, actividades extracurriculares, logros y cualquier otra información relevante. Además, puede ayudar a realizar un seguimiento de la comunicación con los estudiantes y exalumnos, como correos electrónicos, llamadas telefónicas y reuniones, lo que permite una interacción más personalizada y efectiva.
//         Un CRM financiero educativo también puede incluir funcionalidades específicas para la gestión de matrículas, pagos, becas y ayudas financieras, lo que ayuda a las instituciones educativas a gestionar mejor sus recursos financieros y a ofrecer un mejor servicio a sus estudiantes y familias.
//         En resumen, un CRM financiero educativo es una herramienta poderosa para las instituciones educativas que desean mejorar la gestión de sus relaciones con los diferentes actores involucrados y ofrecer una experiencia educativa de alta calidad.</p>`
//     },
//     {
//         id: 3,
//         nombre: "APITeams",
//         Category: "Aplicacón",
//         Client: "Inlearning Institutos",
//         ProjectDate: "Abril 2021",
//         img: ["apiTeams-1.jpg", "apiTeams-2.jpg", "apiTeams-3.jpg"],
//         ProjectURL: "https://inlearninginstitutos.edu.pe",
//         Detalles: `<h2>Información del Proyecto</h2><br>
//         <p>La API de Microsoft Teams es una interfaz de programación de aplicaciones que permite a los desarrolladores interactuar con la plataforma de Teams para crear aplicaciones personalizadas, integraciones y bots. Permite realizar una amplia variedad de tareas, como enviar mensajes, gestionar reuniones, acceder a archivos y datos de Teams, y automatizar flujos de trabajo dentro de la aplicación. La API de Microsoft Teams se basa en estándares abiertos como REST y OAuth, lo que facilita su integración con otras aplicaciones y servicios.</p>`
//     },
//     {
//         id: 4,
//         nombre: "EVA®",
//         Category: "App Web",
//         Client: "Inlearning Institutos",
//         ProjectDate: "Febrero 2020",
//         img: ["eva-1.jpg", "eva-2.jpg", "eva-3.jpg"],
//         ProjectURL: "https://www.zegel.edu.pe",
//         Detalles: `<h2>Información del Proyecto</h2><br>
//         <p>EVA® es una plataforma digital privada que se utiliza en entornos educativos, como escuelas, colegios o universidades, para facilitar la comunicación, colaboración y gestión de información entre los miembros de la comunidad educativa. En una intranet educativa, los estudiantes, profesores, administradores y padres pueden acceder a recursos educativos, calendarios, noticias, foros de discusión, material de estudio, horarios de clases y otros servicios relevantes para la educación.</p>`
//     },
//     {
//         id: 5,
//         nombre: "MiMovistar Ecuador",
//         Category: "Movil",
//         Client: "Movistar Ecuador",
//         ProjectDate: "Septiembre 2016",
//         img: ["miMovistar-1.jpg", "miMovistar-2.jpg", "miMovistar-3.jpg"],
//         ProjectURL: "https://www.movistar.com.ec/app-mi-movistar",
//         Detalles: `<h2>Información del Proyecto</h2><br>
//         <p>MiMovistar Ecuador es una aplicación móvil desarrollada por Movistar Ecuador, una empresa de telecomunicaciones. La aplicación está diseñada para brindar a los usuarios de Movistar en Ecuador una forma conveniente de gestionar sus servicios y cuentas desde sus dispositivos móviles. Algunas de las características principales de la aplicación pueden incluir:
// <ul>
// <li>
//         Gestión de cuenta: Permite a los usuarios ver detalles de su plan, consultar saldo, revisar consumos, y pagar facturas desde la aplicación.
//         </li>
//         <li>        Recarga y compra de paquetes: Permite recargar saldo y comprar paquetes de datos, minutos y mensajes de texto directamente desde la aplicación.
//         </li>
//         <li> Atención al cliente: Proporciona acceso a servicios de atención al cliente, como chat en línea, atención telefónica y centro de ayuda.
//         </li>
//         <li> Promociones y ofertas: Muestra promociones y ofertas especiales para los usuarios de Movistar.
//         </li>
//         <li> Notificaciones: Envía notificaciones sobre consumos, promociones y novedades relacionadas con los servicios de Movistar.
//         </li>
//         </ul>
//         En resumen, MiMovistar Ecuador es una aplicación que ofrece a los usuarios de Movistar en Ecuador una forma práctica de gestionar sus servicios de telecomunicaciones y estar al tanto de promociones y ofertas especiales.</p>`
//     },
//     {
//         id: 6,
//         nombre: "iCallBack®",
//         Category: "App Web",
//         Client: "InterlanCompu",
//         ProjectDate: "Diciembre 2015",
//         img: ["iCallBack-1.jpg", "iCallBack-2.jpg", "iCallBack-3.jpg"],
//         ProjectURL: "https://www.facebook.com/interlancompu/?locale=es_LA",
//         Detalles: `<h2>Información del Proyecto</h2><br>
//         <p>iCallBack® es una aplicación que permite el regreso de llamadas desde una pagina web hacia el cliente y el operador de call center, mediante el uso de software especializado en 
//         telecomunicaciones y troncales celulares y telefonicas, gestionando la efectiva comunicación entre ellos. Usa bases de datos especificas para obtener la información del cliente y que el operador pueda darle ayuda eficaz en base a esta información.</p>`
//     }
];

function cargar() {
    let id = params.id
    let objDatos = arrProyectos.find(x => x.id == id);
    console.log(objDatos);
    let Category = document.getElementById("Category");
    Category.innerText = objDatos.Category;

    let nombre = document.getElementById("nombre");
    nombre.innerText = objDatos.nombre;

    let Client = document.getElementById("Client");
    Client.innerText = objDatos.Client;

    let ProjectDate = document.getElementById("ProjectDate");
    ProjectDate.innerText = objDatos.ProjectDate;

    let ProjectURL = document.getElementById("ProjectURL");
    ProjectURL.innerText = objDatos.ProjectURL;

    let Detalles = document.getElementById("Detalles");
    Detalles.innerHTML = objDatos.Detalles;
    let strHtml = ``;
    objDatos.img.forEach(element => {
        console.log(element)
        strHtml += `<div class="swiper-slide">
        <img src="assets/img/portfolio/${element}" alt="">
      </div>`;
    });
    let imgs = document.getElementById("imgs");
    imgs.innerHTML = strHtml;
}

document.addEventListener("DOMContentLoaded", cargar);
