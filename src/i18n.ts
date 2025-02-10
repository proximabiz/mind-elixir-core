type LangPack = {
  addChild: string
  addParent: string
  addSibling: string
  removeNode: string
  focus: string
  cancelFocus: string
  moveUp: string
  moveDown: string
  link: string
  clickTips: string
  summary: string
  expandSubtree: string
}
const cn = {
  addChild: '插入子节点',
  addParent: '插入父节点',
  addSibling: '插入同级节点',
  removeNode: '删除节点',
  focus: '专注',
  cancelFocus: '取消专注',
  moveUp: '上移',
  moveDown: '下移',
  link: '连接',
  clickTips: '请点击目标节点',
  summary: '摘要',
  expandSubtree: '展开子树',
}
const i18n: Record<string, LangPack> = {
  cn,
  zh_CN: cn,
  zh_TW: {
    addChild: '插入子節點',
    addParent: '插入父節點',
    addSibling: '插入同級節點',
    removeNode: '刪除節點',
    focus: '專注',
    cancelFocus: '取消專注',
    moveUp: '上移',
    moveDown: '下移',
    link: '連接',
    clickTips: '請點擊目標節點',
    summary: '摘要',
    expandSubtree: '展開子樹',
  },
  en: {
    addChild: 'Add child',
    addParent: 'Add parent',
    addSibling: 'Add sibling',
    removeNode: 'Remove node',
    focus: 'Focus Mode',
    cancelFocus: 'Cancel Focus Mode',
    moveUp: 'Move up',
    moveDown: 'Move down',
    link: 'Link',
    clickTips: 'Please click the target node',
    summary: 'Summary',
    expandSubtree: 'Expand Subtree',
  },
  ru: {
    addChild: 'Добавить дочерний элемент',
    addParent: 'Добавить родительский элемент',
    addSibling: 'Добавить на этом уровне',
    removeNode: 'Удалить узел',
    focus: 'Режим фокусировки',
    cancelFocus: 'Отменить режим фокусировки',
    moveUp: 'Поднять выше',
    moveDown: 'Опустить ниже',
    link: 'Ссылка',
    clickTips: 'Пожалуйста, нажмите на целевой узел',
    summary: 'Описание',
    expandSubtree: 'разширяване на поддърво',
  },
  ja: {
    addChild: '子ノードを追加する',
    addParent: '親ノードを追加します',
    addSibling: '兄弟ノードを追加する',
    removeNode: 'ノードを削除',
    focus: '集中',
    cancelFocus: '集中解除',
    moveUp: '上へ移動',
    moveDown: '下へ移動',
    link: 'コネクト',
    clickTips: 'ターゲットノードをクリックしてください',
    summary: '概要',
    expandSubtree: 'サブツリーを展開する',
  },
  pt: {
    addChild: 'Adicionar item filho',
    addParent: 'Adicionar item pai',
    addSibling: 'Adicionar item irmao',
    removeNode: 'Remover item',
    focus: 'Modo Foco',
    cancelFocus: 'Cancelar Modo Foco',
    moveUp: 'Mover para cima',
    moveDown: 'Mover para baixo',
    link: 'Link',
    clickTips: 'Favor clicar no item alvo',
    summary: 'Resumo',
    expandSubtree: 'expandir subárvore',
  },
}

export default i18n
