import './index.less';
import './iconfont/iconfont.js';
import { LEFT, RIGHT, SIDE, DARK_THEME, THEME } from './const';
import { findEle } from './utils/dom';
export * from './types/index';
export * from './types/dom';
import type { MindElixirData, MindElixirInstance, MindElixirMethods, Options } from './types/index';
declare function MindElixir(this: MindElixirInstance, { el, direction, locale, draggable, editable, contextMenu, contextMenuOption, toolBar, keypress, mouseSelectionButton, before, newTopicName, allowUndo, generateMainBranch, generateSubBranch, overflowHidden, mobileMenu, theme, }: Options): void;
declare namespace MindElixir {
    export var prototype: {
        init(this: MindElixirInstance, data: MindElixirData): Error | undefined;
        exportSvg: (this: MindElixirInstance, noForeignObject?: boolean, injectCss?: string | undefined) => Blob;
        exportPng: (this: MindElixirInstance, noForeignObject?: boolean, injectCss?: string | undefined) => Promise<Blob | null>;
        createSummary: (this: MindElixirInstance) => void;
        removeSummary: (this: MindElixirInstance, id: string) => void;
        selectSummary: (this: MindElixirInstance, el: import("./summary").SummarySvgGroup) => void;
        unselectSummary: (this: MindElixirInstance) => void;
        renderSummary: (this: MindElixirInstance) => void;
        editSummary: (this: MindElixirInstance, el: import("./summary").SummarySvgGroup) => void;
        renderArrow(this: MindElixirInstance): void;
        editArrowLabel(this: MindElixirInstance, el: import("./types/dom").CustomSvg): void;
        tidyArrow(this: MindElixirInstance): void;
        createArrow: (this: MindElixirInstance, from: import("./types/dom").Topic, to: import("./types/dom").Topic) => void;
        removeArrow: (this: MindElixirInstance, linkSvg?: import("./types/dom").CustomSvg | undefined) => void;
        selectArrow: (this: MindElixirInstance, link: import("./types/dom").CustomSvg) => void;
        unselectArrow: (this: MindElixirInstance) => void;
        mainToSub: (this: MindElixirInstance, tpc: import("./types/dom").Topic) => Promise<void>;
        reshapeNode: (this: MindElixirInstance, tpc: import("./types/dom").Topic, patchData: import("./types/index").NodeObj) => Promise<void>;
        insertSibling: (this: MindElixirInstance, type: "before" | "after", el?: import("./types/dom").Topic | undefined, node?: import("./types/index").NodeObj | undefined) => Promise<void>;
        insertParent: (this: MindElixirInstance, el?: import("./types/dom").Topic | undefined, node?: import("./types/index").NodeObj | undefined) => Promise<void>;
        addChild: (this: MindElixirInstance, el?: import("./types/dom").Topic | undefined, node?: import("./types/index").NodeObj | undefined) => Promise<void>;
        copyNode: (this: MindElixirInstance, node: import("./types/dom").Topic, to: import("./types/dom").Topic) => Promise<void>;
        copyNodes: (this: MindElixirInstance, tpcs: import("./types/dom").Topic[], to: import("./types/dom").Topic) => Promise<void>;
        moveUpNode: (this: MindElixirInstance, el?: import("./types/dom").Topic | undefined) => Promise<void>;
        moveDownNode: (this: MindElixirInstance, el?: import("./types/dom").Topic | undefined) => Promise<void>;
        removeNode: (this: MindElixirInstance, el?: import("./types/dom").Topic | undefined) => Promise<void>;
        removeNodes: (this: MindElixirInstance, tpcs: import("./types/dom").Topic[]) => Promise<void>;
        moveNodeIn: (this: MindElixirInstance, from: import("./types/dom").Topic[], to: import("./types/dom").Topic) => Promise<void>;
        moveNodeBefore: (this: MindElixirInstance, from: import("./types/dom").Topic[], to: import("./types/dom").Topic) => Promise<void>;
        moveNodeAfter: (this: MindElixirInstance, from: import("./types/dom").Topic[], to: import("./types/dom").Topic) => Promise<void>;
        beginEdit: (this: MindElixirInstance, el?: import("./types/dom").Topic | undefined) => Promise<void>;
        setNodeTopic: (this: MindElixirInstance, el: import("./types/dom").Topic, topic: string) => Promise<void>;
        selectNode: (this: MindElixirInstance, targetElement: import("./types/dom").Topic, isNewNode?: boolean | undefined, e?: MouseEvent | undefined) => void;
        unselectNode: (this: MindElixirInstance) => void;
        selectNodes: (this: MindElixirInstance, tpc: import("./types/dom").Topic[]) => void;
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
        focusNode: (this: MindElixirInstance, el: import("./types/dom").Topic) => void;
        cancelFocus: (this: MindElixirInstance) => void;
        initLeft: (this: MindElixirInstance) => void;
        initRight: (this: MindElixirInstance) => void;
        initSide: (this: MindElixirInstance) => void;
        setLocale: (this: MindElixirInstance, locale: string) => void;
        expandNode: (this: MindElixirInstance, el: import("./types/dom").Topic, isExpand?: boolean | undefined) => void;
        refresh: (this: MindElixirInstance, data?: MindElixirData | undefined) => void;
        getObjById: (id: string, data: import("./types/index").NodeObj) => import("./types/index").NodeObj | null;
        generateNewObj: (this: MindElixirInstance) => import("./types/index").NodeObjExport;
        layout: (this: MindElixirInstance) => void;
        linkDiv: (this: MindElixirInstance, mainNode?: import("./types/dom").Wrapper | undefined) => void;
        editTopic: (this: MindElixirInstance, el: import("./types/dom").Topic) => void;
        createWrapper: (this: MindElixirInstance, nodeObj: import("./types/index").NodeObj, omitChildren?: boolean | undefined) => {
            grp: import("./types/dom").Wrapper;
            top: import("./types/dom").Parent;
            tpc: import("./types/dom").Topic;
        };
        createParent: (this: MindElixirInstance, nodeObj: import("./types/index").NodeObj) => {
            p: import("./types/dom").Parent;
            tpc: import("./types/dom").Topic;
        };
        createChildren: (this: MindElixirInstance, wrappers: import("./types/dom").Wrapper[]) => import("./types/dom").Children;
        createTopic: (this: MindElixirInstance, nodeObj: import("./types/index").NodeObj) => import("./types/dom").Topic;
        findEle: (id: string, instance?: MindElixirInstance | undefined) => import("./types/dom").Topic;
        changeTheme: (this: MindElixirInstance, theme: import("./types/index").Theme, shouldRefresh?: boolean) => void;
    };
    export var LEFT: number;
    export var RIGHT: number;
    export var SIDE: number;
    export var THEME: import("./types/index").Theme;
    export var DARK_THEME: import("./types/index").Theme;
    export var version: string;
    export var E: (id: string, instance?: MindElixirInstance | undefined) => import("./types/dom").Topic;
    var _a: (topic: string) => MindElixirData;
    export { _a as new };
}
export interface MindElixirCtor {
    new (options: Options): MindElixirInstance;
    E: typeof findEle;
    new: typeof MindElixir.new;
    version: string;
    LEFT: typeof LEFT;
    RIGHT: typeof RIGHT;
    SIDE: typeof SIDE;
    THEME: typeof THEME;
    DARK_THEME: typeof DARK_THEME;
    prototype: MindElixirMethods;
}
declare const _default: MindElixirCtor;
export default _default;