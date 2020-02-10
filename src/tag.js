class Tag {
  constructor (tag) {
    this.name = tag
  }

  get valid () {
    return Tags.has(this.name)
  }

  get iterableContainer () {
    return IterableContainerTags.has(this.name)
  }

  get iterable () {
    return IterableChildTags.has(this.name)
  }

  get category () {
    return Tags.get(this.name)
  }
}

export default Tag

const IterableTags =  [
  {
    container: 'audio',
    children: ['source']
  }, {
    container: 'colgroup', // Column Group
    children: ['col']
  }, {
    container: 'dl', // Description List
    children: ['dt', 'dd']
  }, {
    container: 'data',
    children: ['option']
  }, {
    container: 'datalist',
    children: ['li']
  }, {
    container: 'map',
    children: ['area']
  }, {
    container: 'ol',
    children: ['li']
  }, {
    container: 'optgroup',
    children: ['option']
  }, {
    container: 'select',
    children: ['option', 'optgroup']
  }, {
    container: 'table',
    children: ['tr']
  }, {
    container: 'tbody',
    children: ['tr']
  }, {
    container: 'thead',
    children: ['tr']
  }, {
    container: 'tfoot',
    children: ['tr']
  }, {
    container: 'tr',
    children: ['td', 'th']
  }, {
    container: 'video',
    children: ['source', 'track']
  }, {
    container: 'ul',
    children: ['li']
  }
]

const IterableContainerTags = new Set(IterableTags
  .map(t => t.container))

const IterableChildTags = new Set([])

IterableTags.forEach(t => {
  t.children.forEach(tx => {
    IterableChildTags.add(tx)
  })
})

const TagCategory = {
  Basic: 'Basic',
  Container: 'Container',
  Divider: 'Divider',
  Formating: 'Formating',
  Frame: 'Frame',
  Image: 'Image',
  Input: 'Input',
  Media: 'Media', // Audio Video
  Meta: 'Meta',
  Link: 'Link',
  List: 'List',
  Table: 'Table',
  Script: 'Script'
}

const Tags = new Map([

  ['title', TagCategory.Basic],
  ['h1', TagCategory.Basic],
  ['h2', TagCategory.Basic],
  ['h3', TagCategory.Basic],
  ['h4', TagCategory.Basic],
  ['h5', TagCategory.Basic],
  ['h6', TagCategory.Basic],
  ['p', TagCategory.Basic],

  ['body', TagCategory.Container],
  ['div', TagCategory.Container],
  ['span', TagCategory.Container],
  ['header', TagCategory.Container],
  ['footer', TagCategory.Container],
  ['main', TagCategory.Container],
  ['section', TagCategory.Container],
  ['article', TagCategory.Container],
  ['aside', TagCategory.Container],
  ['details', TagCategory.Container],
  ['dialog', TagCategory.Container],
  ['summary', TagCategory.Container],
  ['data', TagCategory.Container],

  ['br', TagCategory.Divider],
  ['hr', TagCategory.Divider],

  ['acronym', TagCategory.Formatting],
  ['abbr', TagCategory.Formatting],
  ['address', TagCategory.Formatting],
  ['b', TagCategory.Formatting],
  ['bdi', TagCategory.Formatting],
  ['bdo', TagCategory.Formatting],
  ['big', TagCategory.Formatting],
  ['blockquote', TagCategory.Formatting],
  ['center', TagCategory.Formatting],
  ['cite', TagCategory.Formatting],
  ['code', TagCategory.Formatting],
  ['del', TagCategory.Formatting],
  ['dfn', TagCategory.Formatting],
  ['em', TagCategory.Formatting],
  ['font', TagCategory.Formatting],
  ['i', TagCategory.Formatting],
  ['ins', TagCategory.Formatting],
  ['kbd', TagCategory.Formatting],
  ['mark', TagCategory.Formatting],
  ['meter', TagCategory.Formatting],
  ['pre', TagCategory.Formatting],
  ['progress', TagCategory.Formatting],
  ['q', TagCategory.Formatting],
  ['rp', TagCategory.Formatting],
  ['rt', TagCategory.Formatting],
  ['ruby', TagCategory.Formatting],
  ['s', TagCategory.Formatting],
  ['samp', TagCategory.Formatting],
  ['small', TagCategory.Formatting],
  ['strike', TagCategory.Formatting],
  ['strong', TagCategory.Formatting],
  ['sub', TagCategory.Formatting],
  ['sup', TagCategory.Formatting],
  ['template', TagCategory.Formatting],
  ['time', TagCategory.Formatting],
  ['tt', TagCategory.Formatting],
  ['u', TagCategory.Formatting],
  ['var', TagCategory.Formatting],
  ['wbr', TagCategory.Formatting],

  ['form', TagCategory.Input],
  ['input', TagCategory.Input],
  ['textarea', TagCategory.Input],
  ['button', TagCategory.Input],
  ['select', TagCategory.Input],
  ['optgroup', TagCategory.Input],
  ['option', TagCategory.Input],
  ['label', TagCategory.Input],
  ['fieldset', TagCategory.Input],
  ['legend', TagCategory.Input],
  ['datalist', TagCategory.Input],
  ['output', TagCategory.Input],

  ['frame', TagCategory.Frame],
  ['frameset', TagCategory.Frame],
  ['noframes', TagCategory.Frame],
  ['iframe', TagCategory.Frame],

  ['img', TagCategory.Image],
  ['map', TagCategory.Image],
  ['area', TagCategory.Image],
  ['canvas', TagCategory.Image],
  ['figcaption', TagCategory.Image],
  ['figure', TagCategory.Image],
  ['picture', TagCategory.Image],
  ['svg', TagCategory.Image],

  ['audio', TagCategory.Media],
  ['source', TagCategory.Media],
  ['track', TagCategory.Media],
  ['video', TagCategory.Media],

  ['a', TagCategory.Link],
  ['link', TagCategory.Link],
  ['nav', TagCategory.Link],

  ['ul', TagCategory.List],
  ['ol', TagCategory.List],
  ['li', TagCategory.List],
  ['dir', TagCategory.List],
  ['dl', TagCategory.List],
  ['dt', TagCategory.List],
  ['dd', TagCategory.List],

  ['table', TagCategory.Table],
  ['caption', TagCategory.Table],
  ['th', TagCategory.Table],
  ['tr', TagCategory.Table],
  ['td', TagCategory.Table],
  ['thead', TagCategory.Table],
  ['tbody', TagCategory.Table],
  ['tfoot', TagCategory.Table],
  ['col', TagCategory.Table],
  ['colgroup', TagCategory.Table],

  ['html', TagCategory.Meta],
  ['head', TagCategory.Meta],
  ['style', TagCategory.Meta],
  ['head', TagCategory.Meta],
  ['meta', TagCategory.Meta],
  ['base', TagCategory.Meta],
  ['basefont', TagCategory.Meta],

  ['script', TagCategory.Script],
  ['noscript', TagCategory.Script],
  ['applet', TagCategory.Script],
  ['embed', TagCategory.Script],
  ['object', TagCategory.Script],
  ['param', TagCategory.Script]

])
