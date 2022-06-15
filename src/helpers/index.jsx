export const generarId = () => {
    const fecha = Date.now().toString(36).substring(2);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
};
