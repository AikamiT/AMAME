document.addEventListener('DOMContentLoaded', () => {
    const btnInicio = document.getElementById('btnInicio');
    const btnDetener = document.getElementById('btnDetener');
    const mensaje = document.getElementById('mensaje');
    const titulo = document.getElementById('quieres');
    const gif = document.getElementById('imagen');
    
    let escala = 1;
    let contador = 0;
    const incremento = 2;
    const anchoOriginal = btnDetener.offsetWidth;
    const textos = ["¿Segura?", "Presiona aquí", "¿Por favor?", "Ándale :(", "ACEPTA", "Bueno", "¿Aceptas? :)"];
    const emojis = ["💚", "🩵", "✨", "💫", "💓", "❤️‍🔥", "❤️", "🌟"];

    function crearExplosion() {
        // Crear 20 emojis de explosión
        for(let i = 0; i < 20; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'explosion';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Posición aleatoria alrededor del botón
            const rect = btnDetener.getBoundingClientRect();
            const x = rect.left + rect.width/2 + (Math.random() - 0.5) * 800;
            const y = rect.top + rect.height/2 + (Math.random() - 0.5) * 400;
            
            emoji.style.left = `${x}px`;
            emoji.style.top = `${y}px`;
            emoji.style.animationDelay = `${Math.random() * 0.5}s`;
            
            document.body.appendChild(emoji);
            
            // Eliminar después de la animación
            setTimeout(() => emoji.remove(), 1000);
        }
    }

    function crearCorazones() {
        // Crear 50 corazones
        for(let i = 0; i < 50; i++) {
            const corazon = document.createElement('div');
            corazon.className = 'corazon';
            corazon.textContent = '💚';
            
            // Posición aleatoria en pantalla
            corazon.style.left = `${Math.random() * 100}vw`;
            corazon.style.top = `${100 + Math.random() * 20}vh`;
            corazon.style.animationDuration = `${2 + Math.random() * 3}s`;
            
            document.body.appendChild(corazon);
            
            // Eliminar después de la animación
            setTimeout(() => corazon.remove(), 3000);
        }
    }

    function actualizarPosiciones() {
        const crecimientoTotal = anchoOriginal * (escala - 1);
        const desplazamientoInicio = crecimientoTotal / 1.5;
        
        btnDetener.style.transform = `scale(${escala})`;
        btnInicio.style.transform = `translateX(-${desplazamientoInicio}px)`;
        
        // Actualizar texto si no ha llegado al máximo
        if(contador <= 7) {
            btnDetener.textContent = textos[contador - 1] || "Detener";
        }

        if(contador === 2) {
            btnInicio.style.transform = `translateX(-${(desplazamientoInicio*1.3)}px)`;
        }

        if(contador === 3) {
            btnInicio.style.transform = `translateX(-${(desplazamientoInicio*1.3)}px)`;
        }

        if(contador === 4) {
            btnInicio.style.transform = `translateX(-${(desplazamientoInicio*1.3)}px)`;
        }

        if(contador === 5) {
            btnInicio.style.transform = `translateX(-${(desplazamientoInicio*1.1)}px)`;
        }

        if(contador === 7) {
            btnDetener.style.backgroundColor = '#fcc2c2'
        }
    }

    btnInicio.addEventListener('click', () => {
        titulo.style.display = 'none';
        gif.style.display = 'none';
        if(contador <= 7) {
            contador++;
            escala += incremento;
            actualizarPosiciones();
            mensaje.style.display = 'none';
        }
    });

    btnDetener.addEventListener('click', () => {
        titulo.style.display = 'none';
        gif.style.display = 'contents';
        if (contador > 0) {
            mensaje.textContent = "SABÍA QUE DIRÍAS QUE SÍ. TE AMO 💚"
        }
        crearExplosion();
        crearCorazones();
        contador = 0;
        escala = 1;
        btnDetener.style.transform = 'scale(1)';
        btnDetener.textContent = "Sí";
        btnInicio.style.transform = 'translateX(0)';
        mensaje.style.display = 'block';
        btnInicio.style.display = 'none';
        btnDetener.style.display = 'none';
    });
});