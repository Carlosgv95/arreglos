const propiedades1 = [
    {
        id: 'alquiler1',
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        id: 'alquiler2',
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        id: 'alquiler3',
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        id: 'alquiler4',
        nombre: 'Arriendo de Departamento en Manquehue Sur',
        src: 'https://s3.amazonaws.com/properties-media/thumbnail/7bb310d2-e1bd-430c-a223-e4df09c64f95img20241128132736800hdrae.jpg',
        descripcion: 'Grandioso departamento en arriendo, ubicado en la comuna de Las Condes, con una superficie construida de 140.00 m² y superficie total de 165.00 m². ',
        ubicacion: 'Manquehue Sur 329, Las Condes',
        habitaciones: 4,
        baños: 4,
        costo: 3500,
        smoke: true,
        pets: true
    }]

const alquileres = document.getElementById("enAlquiler")
let html1 = ''

for (const data of propiedades1) {

    const smokeIcon = data.smoke ? '<i class="fas fa-smoking" style="color: green"></i>' : '<i class="fas fa-ban" style="color: red"></i>';
    const petsIcon = data.pets ? '<i class="fas fa-paw" style="color: green"></i>' : '<i class="fas fa-ban" style="color: red"></i>';
    const smokeColor = data.smoke ? 'style="color: green;"' : 'style="color: red;"';
    const petsColor = data.pets ? 'style="color: green;"' : 'style="color: red;"';

    html1 += `
    <div class="card1">
        <img src="${data.src}" alt="${data.src}">
        <h4>${data.nombre}</h4>
        <p>${data.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i>${data.ubicacion}</p>
                <div class="icons">
            <p><i class="fas fa-bed"></i>${data.habitaciones}</p>
            <p><i class="fas fa-bath"></i>${data.baños}</p>
        </div>
        <p>Precio: $${data.costo}</p>
        <p ${smokeColor}>${smokeIcon} ${data.smoke ? "Permitido fumar" : "No se permite fumar"}</p>
        <p ${petsColor}>${petsIcon} ${data.pets ? "Mascotas permitidas" : "No se permiten mascotas"} </p>
    </div>
        `
}

alquileres.innerHTML = html1

