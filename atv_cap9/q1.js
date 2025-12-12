class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.seguidores = [];
        this.seguindo = [];
        this.publicacoes = [];
    }

    seguirUsuario(usuario) {
        this.seguindo.push(usuario);
        usuario.seguidores.push(this);
    }

    deixarDeSeguirUsuario(usuario) {
        const indexSeguindo = this.seguindo.indexOf(usuario);
        if (indexSeguindo > -1) {
            this.seguindo.splice(indexSeguindo, 1);
        }

        const indexSeguidores = usuario.seguidores.indexOf(this);
        if (indexSeguidores > -1) {
            usuario.seguidores.splice(indexSeguidores, 1);
        }
    }

    criarPublicacao(descricao, midia) {
        const publicacao = new Publicacao(descricao, midia, this);
        this.publicacoes.push(publicacao);
        return publicacao;
    }
}

class Publicacao {
    constructor(descricao, midia, usuario) {
        this.descricao = descricao;
        this.midia = midia;
        this.usuario = usuario;
        this.curtidas = 0;
        this.comentarios = [];
    }

    editar(novoTexto, novaMidia) {
        this.descricao = novoTexto;
        this.midia = novaMidia;
    }

    remover() {
        const index = this.usuario.publicacoes.indexOf(this);
        if (index > -1) {
            this.usuario.publicacoes.splice(index, 1);
        }
    }

    curtir() {
        this.curtidas++;
    }

    descurtir() {
        if (this.curtidas > 0) {
            this.curtidas--;
        }
    }

    adicionarComentario(texto, usuario) {
        const comentario = new Comentario(texto, usuario);
        this.comentarios.push(comentario);
        return comentario;
    }
}

class Comentario {
    constructor(texto, usuario) {
        this.texto = texto;
        this.usuario = usuario;
    }

    editar(novoTexto) {
        this.texto = novoTexto;
    }

    remover(publicacao) {
        const index = publicacao.comentarios.indexOf(this);
        if (index > -1) {
            publicacao.comentarios.splice(index, 1);
        }
    }
}

export function demonstrarRedeSocial() {
    const usuario1 = new Usuario("Ana");
    const usuario2 = new Usuario("Carlos");
    
    // Ações na rede social
    usuario1.seguirUsuario(usuario2);
    
    const publicacao = usuario2.criarPublicacao("Primeira foto!", "foto.jpg");
    publicacao.curtir();
    publicacao.curtir();
    
    const comentario = publicacao.adicionarComentario("Que legal!", usuario1);
    
    usuario1.deixarDeSeguirUsuario(usuario2);
    publicacao.editar("Foto editada!", "nova_foto.jpg");
    comentario.editar("Muito legal!");
    publicacao.descurtir();
    
    return {
        seguidoresUsuario2: usuario2.seguidores.length,
        seguindoUsuario1: usuario1.seguindo.length,
        curtidasPublicacao: publicacao.curtidas,
        comentariosPublicacao: publicacao.comentarios.length,
        descricaoAtual: publicacao.descricao,
        textoComentario: comentario.texto
    };
}