import React, { useState } from "react";
import { addItem } from "../store/Action";
import { useStore } from "../hooks";
const AddItem = () => {
    const [item, setItem] = useState();
    const x = useStore();
    console.log("x");

    const handleAddItem = (e) => {
        e.preventDefault();
        //dispatch(addItem(item))
    }
    return (
        <div>
            <form onSubmit={handleAddItem}>
                <input onChange={(e) => setItem(e.target.value)} type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}
export default AddItem;