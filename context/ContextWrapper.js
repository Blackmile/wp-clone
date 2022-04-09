import React from "react";
import Context from '../context/Context';
import { theme } from '../utils';

export default function ContextWrapper(props){
    return (
        <Context.Provider value={{ theme }}>
            {props.children}
        </Context.Provider>
    )
}