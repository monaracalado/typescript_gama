interface Usuario {
    nome: string,
    email: string,
    endereco?: string,
}

function detUser(): Usuario {
    return {
        nome: 'Monara',
        email: 'monara@monara.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}