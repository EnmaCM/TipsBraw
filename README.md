


<br>
TB is library for creating customizable hints or tooltips for your webpages.
 <br>
 <br>

# Table of contents

* [What is a tooltip?](#what-is-a-tool-tip)
* [How to use tipsBraw](#how-to-use-tipsbraw)
   * [Write your owns styles](#write-your-owns-styles)
* [Downloads](#how-to-install)
  * [Linux/mac](#download)
  * [Windows powershell](#download)
* [How to add it to your website](#add-it-to-your-proyect)
* [License](#license)


# What is a tool tip?
A tooltip is a message that appear when you place your mouse over an element.
You can achieve this behaviour nativaly by just writing your message on the attibute 
title of any element, but it have some limitations, for example:
 you can't write html code inside it and you can't change the style that comes by default with the browwser.

# How to use tipsBraw

## **Example of usage**:

```html
    <button class="black-tooltip" data-tooltip="Message">Short button</button>
```
 - **data-tooltip:** Here you write your tooltip's content. It can be wether text or html.  

 - By default the tool tip's color is white but you can change it to black or any other color by just adding a class to its parent(the element that has the data-tooltip) indicating the color you want followed by -tooltip. Example: **class="colorName-tooltip"**.

## **Write your owns styles**

You can overwrite the default's style of the hint; Just write the class to your element and then you can select the tooltip as follow:

```css
.name-of-your-class .tooltip{
    /* your style */
}
```

# How to install
## **Download**
- On linux/mac:
   ```console
    $ curl -LJO https://github.com//EnmaCM/TipsBrawJs/archive/refs/heads/master.zip
   ```
- On windows powershell
  ```console
   ps> (New-Object System.Net.WebClient).DownloadFile( "https://github.com//EnmaCM/TipsBrawJs/archive/refs/heads/master.zip")
  ```
Then extract the zip file on your proyect's folder.

## **Add it to your proyect:**

Write this on the head of your html:

```html
    <link rel="stylesheet" href="TipsBraw-master/tipsBraw.css">
```

Then write this at the end of your html body:

```html
    <script src="TipsBraw-master/tipsBraw.js"></script>
```

# License

TipsBaw is availible under the [MIT LICENSE]("https://opensource.org/licenses/MIT")