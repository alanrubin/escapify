
# JQuery Escapify Plugin - Helping escaping HTML in javascript

Escapify is a jQuery plugin that helps you escape and unescape HTML entities for displaying them 
correctly in your page. For more details about HTML entities, please take a look [here](http://www.w3schools.com/html/html_entities.asp).

## Usage

Escapify adds two methods to jQuery:

* $.escapifyHTML(text) - Search the text for applicable characters and convert them to HTML entities.   
	Example: $.escapifyHTML('Alan<Rubin>&ehlegal') returns 'Alan&lt;Rubin&gt;&amp;ehlegal'
	
* $.unescapifyHTML(text) - Search the text for HTML entities and convert them to specific characters.   
	Example: $.unescapifyHTML('Alan&lt;Rubin&gt;&amp;ehlegal') returns 'Alan<Rubin>&ehlegal'

## Anecdote (and Use Case)

I was working with [JQuery editable plugin](http://www.appelsiini.net/projects/jeditable) (inplace editing), and text with HTML entities / applicable characters were 
being displayed incorrectly. By looking at [github's issue](http://github.com/tuupola/jquery_jeditable/issues#issue/4), I have found an easy way to escape them using jQuery and I thought it will be nice to create a jQuery plugin to provide it to the world. Hope it helps... Suggestions are warmly welcomed.

## License 

(The MIT License)

Copyright (c) 2009 Alan Rubin &lt;alan@therubinway.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.