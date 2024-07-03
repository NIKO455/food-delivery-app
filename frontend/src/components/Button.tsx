import {Component} from "react";

interface ButtonProps {
    content: string;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export class Button extends Component<ButtonProps, {}> {
    render() {
        const {content, className = '', type = 'button'} = this.props;
        return (
            <>
                <button
                    type={type}
                    className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${className}`}
                >
                    {content}
                </button>
            </>
        );
    }
}

