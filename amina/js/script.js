// Função para aplicar máscara a um campo
function aplicarMascara(campo, mascara) {
    campo.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, ''); // Remove não-dígitos
        let formatado = '';
        let i = 0;
        
        // Aplica a máscara baseada no tipo
        for (let char of mascara) {
            if (char === '9' && i < valor.length) {
                formatado += valor[i++];
            } else if (char !== '9') {
                formatado += char;
            }
        }
        
        e.target.value = formatado;
    });
}

// Aplica máscaras quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    // Máscara para CPF: 999.999.999-99
    const cpfCampo = document.getElementById('cpf');
    if (cpfCampo) {
        aplicarMascara(cpfCampo, '999.999.999-99');
    }
    
    // Máscara para Telefone: (99) 99999-9999
    const telefoneCampo = document.getElementById('telefone');
    if (telefoneCampo) {
        aplicarMascara(telefoneCampo, '(99) 99999-9999');
    }
    
    // Máscara para CEP: 99999-999
    const cepCampo = document.getElementById('cep');
    if (cepCampo) {
        aplicarMascara(cepCampo, '99999-999');
    }
});