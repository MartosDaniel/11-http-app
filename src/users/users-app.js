import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

export const UserApp = async(element) => {
    
    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element )
    renderButtons( element )

    

}