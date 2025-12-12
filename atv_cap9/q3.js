class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.arquivo = arquivo;
        this.tocando = false;
    }

    reproduzir() {
        this.tocando = true;
    }

    pausar() {
        this.tocando = false;
    }
}

class Artista {
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }

    listaDeMusicas() {
        return this.musicas;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        const index = this.musicas.indexOf(musica);
        if (index > -1) {
            this.musicas.splice(index, 1);
        }
    }
}

class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
        this.musicaAtual = 0;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        const index = this.musicas.indexOf(musica);
        if (index > -1) {
            this.musicas.splice(index, 1);
        }
    }

    reproduzir() {
        if (this.musicas.length > 0) {
            this.musicas[this.musicaAtual].reproduzir();
        }
    }

    pausar() {
        if (this.musicas.length > 0) {
            this.musicas[this.musicaAtual].pausar();
        }
    }

    avancarMusica() {
        if (this.musicaAtual < this.musicas.length - 1) {
            this.musicas[this.musicaAtual].pausar();
            this.musicaAtual++;
            this.musicas[this.musicaAtual].reproduzir();
        }
    }

    voltarMusica() {
        if (this.musicaAtual > 0) {
            this.musicas[this.musicaAtual].pausar();
            this.musicaAtual--;
            this.musicas[this.musicaAtual].reproduzir();
        }
    }
}

export function demonstrarAplicativoMusicas() {
    const artista1 = new Artista("Queen", "queen.jpg");
    const artista2 = new Artista("The Beatles", "beatles.jpg");
    
    const musica1 = new Musica("Bohemian Rhapsody", artista1, "5:55", "bohemian.mp3");
    const musica2 = new Musica("Hey Jude", artista2, "7:11", "heyjude.mp3");
    const musica3 = new Musica("Yesterday", artista2, "2:05", "yesterday.mp3");
    
    artista1.adicionarMusica(musica1);
    artista2.adicionarMusica(musica2);
    artista2.adicionarMusica(musica3);
    
    const playlist = new Playlist("Rock Clássico");
    playlist.adicionarMusica(musica1);
    playlist.adicionarMusica(musica2);
    playlist.adicionarMusica(musica3);
    
    playlist.reproduzir();
    playlist.avancarMusica();
    playlist.voltarMusica();
    playlist.pausar();
    
    return {
        totalArtistas: 2,
        totalMusicasArtista1: artista1.musicas.length,
        totalMusicasArtista2: artista2.musicas.length,
        musicasPlaylist: playlist.musicas.length,
        musicaAtual: playlist.musicaAtual + 1,
        musicaTocando: playlist.musicas[playlist.musicaAtual].tocando,
        nomeArtistaMusicaAtual: playlist.musicas[playlist.musicaAtual].artista.nome
    };
}