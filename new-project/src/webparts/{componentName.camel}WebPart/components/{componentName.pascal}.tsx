import * as React from "react";
// Nubilum components
import { M365Theme, } from "@nubilum/nubilumcomponents";
// Components
import { <%= componentName.pascal %>Component, } from "./components/<%= componentName.pascal %>Component";

// FUNCTIONS
import { getContext, } from "@functions/pnpClient"

// TYPES
import type { I<%= componentName.pascal %>Props } from './I<%= componentName.pascal %>Props';

export const <%= componentName.pascal %>: React.FunctionComponent<I<%= componentName.pascal %>Props> = (props): React.ReactElement => {

  return (
      <M365Theme context={getContext()}>
        <section>
          <<%= componentName.pascal %>Component />
        </section>
      </M365Theme>
  );
};
