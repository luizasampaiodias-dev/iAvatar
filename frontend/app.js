

async function verificarStatus() {
    try {
        const response = await fetch("http://localhost:8000/", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        apiStatusError.style.display = "none";    
        apiStatus.style.display = "block";     
        return data;
    } catch (error) {
        apiStatusError.style.display = "block";    
        apiStatus.style.display = "none";    
        throw error;
    }
}

const botao = document.getElementById("btnHealth");
if (botao) {
    botao.addEventListener("click", verificarStatus);
}