export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

export const addItem = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const updateItem = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
}

export const removeItem = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}