export async function login(usuarioParam,contrasenaParam) {
    try {
        const response = await fetch('../utils/user.json');
        console.log(response);
        const usuarios = await response.json()

        const userOk = usuarios.find(u => u.usuario === usuarioParam && u.contrasena === contrasenaParam);
        console.log('userOk  :'+ JSON.stringify(userOk));
        return userOk !== undefined;
    } catch (error) {
        console.error('Error en la solicitud');
        return false;
    }
    
}