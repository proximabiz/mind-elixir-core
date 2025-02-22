import type { MindElixirInstance, MindElixirData } from './index';
import * as nodeOperation from './nodeOperation';
import * as summary from './summary';
export type OperationMap = typeof nodeOperation;
export type Operations = keyof OperationMap;
export type MindElixirMethods = typeof methods;
/**
 * Methods that mind-elixir instance can use
 *
 * @public
 */
declare const methods: {
    init(this: MindElixirInstance, data: MindElixirData): Error | undefined;
    exportSvg: (this: MindElixirInstance, noForeignObject?: boolean, injectCss?: string | undefined) => Blob;
    exportPng: (this: MindElixirInstance, noForeignObject?: boolean, injectCss?: string | undefined) => Promise<Blob | null>;
    createSummary: (this: MindElixirInstance) => void;
    removeSummary: (this: MindElixirInstance, id: string) => void;
    selectSummary: (this: MindElixirInstance, el: summary.SummarySvgGroup) => void;
    unselectSummary: (this: MindElixirInstance) => void;
    renderSummary: (this: MindElixirInstance) => void;
    editSummary: (this: MindElixirInstance, el: summary.SummarySvgGroup) => void;
    renderArrow(this: MindElixirInstance): void;
    editArrowLabel(this: MindElixirInstance, el: import("./index").CustomSvg): void;
    tidyArrow(this: MindElixirInstance): void;
    createArrow: (this: MindElixirInstance, from: import("./index").Topic, to: import("./index").Topic) => void;
    removeArrow: (this: MindElixirInstance, linkSvg?: import("./index").CustomSvg | undefined) => void;
    selectArrow: (this: MindElixirInstance, link: import("./index").CustomSvg) => void;
    unselectArrow: (this: MindElixirInstance) => void;
    mainToSub: (this: MindElixirInstance, tpc: import("./index").Topic) => Promise<void>;
    reshapeNode: (this: MindElixirInstance, tpc: import("./index").Topic, patchData: import("./types").NodeObj) => Promise<void>;
    insertSibling: (this: MindElixirInstance, type: "before" | "after", el?: import("./index").Topic | undefined, node?: import("./types").NodeObj | undefined) => Promise<void>;
    insertParent: (this: MindElixirInstance, el?: import("./index").Topic | undefined, node?: import("./types").NodeObj | undefined) => Promise<void>;
    addChild: (this: MindElixirInstance, el?: import("./index").Topic | undefined, node?: import("./types").NodeObj | undefined) => Promise<void>;
    copyNode: (this: MindElixirInstance, node: import("./index").Topic, to: import("./index").Topic) => Promise<void>;
    copyNodes: (this: MindElixirInstance, tpcs: import("./index").Topic[], to: import("./index").Topic) => Promise<void>;
    moveUpNode: (this: MindElixirInstance, el?: import("./index").Topic | undefined) => Promise<void>;
    moveDownNode: (this: MindElixirInstance, el?: import("./index").Topic | undefined) => Promise<void>;
    removeNode: (this: MindElixirInstance, el?: import("./index").Topic | undefined) => Promise<void>;
    expandNodeSubtree: (this: MindElixirInstance, el?: import("./index").Topic | undefined) => Promise<void>;
    removeNodes: (this: MindElixirInstance, tpcs: import("./index").Topic[]) => Promise<void>;
    moveNodeIn: (this: MindElixirInstance, from: import("./index").Topic[], to: import("./index").Topic) => Promise<void>;
    moveNodeBefore: (this: MindElixirInstance, from: import("./index").Topic[], to: import("./index").Topic) => Promise<void>;
    moveNodeAfter: (this: MindElixirInstance, from: import("./index").Topic[], to: import("./index").Topic) => Promise<void>;
    beginEdit: (this: MindElixirInstance, el?: import("./index").Topic | undefined) => Promise<void>;
    setNodeTopic: (this: MindElixirInstance, el: import("./index").Topic, topic: string) => Promise<void>;
    selectNode: (this: MindElixirInstance, targetElement: import("./index").Topic, isNewNode?: boolean | undefined, e?: MouseEvent | undefined) => void;
    unselectNode: (this: MindElixirInstance) => void;
    selectNodes: (this: MindElixirInstance, tpc: import("./index").Topic[]) => void;
    unselectNodes: (this: MindElixirInstance) => void;
    clearSelection: (this: MindElixirInstance) => void;
    getDataString: (this: MindElixirInstance) => string;
    getData: (this: MindElixirInstance) => MindElixirData;
    getDataMd: (this: MindElixirInstance) => string;
    enableEdit: (this: MindElixirInstance) => void;
    disableEdit: (this: MindElixirInstance) => void;
    scale: (this: MindElixirInstance, scaleVal: number) => void;
    toCenter: (this: MindElixirInstance) => void;
    install: (this: MindElixirInstance, plugin: (instance: MindElixirInstance) => void) => void;
    focusNode: (this: MindElixirInstance, el: import("./index").Topic) => void;
    cancelFocus: (this: MindElixirInstance) => void;
    initLeft: (this: MindElixirInstance) => void;
    initRight: (this: MindElixirInstance) => void;
    initSide: (this: MindElixirInstance) => void;
    setLocale: (this: MindElixirInstance, locale: string) => void;
    expandNode: (this: MindElixirInstance, el: import("./index").Topic, isExpand?: boolean | undefined) => void;
    refresh: (this: MindElixirInstance, data?: MindElixirData | undefined) => void;
    getObjById: (id: string, data: import("./types").NodeObj) => import("./types").NodeObj | null;
    generateNewObj: (this: MindElixirInstance) => import("./types").NodeObjExport;
    layout: (this: MindElixirInstance) => void;
    linkDiv: (this: MindElixirInstance, mainNode?: import("./index").Wrapper | undefined) => void;
    editTopic: (this: MindElixirInstance, el: import("./index").Topic) => void;
    createWrapper: (this: MindElixirInstance, nodeObj: import("./types").NodeObj, omitChildren?: boolean | undefined) => {
        grp: import("./index").Wrapper;
        top: import("./index").Parent;
        tpc: import("./index").Topic;
    };
    createParent: (this: MindElixirInstance, nodeObj: import("./types").NodeObj) => {
        p: import("./index").Parent;
        tpc: import("./index").Topic;
    };
    createChildren: (this: MindElixirInstance, wrappers: import("./index").Wrapper[]) => import("./index").Children;
    createTopic: (this: MindElixirInstance, nodeObj: import("./types").NodeObj) => import("./index").Topic;
    findEle: (id: string, instance?: MindElixirInstance | undefined) => import("./index").Topic;
    changeTheme: (this: MindElixirInstance, theme: import("./types").Theme, shouldRefresh?: boolean) => void;
};
export default methods;
