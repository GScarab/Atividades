const usuarios = [];

export function gerenciarUsuarios() {
    // Adicionar usuários
    const usuario1 = {
        id: usuarios.length + 1,
        nome: "Alice",
        email: "alice@email.com",
        senha: "senha123"
    };
    usuarios.push(usuario1);
    
    const usuario2 = {
        id: usuarios.length + 1,
        nome: "Bob",
        email: "bob@email.com",
        senha: "senha456"
    };
    usuarios.push(usuario2);
    
    // Atualizar usuário 1
    const usuarioAtualizado = usuarios.find(u => u.id === 1);
    if (usuarioAtualizado) {
        usuarioAtualizado.nome = "Alice Smith";
        usuarioAtualizado.email = "alice.smith@novo.com";
    }
    
    // Remover usuário 2
    const index = usuarios.findIndex(u => u.id === 2);
    if (index !== -1) {
        usuarios.splice(index, 1);
    }
    
    // Listar usuários restantes
    const usuariosListados = usuarios.map(u => ({
        id: u.id,
        nome: u.nome,
        email: u.email
    }));
    
    return {
        inicial: `Usuários adicionados: Alice e Bob`,
        atualizado: `Usuário 1 atualizado: Alice Smith (alice.smith@novo.com)`,
        final: `Lista após remoção: ${JSON.stringify(usuariosListados)}`
    };
}