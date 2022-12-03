import React, {
    useState,
} from "react";

function useStateStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const storageValue = window.localStorage.getItem(key)
        if (storageValue) {
            return JSON.parse(storageValue);
        }
        return defaultValue;
    })
    const setValue = value => {
        setState(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [state, setValue]
}


export default useStateStorage;