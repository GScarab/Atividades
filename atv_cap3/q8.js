export function extensoesVSCode() {
    const extensoes = [
        "code --install-extension esbenp.prettier-vscode",
        "code --install-extension dbaeumer.vscode-eslint",
        "code --install-extension ms-vscode.vscode-typescript-next",
        "code --install-extension bun.sh",
        "code --install-extension PKief.material-icon-theme"
    ];
    
    return {
        titulo: "Comandos para instalar extensões do VSCode:",
        lista: extensoes
    };
}