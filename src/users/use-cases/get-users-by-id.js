import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import usersStore from "../store/users-store";


export const getUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    /**
     * Para la version mas actual usariamos:
     * if(page > data.last) return [];
     */

    const user = localhostUserToModel( data )
    console.log(user);
    return user;
}