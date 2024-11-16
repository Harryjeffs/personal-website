import { Observable } from '@nativescript/core';
import { alert } from '@nativescript/core/ui/dialogs';

export class PortfolioModel extends Observable {
    constructor() {
        super();
    }

    onProjectTap() {
        alert({
            title: "Project Details",
            message: "Available on the App Store. Contact for more information.",
            okButtonText: "Close"
        });
    }

    onContactTap() {
        alert({
            title: "Contact Info",
            message: "Email: john.doe@example.com\nTwitter: @johndoeios",
            okButtonText: "Close"
        });
    }
}