import type { Topic } from './types/dom';
import type { MindElixirInstance, NodeObj } from './types/index';
export declare const mainToSub: (tpc: Topic) => void;
export declare const reshapeNode: (this: MindElixirInstance, tpc: Topic, patchData: NodeObj) => void;
export declare const insertSibling: (this: MindElixirInstance, type: 'before' | 'after', el?: Topic, node?: NodeObj) => void;
export declare const insertParent: (this: MindElixirInstance, el?: Topic, node?: NodeObj) => void;
export declare const addChild: (this: MindElixirInstance, el?: Topic, node?: NodeObj) => void;
export declare const copyNode: (this: MindElixirInstance, node: Topic, to: Topic) => void;
export declare const copyNodes: (this: MindElixirInstance, tpcs: Topic[], to: Topic) => void;
export declare const moveUpNode: (this: MindElixirInstance, el?: Topic) => void;
export declare const moveDownNode: (this: MindElixirInstance, el?: Topic) => void;
export declare const removeNode: (this: MindElixirInstance, el?: Topic) => void;
export declare const expandNodeSubtree: (this: MindElixirInstance, el?: Topic) => void;
export declare const removeNodes: (this: MindElixirInstance, tpcs: Topic[]) => void;
export declare const moveNodeIn: (this: MindElixirInstance, from: Topic[], to: Topic) => void;
export declare const moveNodeBefore: (this: MindElixirInstance, from: Topic[], to: Topic) => void;
export declare const moveNodeAfter: (this: MindElixirInstance, from: Topic[], to: Topic) => void;
export declare const beginEdit: (this: MindElixirInstance, el?: Topic) => void;
export declare const setNodeTopic: (this: MindElixirInstance, el: Topic, topic: string) => void;
