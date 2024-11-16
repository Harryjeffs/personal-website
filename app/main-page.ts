import { EventData, Page } from '@nativescript/core';
import { PortfolioModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new PortfolioModel();
}