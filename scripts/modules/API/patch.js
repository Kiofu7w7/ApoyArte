export const EDIT = async (dato_user, url) => {
    try {
        await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(dato_user),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log(error);
    }
};
