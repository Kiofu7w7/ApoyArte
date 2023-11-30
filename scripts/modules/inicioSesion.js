const url = 'http://localhost:3000/usuarios';

export const buscarUsuario = async (emailEnvio, contraseñaEnvio) => {
    try {
        if (!emailEnvio || !contraseñaEnvio) {
            throw false;
        }
        if (emailEnvio == "" && contraseñaEnvio == "") {
            throw false;
        }
        const response = await axios.get(url, {
            params: {
                email: emailEnvio,
                contraseña: contraseñaEnvio
            }
        });
        const users = response.data;
        if (users.some(user => user.email == emailEnvio && user.contraseña == contraseñaEnvio)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};