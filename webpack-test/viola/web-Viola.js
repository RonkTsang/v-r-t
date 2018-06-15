var Viola = this;
(function () {
  'use strict';

  var _c = document.createElement
  
  
  let debugLog = (msg, ...args) => {
    console.log(`\n========== ${msg} ==========`);
    console.log.apply(null, args);
    console.log(`========== ${msg} End ==========\n\n`);
  };
  function injectStyle(cssString) {
    if (document) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const el = document.createElement('style');
      el.type = 'text/css';
      if (el.styleSheet) {
        el.styleSheet.cssText = cssString;
      } else {
        const textNode = document.createTextNode(cssString);
        const nodes = el.childNodes;
        el.appendChild(textNode);
      }
      head.appendChild(el);
      // document.createElement = (tag) => {
      //   console.error('using the broswer API')
      // }
    }
  }

  const MODULE = {
    DOM: 'dom',
    DATA: 'data',
    JSAPI: 'jsapi'
  };
  const ACTION = {
    CREATE_BODY: 'createBody',
    ADD_EVENT: 'add_event',
    ADD_HOOK: 'add_hook',
    ADD_ELEMENT: 'add_element',
    REMOVE_ELEMENT: 'remove_element',
    UPDATE_ELEMENT: 'update_element',
    DOM_EVENT: 'dom_event',
    DOM_HOOK: 'dom_hook',
    HTTP: 'httpRequest',
    OPEN_URL: 'openUrl'
  };
  const DATA_TYPE = {
    HTTP: 'httpRequest',
    STORAGE: 'storage'
  };

  function readonlyProp (instance, prop, value) {
    Object.defineProperty(instance, prop, {
      enumerable: true,
      value
    });
  }
  function unenumerable(instance, prop, opts = {}) {
    let option = {
      enumerable: false,
      ...opts
    };
    Object.defineProperty(instance, prop, option);
  }
  function isEmptyObj(object) {
    for (const key in object) {
      return false
    }
    return true
  }

  let nodeRef = 0;
  let customRef = {};
  let uniqueRef = (ref) => {
    if (ref && !customRef[ref]) {
      customRef[ref] = true;
      return ref
    }
    return (++nodeRef).toString()
  };
  let isDef = (value) => {
    return value !== undefined && value !== null
  };

  let domMap = {
    __root: document,
    root: document.body
  };
  let eventMap = {};
  function __createEl(domObj) {
    let { ref, attr, style, children, events, type } = domObj;
    let el;
    switch (type) {
      case 'text':
        el = document.createTextNode(domObj.text);
        return el
        break
      case 'body':
        el = document.createDocumentFragment();
        break
      default:
        el = document.createElement(type || 'div');
        if (isDef(attr.value)) {
          el.appendChild(document.createTextNode(attr.value));
        }
        break
    }
    __setRefMap(el, domObj);
    __setAttr(el, attr);
    __setStyle(el, style);
    __listenEl(el, events);
    if (children && children.length) {
      for (let i = 0; i < children.length; i++) {
        const child = __createEl(children[i]);
        el.appendChild(child);
      }
    }
    return el
  }
  function __setRefMap(el, domObj) {
    let ref = domObj.ref;
    el.__ref = ref;
    domMap[ref] = el;
    eventMap[ref] = {};
  }
  function __setAttr(el, attrs) {
    for (const key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        const attr = attrs[key];
        el.setAttribute(key, attr);
      }
    }
  }
  function __updateAttr(el, attrs) {
    let oldAttrsList = el.getAttributeNames();
    oldAttrsList.splice(oldAttrsList.indexOf('style'), 1);
    for (const key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        const attr = attrs[key];
        let index = oldAttrsList.indexOf(key);
        if (index !== -1) oldAttrsList.splice(index, 1);
        if (key === 'value') {
          updateTextContent(el, attr);
        } else {
          el.setAttribute(key, attr);
        }
      }
    }
    oldAttrsList.forEach(attrName => {
      el.removeAttribute(attrName);
    });
  }
  function updateTextContent (el, text) {
    let textNode;
    if (el.nodeType === 3) {
      textNode = el;
    } else if (el.firstChild.nodeType === 3) {
      textNode = el.firstChild;
    }
    el.textContent = text;
  }
  function __setStyle(el, styles) {
    function transformKey(key) {
      return key.replace(/-(.)/g, (match, $1) => {
        return $1.toUpperCase()
      })
    }
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        const style = styles[key];
        el.style[transformKey(key)] = style;
      }
    }
  }
  function __listenEl(el, events) {
    if (!el || !events) return
    let ref = el.__ref;
    for (let i = 0; i < events.length; i++) {
      const ev = events[i];
      eventMap[ref][ev] = true;
      el.addEventListener(ev, __genFnc(ref, 'dom_event', ev));
    }
  }
  function __genFnc(ref, action, type, cbId) {
    return function (e) {
      e.stopPropagation();
      let p = {
        module: 'dom',
        ref,
        action,
        payload: {
          type,
          event: e
        },
        cbId
      };
      debugLog('callJs from Native', p);
      EventRecive({ref, type, event});
    }
  }
  let actions = {
    [ACTION.CREATE_BODY] (domObj) {
      let body = domMap['root'];
      console.log(domObj.attr);
      let { attr, style, events, children } = domObj;
      __setRefMap(body, domObj);
      __setAttr(body, attr);
      __setStyle(body, style);
      __listenEl(body, events);
      let fragment = document.createDocumentFragment();
      for (let i = 0; i < children.length; i++) {
        const child = __createEl(children[i]);
        fragment.appendChild(child);
      }
      body.innerHTML = '';
      body.appendChild(fragment);
    },
    [ACTION.ADD_ELEMENT] ({ref, domObj}) {
      var parentNode = domMap[ref];
      if (parentNode) {
        let child = __createEl(domObj);
        parentNode.appendChild(child);
      } else {
        console.error('不存在父节点，写错啦');
      }
    },
    [ACTION.ADD_EVENT] ({ ref, type }) {
      let map = eventMap[ref] || (eventMap[ref] = {});
      if (!map[type]) {
        map[type] = true;
        domMap[ref].addEventListener(type, __genFnc(ref, 'dom_event', type));
      }
    },
    [ACTION.UPDATE_ELEMENT] ({ref, update}) {
      if (update.attr) {
        __updateAttr(domMap[ref], update.attr);
        debugLog('updateElement_attr', update.attr);
      }
    }
  };

  let actions$1 = {
    [ACTION.HTTP] (opts, cbId) {
      var xhr = new XMLHttpRequest();
      xhr.open(opts.method, opts.url);
      xhr.onload = function (e) {
        callJs('data', ACTION.HTTP, JSON.stringify({
          responseText: this.responseText,
          status: this.status
        }), cbId);
      };
      xhr.onerror = function (e) {
        callJs('data', ACTION.HTTP, JSON.stringify({
          error: new Error('xhr error')
        }), cbId);
      };
      xhr.send(opts.data);
    }
  };

  window.callNative = function (module, action, payload, cbId) {
    let p = { module, action, payload, cbId };
    this.cb = p.cbId;
    debugLog('callNative params (from Js)', p);
    switch (module) {
      case 'dom':
        actions[action](payload);
        break;
      case 'data':
        actions$1[action](payload, cbId);
        break;
      default:
        break;
    }
  };

  var css = "html, body {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody, div {\r\n  display: flex;\r\n}"

  injectStyle(css);

  let injections = {
    global: null,
    callJs () {
      throw new Error('no callJs function injection')
    },
    callNative () {
      throw new Error('no callNative function injection')
    }
  };
  if (typeof callJs !== 'undefined') {
    injections.callJs = callJs;
  }
  if (typeof callNative !== 'undefined') {
    injections.callNative = callNative;
  }
  function inject(n, injection) {
    injections[n] = injection;
  }

  let DomModuler = (() => {
    let registerMap = {};
    return {
      act (ref, action, payload, cbId) {
        let evter = registerMap[ref];
        switch (action) {
          case ACTION.DOM_EVENT:
            evter.emitEvent(payload.type, payload.event);
            break;
          case ACTION.DOM_HOOK:
            evter.emitHook(payload.type, payload.param);
            break;
          default:
            evter.emitEventById(cbId, payload);
            break;
        }
      },
      register (ref, domEventer) {
        registerMap[ref] = domEventer;
      }
    }
  })();

  let cbMap = {};
  let getCbId = () => `httpReq_${uniqueRef()}`;
  function register(type, payload, callback) {
    switch (type) {
      case DATA_TYPE.HTTP:
        let cbId = getCbId();
        cbMap[cbId] = callback;
        return cbId
      default:
        break;
    }
  }
  function act(action, response, cbId) {
    switch (action) {
      case ACTION.HTTP:
        cbMap[cbId] && cbMap[cbId](JSON.parse(response));
        break;
      default:
        break;
    }
  }
  var dataModuler = {
    getCache() {},
    register,
    act
  }

  class Bridge {
    constructor () {
      this.dom = DomModuler;
      this.dataModuler = dataModuler;
      this.receive.bind(this);
      this.httpCbId;
    }
    register (type, eventer) {
      switch (type) {
        case MODULE.DOM:
          console.log(eventer.id, eventer.__isBlank);
          if (!eventer.__isBlank) {
            this.dom.register(eventer.id, eventer);
            return true
          } else {
            return false
          }
        default:
          break;
      }
    }
    data_send ({type, action, payload, callback}) {
      let cbId = this.dataModuler.register(type, payload, callback);
      this.httpCbId = cbId;
      payload.callback = 'httpResponse';
      this.send({ module: MODULE.DATA, action, payload, cbId});
    }
    send ({module, ref, action, payload, cbId}) {
      return injections.callNative(module, action, payload, cbId || 12313)
    }
    receive (module, action, payload, cbId) {
      console.log('========== receive ==========');
      console.log({ module, action, cbId, payload });
      switch (module) {
        case MODULE.DOM:
          this.dom.act(payload.ref, action, payload, cbId);
          break;
        case MODULE.DATA:
          this.dataModuler.act(action, payload, this.httpCbId);
        default:
          break;
      }
      console.log('========== receive End ==========');
    }
  }
  let bridge = new Bridge();
  inject('callJs', bridge.receive.bind(bridge));

  function __formatGetData(url, data) {
    /\?/.test(url) ? (url += '&') : (url += '?');
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        url += `${key}=${value}&`;
      }
    }
    return url.replace(/&$/, '')
  }
  function __requestOpts({ url, method = 'get', data = {}, headers, ...opts }) {
    if (!url.trim()) return
    let requestOpts = {};
    requestOpts.method = method.toLowerCase();
    if (requestOpts.method === 'get') {
      url = __formatGetData(url, data);
    } else {
      requestOpts.data = data;
    }
    requestOpts.url = url;
    headers && (requestOpts.headers = headers);
    requestOpts.type = opts.type || 'text';
    return {
      requestOpts,
      callback: opts.callback
    }
  }
  let HttpRequest = (opts) => {
    let { requestOpts, callback } = __requestOpts(opts);
    bridge.data_send({
      type: DATA_TYPE.HTTP,
      action: ACTION.HTTP,
      payload: requestOpts,
      callback
    });
  };
  HttpRequest.get = (opts) => {
    HttpRequest(Object.assign(opts, {method: 'get'}));
  };

  function append(parent, node, list = parent.children) {
    let lastChild = list[list.length - 1] || null;
    lastChild && (lastChild.nextSibling = node);
    node.previousSibling = lastChild;
    node.parentNode = parent;
    list.push(node);
    return node
  }
  function resetNode(node) {
    if (node.parentNode) {
      remove(node);
    }
    return node
  }
  function remove (node) {
    let nodeNext = node.nextSibling;
    let nodePrev = node.previousSibling;
    nodeNext && (nodeNext.previousSibling = nodePrev);
    nodePrev && (nodePrev.nextSibling = nodeNext);
    let children = node.parentNode.children;
    children.splice(children.indexOf(node), 1);
    node.parentNode = node.nextSibling = node.previousSibling = null;
    return node
  }
  function insertBefore(node, refNode, list = refNode.parentNode.children) {
    let refNodePrev = refNode.previousSibling;
    if (node == refNodePrev) return node
    if (refNodePrev) {
      node.previousSibling = refNodePrev;
      refNodePrev.nextSibling = node;
    }
    node.nextSibling = refNode;
    refNode.previousSibling = node;
    node.parentNode = refNode.parentNode;
    list.splice(list.indexOf(refNode), 0, node);
    return node
  }
  function insertAfter(node, refNode, list = refNode.parentNode.children) {
    let refNodeNext = refNode.nextSibling;
    if (node == refNodeNext) return node
    if (refNodeNext) {
      node.nextSibling = refNodeNext;
      refNodeNext.previousSibling = node;
    }
    node.previousSibling = refNode;
    refNode.nextSibling = node;
    node.parentNode = refNode.parentNode;
    list.splice(list.indexOf(refNode) + 1, 0, node);
    return node
  }
  function isChild(parent, node) {
    return parent === node.parentNode
  }

  const NodeType = {
  	ELEMENT_NODE: 1,
  	DOCUMENT_NODE: 9,
  	TEXT_NODE: 3
  };
  class Node {
  	constructor (ref) {
  		this.ref = uniqueRef(ref);
  		this.children = [];
  		this.parentNode = null;
  		this.nextSibling = null;
  		this.previousSibling = null;
  		this.nodeType = null;
  		this.isNatived = false;
  	}
  	destroy () {
  		resetNode(this);
  	}
  	setInNative () {
  		if (this.isNatived) return
  		this.isNatived = true;
  		if (this.children.length > 0) {
  			let chs = this.children;
  			for (let i = 0; i < chs.length; i++) {
  				let node = chs[i];
  				node.isNatived || node.setInNative();
  			}
  		}
  	}
  	outNative() {
  		this.isNatived = false;
  	}
  	toJSON() {
  		let { ref, parentNode, nextSibling, previousSibling, children } = this;
  		return {
  			ref,
  			parentNode: parentNode ? parentNode.ref : null,
  			nextSibling: nextSibling ? nextSibling.ref : null,
  			previousSibling: previousSibling ? previousSibling.ref : null,
  			children: children.map((child) => child.toJSON())
  		}
  	}
  }
  Node.isNode = (n) => node instanceof Node;

  class Eventer {
    constructor (el, initEvent) {
      this.refEl = el;
      readonlyProp(this, 'id', el.ref);
      this.events = {};
      this.eventsMap = {};
      this.hook = {};
      this.hookMap = {};
      this.cbMap = {};
      this.__cbId = 0;
      Object.defineProperty(this, '__isBlank', {
        enumerable: false,
        get () {
          return isEmptyObj(this.cbMap)
        }
      });
      this.__isRegistered = false;
      initEvent && this.__initEvent(initEvent);
    }
    addEvent(type, cb, isImmediate = true) {
      if (!this.events[type]) {
        this.events[type] = [];
        this.eventsMap[type] = [];
      }
      let evs = this.events[type];
      evs && evs.push(cb);
      let cbId = this.__cbId++;
      this.cbMap[cbId] = cb;
      this.eventsMap[type].push(cbId);
      if (isImmediate) {
        console.log(' === call bridge add event ===');
        this.send(ACTION.ADD_EVENT, { ref: this.id, type });
        console.log(' === call bridge add event end ===\n');
      } else if (!this.__isRegistered) {
        this.registerToBridge();
      }
      return cbId
    }
    registerToBridge () {
      let res = false;
      if (this.__isRegistered) return res
      if (res = bridge.register(MODULE.DOM, this)) {
        this.__isRegistered = true;
      }
      return res
    }
    emitEvent (type, event) {
      let evts = this.events[type];
      let isBubble = true;
      event.stopPropagation = () => { isBubble = false;};
      if (evts && evts.length > 0) {
        for (let i = 0; i < evts.length; i++) {
          const evt = evts[i];
          evt.call(this.refEl, event);
        }
      }
      let parent;
      if (isBubble && (parent = this.refEl.parentNode)) {
        parent.emit(type, event);
      }
    }
    emitEventById(...args) {
      if (Array.isArray(args[0])) {
        args[0].forEach((cb) => {
          this.cbMap[cb.id].call(this.refEl, cb.e, cb.payload);
        });
      } else {
        this.cbMap[args[0]].call(this.refEl, ...args.slice(1));
      }
    }
    addHook(type, cb) {
      let cbId = this.__cbId++;
      this.hook[type] = cb;
      this.hookMap[type] = cbId;
      this.cbMap[cbId] = cb;
      this.send(ACTION.ADD_HOOK, { type });
    }
    emitHook(type, payload) {
      this.hook[type] && this.hook[type].call(this, payload);
    }
    getEventMap() {
      return this.eventsMap
    }
    getEventList () {
      return Object.keys(this.eventsMap)
    }
    offEvent (type, fncId) {
      if (this.events[type]) {
        if (fncId) {
          let fnc = this.cbMap[fncId];
          let fncIndex = this.events[type].indexOf(fnc),
            idIndex = this.eventsMap[type].indexOf(fncId);
          this.events[type].splice(fncIndex, 1);
          this.eventsMap[type].splice(idIndex, 1);
          delete this.cbMap[fncId];
        } else {
          delete this.events[type];
          let cbIdArray = this.eventsMap[type];
          while (cbIdArray.length) {
            delete this.cbMap[cbIdArray.pop()];
          }
          delete this.eventsMap[type];
        }
      }
    }
    __initEvent (evts) {
      for (const type in evts) {
        if (evts.hasOwnProperty(type)) {
          const ev = evts[type];
          this.addEvent(type, ev, false);
        }
      }
    }
    send (action, payload, cb) {
      let cbId;
      if (cb && typeof cb === 'function') {
        cbId = this.__cbId++;
        this.cbMap[cbId] = cb;
      }
      var __send = (action, payload, cb) => {
        let cbId;
        if (cb && typeof cb === 'function') {
          cbId = this.__cbId++;
          this.cbMap[cbId] = cb;
        }
        bridge.send({
          module: 'dom',
          action,
          payload,
          cbId
        });
      };
      if (!this.__isRegistered) {
        console.log(' ====== register to bridge ======');
        if(bridge.register(MODULE.DOM, this)) {
          this.__isRegistered = true;
          this.send = __send;
        }
      }
      bridge.send({
        module: 'dom',
        ref: this.id,
        action,
        payload,
        cbId
      });
    }
    __send (action, payload, cb) {
      let cbId;
      if (cb && typeof cb === 'function') {
        cbId = this.__cbId++;
        this.cbMap[cbId] = cb;
      }
      bridge.send({
        module: 'dom',
        ref: this.id,
        action,
        payload,
        cbId
      });
    }
  }

  let TYPEMAP;
  {
    TYPEMAP = {
      'body': 'div',
      'div': 'div',
      'text': 'p',
      'p': 'p',
      'img': 'img',
      'image': 'img'
    };
  }
  function getType(type) {
    return TYPEMAP[type] || 'div'
  }

  function createBody() {
    return new Element('body', {}, 'root')
  }
  class Element extends Node {
    constructor (type = 'div', opts = {}, ref) {
      super(ref);
      this.type = getType(type);
      this.nodeType = NodeType.ELEMENT_NODE;
      unenumerable(this, '_opts', opts);
      this.style = opts.style || {};
      this.attr = opts.attr || {};
      opts.children && (this.children = this.children.concat(opts.children));
      this.eventer = new Eventer(this, opts.events);
      unenumerable(this, 'eventer');
      Object.defineProperty(this, 'events', {
        enumerable: true,
        get () {
          return this.eventer.getEventList()
        }
      });
    }
    setAttr(key, value, isImmediate = false) {
      this.attr[key] = value;
      if (isImmediate || this.isNatived) {
        this.eventer.send(ACTION.UPDATE_ELEMENT, {
          ref: this.ref,
          update: {
            attr: this.attr
          }
        });
      }
    }
    setAttrs(attrObj, isReplaceAll = false, isImmediate = false) {
      if (isReplaceAll) {
        this.attr = attrObj;
      } else {
        Object.assign(this.attr, attrObj);
      }
      if (this.isNatived) {
        this.eventer.send(ACTION.UPDATE_ELEMENT, {
          ref: this.ref,
          update: {
            attr: this.attr
          }
        });
      }
    }
    setStyle (styleObj = {}) {
      Object.assign(this.style, styleObj);
      if (this.isNatived) {
        this.eventer.send(ACTION.UPDATE_ELEMENT, {
          ref: this.ref,
          update: {
            style: this.style
          }
        });
      }
    }
    appendChild (node, isImmediate = false) {
      resetNode (node);
      append(this, node, this.children);
      if(isImmediate || this.isNatived) {
        this.eventer.send(ACTION.ADD_ELEMENT, {
          ref: this.ref,
          domObj: node
        });
        node.isNatived = true;
      }
      return node
    }
    insertBefore(node, refNode, isImmediate = false) {
      if (!isChild(this, refNode)) {
        console.error('reference node isn\'t in this node');
      }
      resetNode(node);
      return insertBefore(node, refNode, this.children)
    }
    insertAfter(node, refNode, isImmediate = false) {
      if (!isChild(this, refNode)) {
        return console.error('reference node isn\'t in this node')
      }
      resetNode(node);
      return insertAfter(node, refNode, this.children)
    }
    removeChild(node, isImmediate = false) {
      if (isChild(this, node)) {
        remove(node);
        if (isImmediate || this.isNatived) {
          this.eventer.send(ACTION.REMOVE_ELEMENT, {
            ref: this.ref,
            delRef: node.ref
          });
          node.isNatived = false;
        }
        return node
      }
      return null
    }
    render () {
    }
    on (type, fnc, isImmediate = false) {
      return (typeof fnc === 'function')
        ? this.eventer.addEvent(type, fnc, (isImmediate || this.isNatived))
        : console.error(new Error('the event callback must be a function'))
    }
    emit (type, param) {
      this.eventer.emitEvent(type, param);
    }
    off(type, fncId) {
      this.eventer.offEvent(type, fncId);
    }
    toJSON () {
      let { ref, style, attr, events, children, type } = this;
      return {
        ref,
        type,
        style,
        attr,
        events,
        children: children.map((child) => child.toJSON())
      }
    }
  }

  class TextNode extends Node {
    constructor (text) {
      super();
      this.text = text;
      this.attr = {};
      this.attr.value = text;
      this.style = {};
      this.nodeType = NodeType.TEXT_NODE;
      this.type = 'text';
    }
    setText (text) {
      this.text = text;
      this.attr.value = text;
    }
    toJSON () {
      let { ref, text, type, attr, children, style } = this;
      return {
        ref,
        text,
        type,
        attr,
        children,
        style
      }
    }
  }

  const BODY_REF = 'root';
  const DOC_REF = '_root';
  class Document {
    constructor () {
      this.nodeType = NodeType.DOCUMENT_NODE;
      this.body = createBody();
      this.ref = DOC_REF;
      this.body.parentNode = this;
      this.children = [this.body];
      this.eventer = new Eventer(this);
      this.isNatived = true;
    }
    createElement (type, opts) {
      return new Element(type, opts)
    }
    createTextNode (text) {
      return new TextNode(text)
    }
    createComment () {
    }
    appendChild (body) {
      if (body instanceof Element) {
        body.ref = BODY_REF;
        this.body = body;
        this.render();
      }
    }
    removeChild (body) {
      return false
    }
    render () {
      this.eventer.send(ACTION.CREATE_BODY, this.body.toJSON());
      this.body.setInNative();
    }
    on (type, fnc, isImmediate) {
      return (typeof fnc === 'function')
        ? this.eventer.addEvent(type, fnc, isImmediate)
        : console.error(new Error('the event callback must be a function'))
    }
    emit (type, param) {
      this.eventer.emitEvent(type, param);
    }
  }
  var doc = new Document()

  inject('callNative', Viola.callNative);
  inject('HttpRequest', HttpRequest);
  Viola.bridge = injections;
  Viola.callJs = injections.callJs;
  Viola.EventRecive = (ret) => {
    injections.callJs('dom', 'dom_event', ret);
  };
  Viola.requireAPI = (n) => {
    return injections[n]
  };
  Viola.httpResponse = (ret) => {
    injections.callJs('data', 'httpRequest', ret);
  };
  Viola.doc = doc;

}());
