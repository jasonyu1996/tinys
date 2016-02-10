*Tinys* is a tiny selector for DOM

It is actually homework of Labmu.

### Usage

The usage is quite simple.

#### Selector

Function `$(sel)` is a selector which can return the nodes that match the parameters you feed to it.

`sel` is a string pattern you use to specify the limitations. So far, there have been three types.

* `#id-name` specifies the id of the node
* `.class-name` specifies the class name of the nodes
* `tag-name` specifies the tag name of the nodes

At present, you can only use exactly one such pattern of any type out of the three available ones listed above. You cannot use combinations of these patterns.

##### Return value

* If there is no matched node, the selector returns `null`
* If there is exactly one matched node, the selector returns that node packed in a `window.TNode` instance
* Otherwise, the selector returns an array containing all the nodes each of which is packed in a `window.TNode` instance.

#### window.TNode

##### Setting attributes

The method `attr(attrName, val)` will set the attribute named `attrName` of the node to `val`. Both `attrName` and `val` should be strings.

##### Getting attributes

The method `attr(attrName)` will return the value of the attribute named `attrName` of the node to `val`. If there is no such attribute, `undefined` is returned instead.

