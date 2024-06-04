import { ReactNode } from "react";

interface Props {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export const TabButton = (props: Props) => {
    return (<button
            className={`w-24 h-8 rounded-full focus:outline-none ${
                props.isActive ? "bg-white" : "bg-gray-800"
            }`}
            onClick={(e) => {
                e.preventDefault();
                props.onClick();
            }}
        >
            {props.name}
        </button>
    );
}