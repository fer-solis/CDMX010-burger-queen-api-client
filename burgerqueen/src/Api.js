import data from "./assets/data/db.json"
export const findProducts = () => {
    return new Promise ((resolve) => {
        resolve(
            data.menu
        );

    })
}
