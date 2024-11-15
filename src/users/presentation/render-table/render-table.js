import usersStore from '../../store/users-store'
import './render-table.css'



let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th> #ID </td>
            <th> Balance </td>
            <th> FirstName </td>
            <th> LastName </td>
            <th> Active </td>
            <th> Actions </td>
        </tr>
    `;
    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
}

/**
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append( table );

        //TODO: listeners a la tabla
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
            <tr>
                <td> ${user.id} </td>
                <td> ${user.balance} </td>
                <td> ${user.firstName} </td>
                <td> ${user.lastName} </td>
                <td> ${user.active} </td>
                <td> 
                    <a href="#/" data-id="${user.id}"> Select </a>
                    |
                    <a href="#/" data-id="${user.id}"> Delete </a>
                </td>
            </tr>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;





}