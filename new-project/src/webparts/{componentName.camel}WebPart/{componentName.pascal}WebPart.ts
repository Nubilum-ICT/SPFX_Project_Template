import * as React from 'react';

// COMPONENTS
import { BaseClientSideWebPart, } from '@microsoft/sp-webpart-base';
import { <%= componentName.pascal %> } from './components/<%= componentName.pascal %>';

// FUNCTIONS
import { createRoot, Root, } from "react-dom/client";
import { getContext, } from "@functions/pnpClient"

// TYPES
import { type IPropertyPaneConfiguration, } from '@microsoft/sp-property-pane';
import { IReadonlyTheme, } from '@microsoft/sp-component-base';
import { I<%= componentName.pascal %>Props } from './components/I<%= componentName.pascal %>Props';

export interface I<%= componentName.pascal %>WebPartProps {
  description: string;
}

export default class <%= componentName.pascal %>WebPart extends BaseClientSideWebPart<I<%= componentName.pascal %>WebPartProps> {
  private _root: Root | undefined;

  public render(): void {
    const element: React.ReactElement<I<%= componentName.pascal %>Props> = React.createElement(
      <%= componentName.pascal %>,
      {}
    );

    if (!this._root) {
      this._root = createRoot(this.domElement);
    }
    this._root.render(element);
  }

  protected async onInit(): Promise<void> {
    getContext(this.context);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }
  }

  protected onDispose(): void {
    this?._root?.unmount();
    this._root = undefined;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: []
    };
  }
}
