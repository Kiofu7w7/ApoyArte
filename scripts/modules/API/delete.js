export const DELETE = async (url) => {
    try {
        await fetch(url, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};
