//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MENSAJES
const mensajeNotificacion = document.querySelector
('#mensajes-notificaciones');
const mensajes = document.querySelector('.mensajes');
const mensaje = mensajes.querySelectorAll('.mensaje');
const filtrarMensajes = document.querySelector('#buscar-mensajes');

//TEMA
const tema = document.querySelector('#tema');
const ventanaTema = document.querySelector('.tema-personalizacion');
const fontSizes = document.querySelectorAll('.elegir-size span');
let root = document.querySelector(':root');
const paletaColores = document.querySelectorAll('.elegir-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');





//================= SIDEBAR =================
//Eliminar la class active para todo el menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })

}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notificaciones'){
            document.querySelector('.notificaciones-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notificaciones-popup').
            style.display = 'block';
           document.querySelector('.notificaciones-conteo').
           style.display = 'none';

        }
    })

})
         //================ SIDEBAR FIN ======================

         // =============== MENSAJES =====================
    //Buscar chats
    const buscarMensaje = () => {
        const val = filtrarMensajes.value.toLowerCase();
        mensaje.forEach(chat => {
            let name = chat.querySelector('h5').textContent.toLowerCase();
            if(name.indexOf(val) != -1){
                chat.style.display = 'flex';
            } else{
                chat.style.display = 'none';
            }

        })

    }

         //Buscar chat
    filtrarMensajes.addEventListener('keyup', buscarMensaje);




    //Seleccionar mensajes dando click
    mensajeNotificacion.addEventListener('click', () => {
        mensajes.style.boxShadow = '0 0 1rem var(--color-primary)';
        mensajeNotificacion.querySelector('.notificaciones-conteo').
        style.display = 'none';
        setTimeout(() => {
            mensajes.style.boxShadow = 'none';
        }, 2000);

    })

     // =============== PERSONALIZACIÓN THEME =====================

//abrir modal
const abrirVentanaTema = () => {
    ventanaTema.style.display = 'grid';
}

// cerrar
const cerrarVentanaModal = (e) => {
    if(e.target.classList.contains('tema-personalizacion')) {
        ventanaTema.style.display = 'none';
    }
}
//cerrar modal
ventanaTema.addEventListener('click', cerrarVentanaModal);


tema.addEventListener('click', abrirVentanaTema);



     // =============== FONT SIZES=====================
     // quitar la clase active del span de font
const eliminarSelectorSize = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        eliminarSelectorSize();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        // Cambiar el font size root html
    document.querySelector('html').style.fontSize = fontSize;
    })
})

// Eliminar la clase active de los selectores de colores
const cambiarColorClassActive = () => {
    paletaColores.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// =============== Cambiar colores =====================
paletaColores.forEach(color => {
    color.addEventListener('click', () => {
        let primario;
        // Eliminar la clase active de los selectores de colores
        cambiarColorClassActive();

        if(color.classList.contains('color-1')){
            colorPrimario = 252;
        } else if(color.classList.contains('color-2')){
            colorPrimario = 52;
        } else if(color.classList.contains('color-3')){
            colorPrimario = 352;
        } else if(color.classList.contains('color-4')){
            colorPrimario = 152;
        } else if(color.classList.contains('color-5')){
            colorPrimario = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', colorPrimario);
    })
})

// =============== Cambiar valores del background =====================
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

    //Cambiar color del background
    const cambiarBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    }

    Bg1.addEventListener('click', () => {
    //Agregar clase active
    Bg1.classList.add('active');

    //eliminar clase active de los demás selectores
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //eliminar los cambios de personalización
    window.location.reload();
});

    Bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

    //Agregar clase active
    Bg2.classList.add('active');

    //eliminar clase active de los demás selectores
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    cambiarBG();
    
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

//Agregar clase active
Bg3.classList.add('active');

//eliminar clase active de los demás selectores
Bg1.classList.remove('active');
Bg2.classList.remove('active');
cambiarBG();

});
