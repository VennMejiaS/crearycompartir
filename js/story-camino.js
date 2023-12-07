document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Realiza una solicitud GET al servidor para obtener la historia generada por OpenAI
        const response = await fetch('http://localhost:3000/api/narrativa');
        
        
        if (!response.ok) {
            throw new Error('Error al obtener la información de la historia');
        }

        const data = await response.json();
        const caminoStory = document.getElementById('camino-story');
        caminoStory.value = data.textoGenerado; // Ajustar según la estructura de la respuesta del servidor
    } catch (error) {
        console.error(error);
    }
});