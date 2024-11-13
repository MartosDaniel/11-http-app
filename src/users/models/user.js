
//Representacion del usuario de la base de datos, datos que necesito para trabajar
export class User {
    /**
     * @param {Like<User>} userDateLike 
     */
    constructor({id, isActive, balance, avatar, firstName, lastName, gender}){
        this.id= id
        this.isActive= isActive
        this.balance= balance
        this.avatar= avatar
        this.firstName = firstName
        this.lastName = lastName
        this.gender= gender
    }
}