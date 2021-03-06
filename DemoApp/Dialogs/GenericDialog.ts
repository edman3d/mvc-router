﻿import { DialogBase } from "./DialogBase";

/**
 * Displays supplied React Component as a dialog.
 */
export class GenericDialog<P> extends DialogBase {
    private options: GenericDialogOptions;

    constructor(private componentClass: React.ComponentClass<P>, private props: P, options?: GenericDialogOptions) {
        super();
        this.options = $.extend({}, DefaultGenericDialogOptions, options);
        if (this.options.dialogClass) {
            this.$el.addClass(this.options.dialogClass);
        }
    }

    protected render(): void {
        const element = React.createElement(this.componentClass, this.props);
        ReactDOM.render(element, this.$el[0], () => {
            this.init();
        });
    }
}

export interface GenericDialogOptions {
    dialogClass?: string;
}

const DefaultGenericDialogOptions: GenericDialogOptions = {
};
