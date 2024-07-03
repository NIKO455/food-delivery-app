import {Component} from "react";

export class ButtonIcon extends Component<{ content: string, svgIcon: never, className: never }> {
    render() {
        const {content, svgIcon} = this.props;
        const {className} = this.props ?? '';
        return (
            <>
                <button type="submit"
                        className={`inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${className}`}>
                    {svgIcon}
                    {content}
                </button>
            </>
        )
    }
}
