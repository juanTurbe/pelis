const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');


	//filtro por categorias
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach( (elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			if (categoria === 'todas') {
				grid.filter('[data-categoria]');
			} else {
				grid.filter(`[data-categoria="${categoria}"]`);
			}
		});
	});

	//barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value.toLowerCase();
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});


	// listener para imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach ((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.parentNode.parentNode.dataset.descripcion;
			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	//eventlistener de boton cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	//eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});

const overlay = document.getElementById('overlay');
	document.querySelectorAll('.peliculas .caja-peli ul li img').forEach ((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.parentNode.dataset.descripcion;
			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});


const titulo = document.querySelectorAll('.item ul li:nth-child(2)');

if (window.innerWidth >= 500) {

	for(let i = 0; i < titulo.length; i++){
		let caracteres = titulo[i].textContent.length;
		let tituloPeli = titulo[i].textContent;
	
		if (caracteres >= 22) {
			titulo[i].textContent = tituloPeli.substring(0,22) + '...';
			titulo[i].style.fontSize = "14px";
		}
	}
} else {
	for(let i = 0; i < titulo.length; i++){
		let caracteres = titulo[i].textContent.length;
		let tituloPeli = titulo[i].textContent;
	
		if (caracteres >= 12) {
			titulo[i].textContent = tituloPeli.substring(0,12) + '...';
			titulo[i].style.fontSize = "14px";
			titulo[i].style.textAlign = "left";
		}
	}
}





















