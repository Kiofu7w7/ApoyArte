const url = 'http://localhost:3000/usuarios';

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// CANBIAR LA URL AL MOMENTO DE QUE EL JSON ESTE EN WEB ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

export const buscarUsuario = async (emailEnvio, contraseñaEnvio) => {
    try {
        if (!emailEnvio || !contraseñaEnvio) {
            throw new Error("Email y contraseña son obligatorios");
        }

        const response = await axios.get(url, {
            params: {
                email: emailEnvio,
                contraseña: contraseñaEnvio
            }
        });

        const users = response.data;
        const userFound = users.find(user => user.email === emailEnvio && user.contraseña === contraseñaEnvio);

        if (userFound) {
            return { success: true, user: userFound };
        } else {
            return { success: false, message: "Usuario no encontrado" };
        }
    } catch (error) {
        console.error(error.message);
        return { success: false, message: error.message };
    }
};