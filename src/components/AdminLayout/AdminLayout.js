import React from "react"

export default function AdminLayout(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    );
}