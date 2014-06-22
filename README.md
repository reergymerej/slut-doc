# Whats Up Doc

Generate pretty API docs in your project's README.

## How to Use

**Step 1**

Document your code with blocks like this.

```js
/**
* @name getSome
* @description Get the sum of two numbers.
* @param {Number} a the first number
* @param {Number} [b=3.14] the second number
* @return {Number}
* @public
*/
getSome: function (a, b) {
    if (b === undefined) {
        b = 3.14;
    }
    return a + b;
}
```

**Step 2**

The clarity and maintainability of your code has undoubtably already improved, but if you want, you can run this from your terminal.

    ./whatsupdoc .

This will find documentation blocks in JavaScript files and add them to the end of README.md.

**Step 3**

Watch the adoption rate of your beautiful code skyrocket because you made it easy for people to use.

## Tags

**[@class](#class)**  
**[@description](#description)**  
**[@function](#function)**  
**[@method](#method)**  
**[@name](#name)**  
**[@param](#param)**  
**[@private](#private)**  
**[@return](#return)**  

---

### Simple Text

These tags should be followed with arbitrary text.  Well, not arbitrary, but you know what I mean.  If needed, the text can span multiple lines.

<a name="description"></a>
**@description**

Do you really need a description of description?

<a name="name"></a>
<a name="method"></a>
<a name="function"></a>
<a name="class"></a>
**@name**

The name of the method, function, or class being documented.  You can also use **@method**, **@function**, or **@class**.

---

### Optional Complexity

These tags should be followed by one or more of the following optional elements *in this order*:

* An indication of the type of value, wrapped in braces.  These don't have to be real types, but here are some suggestions.

    *   {String}
    *   {Number}
    *   {String/Number}
    *   {String[]}
    *   {DonkeyCake}

* The name of the parameter we're describing.  You can also indicate a parameter is optional and its default value if you're so inclined.  Name doesn't make sense for @return, since you don't know who's handling it, but it is here for uniformity.

    *   foo
    *   [foo]
    *   [foo=42]

* A description of what the heck this thing is.  This can span multiple lines if you are particularly loquacious.

<a name="param"></a>
**@param**

A parameter passed to the function.  *See above for options.*

<a name="return"></a>
**@return**

The value returned from the function.  *See above for options.*

---

<a name="private"></a>
### Privacy Flag

If you want to document blocks for your own convenience, but not have them show up in the generated API docs, use `@private`.

```js
/**
* @description This block won't show up in the generated docs.
* @private
*/
```