export function realizarTodasConversoes() {
    const dias = 2;
    const gigabytes = 5;
    
    const minutos = dias * 24 * 60;
    const bytes = gigabytes * 1000000000;
    
    return {
        tempo: `${dias} dias equivalem a ${minutos} minutos.`,
        dados: `${gigabytes} gigabytes equivalem a ${bytes} bytes.`
    };
}