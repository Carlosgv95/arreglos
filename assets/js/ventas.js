const propiedades2 = [
    {
        id: 'ventas1',
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        id: 'ventas2',
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        id: 'ventas3',
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        id: 'ventas4',
        nombre: 'Arriendo de Departamento en Presidente Riesco',
        src: 'https://s3.amazonaws.com/properties-media/thumbnail/e1258a84-62b6-433b-86b0-039d8809dc80img20240820wa0058.jpg',
        descripcion: 'Descubre este amplio y elegante departamento ubicado en Presidente Riesco 4005',
        ubicacion: 'Av. Presidente Riesco 4005',
        habitaciones: 2,
        baños: 2,
        costo: 3000,
        smoke: true,
        pets: false
    }]


const ventas = document.getElementById("enVenta")
let html2 = ''

for (const data2 of propiedades2) {

    const smokeIcon = data2.smoke ? '<i class="fas fa-smoking" style="color: green"></i>' : '<i class="fas fa-ban" style="color: red"></i>';
    const petsIcon = data2.pets ? '<i class="fas fa-paw" style="color: green"></i>' : '<i class="fas fa-ban" style="color: red"></i>';
    const smokeColor = data2.smoke ? 'style="color: green;"' : 'style="color: red;"';
    const petsColor = data2.pets ? 'style="color: green;"' : 'style="color: red;"';

    html2 += `
    <div class="card2">
        <img src="${data2.src}" alt="${data2.src}">
        <h4>${data2.nombre}</h4>
        <p>${data2.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i>${data2.ubicacion}</p>
        <div class="icons">
            <p><i class="fas fa-bed"></i>${data2.habitaciones}</p>
            <p><i class="fas fa-bath"></i>${data2.baños}</p>
        </div>
        <p>Precio: $${data2.costo}</p>
        <p ${smokeColor}>${smokeIcon} ${data2.smoke ? "Permitido fumar" : "No se permite fumar"}</p>
        <p ${petsColor}>${petsIcon} ${data2.pets ? "Mascotas permitidas" : "No se permiten mascotas"} </p>
    </div>
        `
}

ventas.innerHTML = html2