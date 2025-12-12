export function configuracoesVSCode() {
    const configuracoes = {
        "workbench.colorTheme": "Default Dark+",
        "workbench.iconTheme": "material-icon-theme",
        "editor.fontSize": 14,
        "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
        "editor.tabSize": 2,
        "window.zoomLevel": 0
    };
    
    return {
        titulo: "Configurações recomendadas para o VSCode:",
        configuracoes: configuracoes
    };
}