const config = {
    event: {
        defaultEventId: "cumple-marco-antonio-2027",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "Marco Antonio",
        descripcion: "Acompáñame a celebrar el cumpleaños de Marco Antonio - 08 de agosto de 2027",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Marco Antonio",
        fecha: "08-08-2027",
        fechaVisible: "08.08.2027"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/goldenhour.mp3"
    },

    evento: {
        recepcion: {
            titulo: "Recepción",
            lugar: "Tribu Terrace",
            hora: "6:00 PM",
            direccion: "KM 81.1 Ruta Nacional 14, Alotenango, Sacatepéquez.",
            ubicacionUrl: "https://maps.app.goo.gl/HuwGm2JtBUbT12Zk9"
        }
    },

    textos: {
        mensajeInvitado: "Tu presencia hará este cumpleaños aún más especial",
        mensajePases: "Hemos reservado para ti {pases}"
    },

    footer: {
        hashtag: "#MarcoAntonio2027",
        instagramUrl: "https://instagram.com/thetwodesign",
        facebookUrl: "https://facebook.com/thetwodesign",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
