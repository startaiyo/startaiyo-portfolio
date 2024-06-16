interface Props {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export const TabButton = (props: Props) => {
    return (
        <a
            className={`w-40 h-20 focus:outline-none flex items-center justify-center font-bold ${
                props.isActive ? "text-gray-50/50" : "text-white"
            }`}
            onClick={(e) => {
                e.preventDefault();
                props.onClick();
            }}
        >
            {props.name}
        </a>
    );
}