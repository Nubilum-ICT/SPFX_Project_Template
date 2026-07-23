// TYPES
import { WebPartContext, } from "@microsoft/sp-webpart-base";
// SP IMPORTS
import { SPFI, spfi, SPFx, } from "@pnp/sp";
import "@pnp/sp/webs";

// GRAPH IMPORTS
import { graphfi, GraphFI, SPFx as graphSPFx, } from "@pnp/graph";
import "@pnp/graph/sites";

let _context: WebPartContext | undefined = undefined;
let _sp: SPFI | undefined = undefined;
let _graph: GraphFI | undefined = undefined;

export const getContext = (context?: WebPartContext): WebPartContext => {
    if (context !== undefined) {
        _context = context;
    }
    return _context!;
};

export const getSP = (context?: WebPartContext): SPFI => {
    if (_sp === undefined) {
        const tempContext = context || getContext();
        const sp = spfi().using(SPFx(tempContext));
        _sp = sp;
    }
    return _sp as SPFI;
};

export const getGraph = (context?: WebPartContext): GraphFI => {
    if (_graph === undefined) {
        const tempContext = context || getContext();
        _graph = graphfi().using(graphSPFx(tempContext));
    }
    return _graph as GraphFI;
};

export const getOrigin = (context?: WebPartContext): string => {
    const tempContext = context || getContext();
    return new URL(tempContext.pageContext.web.absoluteUrl).origin;
}
