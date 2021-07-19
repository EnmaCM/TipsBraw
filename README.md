
# How to use

## What is a tool tip?
A tooltip is a message that appear when you place your mouse over an element.
You can achieve this behaviour nativaly by just writing your message on the attibute 
title of any element, but it have some limitations, for example:
 you can't write html code inside it and you can't change the style that comes by default with the browwser.
## **Example of usage**:

```html
    <button class="black-tooltip" data-tooltip="Message">Short button</button>
```
 - **data-tooltip:** Here you write your tooltip's content. It can be wether text or html.  

 - By default the tool tip's color is white but you can change it to black or any other color by just adding a class to its parent(the element that has the data-tooltip) indicating the color you want followed by -tooltip. Example: **class="colorName-tooltip"**.

## How to make your own styles

Just write the class to your element and then you can select the tooltip as follow:

```css
.name-of-your-class .tooltip{
    /* your style */
}
```
# License

TipsBaw is availible under the [MIT LICENSE]("https://opensource.org/licenses/MIT")