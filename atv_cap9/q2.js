class Livro {
    constructor(titulo, autor, isbn, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }
}

class UsuarioBiblioteca {
    constructor(nome, cpf, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.livrosEmprestados = [];
    }
}

class Emprestimo {
    constructor(usuario, livro) {
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = new Date();
        this.dataDevolucao = null;
    }

    devolver() {
        this.dataDevolucao = new Date();
        this.livro.disponivel = true;
        const index = this.usuario.livrosEmprestados.indexOf(this.livro);
        if (index > -1) {
            this.usuario.livrosEmprestados.splice(index, 1);
        }
    }
}

class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
    }

    adicionarLivro(titulo, autor, isbn, anoPublicacao) {
        const novoLivro = new Livro(titulo, autor, isbn, anoPublicacao);
        this.livros.push(novoLivro);
        return novoLivro;
    }

    cadastrarUsuario(nome, cpf, email) {
        const novoUsuario = new UsuarioBiblioteca(nome, cpf, email);
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    emprestarLivro(usuario, livro) {
        if (livro.disponivel) {
            livro.disponivel = false;
            usuario.livrosEmprestados.push(livro);
            const novoEmprestimo = new Emprestimo(usuario, livro);
            this.emprestimos.push(novoEmprestimo);
            return novoEmprestimo;
        }
        return null;
    }
}

export function demonstrarBiblioteca() {
    const biblioteca = new Biblioteca("Biblioteca Municipal");
    
    const livro1 = biblioteca.adicionarLivro("1984", "George Orwell", "123456", 1949);
    const livro2 = biblioteca.adicionarLivro("Dom Casmurro", "Machado de Assis", "789012", 1899);
    
    const usuario1 = biblioteca.cadastrarUsuario("Maria", "111.222.333-44", "maria@email.com");
    const usuario2 = biblioteca.cadastrarUsuario("João", "555.666.777-88", "joao@email.com");
    
    const emprestimo1 = biblioteca.emprestarLivro(usuario1, livro1);
    const emprestimo2 = biblioteca.emprestarLivro(usuario2, livro2);
    
    emprestimo1.devolver();
    
    return {
        totalLivros: biblioteca.livros.length,
        totalUsuarios: biblioteca.usuarios.length,
        livrosDisponiveis: biblioteca.livros.filter(l => l.disponivel).length,
        livrosEmprestados: biblioteca.emprestimos.filter(e => e.dataDevolucao === null).length,
        livrosMaria: usuario1.livrosEmprestados.length,
        disponibilidade1984: livro1.disponivel,
        disponibilidadeDomCasmurro: livro2.disponivel
    };
}