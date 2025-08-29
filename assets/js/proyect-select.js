document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const arreglo = [
        {
            title: 'FAGIA - API Rest en rust',
            description:  `Fagia es una  un API Rest para manejar las cantidades de alimentos donados, la información de las organizaciones y la de los donadores, busca apoyar a instituciones benéficas a contactar con donadores de alimentos de una manera rápida y sencilla.`,
            github_link: 'https://github.com/sebatihm/fagia',
            image_dir: "./assets/images/proyect-images/1.png"
        },
        {
            title: "Laravel Post - Practice Laravel",
            description: ` Laravel Post en un proyecto realizado con el fin de aprender, conocer y familiarizarme con laravel 
                            es un sistema en el cual todos pueden realizar post sobre temas de interes.
                `,
            github_link: 'https://github.com/sebatihm/laravel-practice',
            image_dir: "./assets/images/proyect-images/2.jpg"
        },
        {
            title: "VirtX API",
            description: `API Rest creada para manejar los procesos de la pagina web de VirtX, incluyendo gestion
                de usuarios y cuentas.`,
            github_link:'https://github.com/sebatihm/virtx-api',
            image_dir: './assets/images/proyect-images/3.jpg'
        },
        {
            title: "YT Video Downloader",
            description: `Aplicacion de CLI la cual permite descargar videos de youtube,
                            mediante la url, y permite llevar un control de videos descargados en la
                            memoria ram.
            `,
            github_link: "https://github.com/sebatihm/yt-downloader-example",
            image_dir: "./assets/images/proyect-images/4.jpg"
        },

    ];

    document.getElementById('back').addEventListener('click', function () {
        if(index <= 0){
            index = arreglo.length - 1;
        }else{
            index = index - 1;
        }
        loadProjectResources(index);

    });

    document.getElementById('back-mobile').addEventListener('click', function () {
        if(index <= 0){
            index = arreglo.length - 1;
        }else{
            index = index - 1;
        }
        loadProjectResources(index);

    });

    document.getElementById('next').addEventListener('click', function () {
        if( index >= arreglo.length - 1){
            index = 0;
        }else{
            index = index + 1;
        }
        loadProjectResources(index);

    });
    
    document.getElementById('next-mobile').addEventListener('click', function () {
        if( index >= arreglo.length - 1){
            index = 0;
        }else{
            index = index + 1;
        }
        loadProjectResources(index);

    });

    function loadProjectResources(index){
        if(window.innerWidth > 800){
            document.getElementById('proyect-title').innerText = arreglo[index].title;
            document.getElementById('proyect-description').innerText = arreglo[index].description;
            document.getElementById('proyect-github').setAttribute("href", arreglo[index].github_link);
            document.getElementById('proyect-image').setAttribute("src", arreglo[index].image_dir );

        }else{  
            document.getElementById('proyect-title-mobile').innerText = arreglo[index].title;
            document.getElementById('proyect-description-mobile').innerText = arreglo[index].description;
            document.getElementById('proyect-github-mobile').setAttribute("href", arreglo[index].github_link);
            // document.getElementById('proyect-image-mobile').setAttribute("src", arreglo[index].image_dir );

        }


    }

    loadProjectResources(index);



});   