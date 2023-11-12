function displayAutores(autores) {
    const tbody = document.getElementById("listaAutores");
    tbody.innerHTML = ""; // Limpar a tabela

    autores.forEach(autor => {
        const row = tbody.insertRow();

        const nomeCell = row.insertCell(0);
        nomeCell.textContent = autor.nome;

        const biografiaCell = row.insertCell(1);
        biografiaCell.textContent = biografia.autor;

        const dataNascCell = row.insertCell(2);
        dataNascCell.textContent = new Date(autor.dataNascimento).toLocaleDateString();

        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button class="icon-btn" onclick='editarAutor(${JSON.stringify(autor)})'>
        <i class="fas fa-edit"></i> Editar
    </button>
    <button class="icon-btn" onclick="deleteAutor(${autor.id})">
    <i class="fas fa-trash"></i> Excluir
    </button>`;
    });
}

function fetchAutores() {
    fetch("/api/autores")
        .then(res => res.json())
        .then(data => {
            displayAutores(data);
        })
        .catch(error => {
            console.error("Erro ao buscar autores:", error);
        });
}

function deleteAutor(id) {
    fetch(`/api/autores/${id}`, {
        method: "DELETE"
    })
    .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        fetchAutores();
    })
    .catch(error => {
        console.error("Erro ao deletar livro:", error);
    });
}


function editarLivro(livro) {
    const addAutorBtn = document.getElementById("addAutorBtn");
    const nome = document.getElementById("nome");
    const biografia = document.getElementById("biografia");
    const dataNascimento = document.getElementById("dataNascimento");
    const id_autor= document.getElementById("id_autor");
    nome.value = autor.nome;
    biografia.value = autor.biografia;
    dataNascimento.value = new Date(autor.dataNascimento).toISOString().split('T')[0];
    id_autor.value = autor.id;
    addAutorBtn.click();

}

function limparFormulario(){
    const nome = document.getElementById("nome");
    const biografia = document.getElementById("biografia");
    const dataNascimento = document.getElementById("dataNascimento");
    const id_autor= document.getElementById("id_autor");

    nome.value = "";
    biografia.value = "";
    dataNascimento.value = "";
    id_autor.value = "";
}
