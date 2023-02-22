import { useContext } from "react";
import context from "../store/Context";


export function useStore() {
    const [state, dispatch] = useContext(context);
    return [state, dispatch];
}