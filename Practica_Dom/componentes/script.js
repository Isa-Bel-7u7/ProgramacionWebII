// Funcionalidad 1: Validación del formulario de contacto
const validarFormulario = () => {
    const formulario = document.querySelector('.rodapePrincipal-contatoForm');
    const emailInput = document.getElementById('email-contato');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Por favor ingrese su email');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor ingrese un email válido');
            return;
        }
        
        alert(`Gracias por suscribirte! Te enviaremos novedades a: ${email}`);
        emailInput.value = '';
    });
};


const efectoCompra = () => {
    const botonCompra = document.getElementById('polo');
    
    botonCompra.addEventListener('click', () => {
        
        botonCompra.textContent = 'Añadiendo al carrito...';
        botonCompra.style.backgroundColor = '#4DBA7A';
        
        setTimeout(() => {
            botonCompra.textContent = '¡Añadido!';
            setTimeout(() => {
                botonCompra.textContent = 'Compra ya';
                botonCompra.style.backgroundColor = '#ec6e5a';
            }, 1500);
        }, 1000);
        
        
        const carrito = document.createElement('span');
        carrito.className = 'contador-carrito';
        carrito.textContent = '1';
        carrito.style.position = 'absolute';
        carrito.style.backgroundColor = 'red';
        carrito.style.color = 'white';
        carrito.style.borderRadius = '50%';
        carrito.style.padding = '2px 6px';
        carrito.style.fontSize = '12px';
        carrito.style.marginLeft = '5px';
        
        
        const contadorExistente = document.querySelector('.contador-carrito');
        if (contadorExistente) {
            contadorExistente.textContent = parseInt(contadorExistente.textContent) + 1;
        } else {
            const nav = document.querySelector('.headerPrincipal-nav');
            const linkApp = document.querySelector('.headerPrincipal-nav-link-app');
            linkApp.appendChild(carrito);
        }
    });
};


const filtrarProductos = () => {
    const productos = document.querySelectorAll('.contenidoPrincipal-productos-link');
    const categorias = ['Ropa', 'Zapatos', 'Accesorios'];
    
    
    const contenedorFiltros = document.createElement('div');
    contenedorFiltros.className = 'filtro-productos';
    contenedorFiltros.style.margin = '20px 0';
    contenedorFiltros.style.display = 'flex';
    contenedorFiltros.style.justifyContent = 'center';
    contenedorFiltros.style.gap = '10px';
    
    
    const botonTodos = document.createElement('button');
    botonTodos.textContent = 'Todos';
    botonTodos.className = 'filtro-btn';
    botonTodos.addEventListener('click', () => {
        productos.forEach(producto => producto.style.display = 'block');
    });
    contenedorFiltros.appendChild(botonTodos);
    
    
    categorias.forEach(categoria => {
        const boton = document.createElement('button');
        boton.textContent = categoria;
        boton.className = 'filtro-btn';
        boton.addEventListener('click', () => {
            productos.forEach(producto => {
                if (producto.textContent.includes(categoria)) {
                    producto.style.display = 'block';
                } else {
                    producto.style.display = 'none';
                }
            });
        });
        contenedorFiltros.appendChild(boton);
    });
    
    
    const subtitulo = document.querySelector('.subtitulo');
    subtitulo.insertAdjacentElement('afterend', contenedorFiltros);
    
    
    const style = document.createElement('style');
    style.textContent = `
        .filtro-btn {
            padding: 8px 16px;
            background-color: #ff8c91;
            color: #a0346e;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .filtro-btn:hover {
            background-color: #a0346e;
            color: white;
        }
        
        .filtro-btn:active {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
};


document.addEventListener('DOMContentLoaded', () => {
    validarFormulario();
    efectoCompra();
    filtrarProductos();
});