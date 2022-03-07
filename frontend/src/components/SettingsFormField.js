import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { studentSelector, teacherSelector } from "../store/store";
export default function FormField({
    labelTxt,
    dataChunk,
    inputType = "text",
    role = "teacher",
}) {
    const [editing, setEditing] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const dataSelector = role === "teacher" ? teacherSelector : studentSelector;
    const data = useSelector(dataSelector).info[dataChunk];
    const [value, setValue] = useState(data);
    const inputRef = useRef();

    const handleIconClick = () => {
        inputRef.current.focus();
        setEditing(!editing);
    };

    const onResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    });

    return (
        <div className="form-field">
            <label htmlFor={dataChunk}>{labelTxt}</label>
            <input
                type={inputType}
                value={value}
                name={dataChunk}
                onChange={(e) => setValue(e.target.value)}
                size={windowWidth < 470 || data.length * 1.2}
                ref={inputRef}
                readOnly={!editing}
            />
            <span className="icon" onClick={handleIconClick}>
                {editing ? null : <i className="fas fa-edit"></i>}
            </span>
        </div>
    );
}
