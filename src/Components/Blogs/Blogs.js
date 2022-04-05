import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>1. What is Context API?</h2>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a kind of new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it lightly and with ease
                </p>
            </div>

            <div>
                <h2>2. What is symentic tag?</h2>
                <p>
                    A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: #div and #span - Tells nothing about its content. Examples of semantic elements: #form tag , #table tag , and #article tag - Clearly defines its content.
                </p>
            </div>
            <div>
                <h2>3.Difference between Inline block and Inline block elements?</h2>
                <p>
                Generally, inline elements may contain only data and other inline elements. You can't put block elements inside inline elements.
                By default, inline elements do not force a new line to begin in the document flow. Block elements, on the other hand, typically cause a line break to occur although, as usual, this can be changed using CSS.
                
                On the other hand we can say, Any element within a program, document or message is called inline or in-line. When considering HTML, any code built into the web page is called inline. And it does not include any code loaded from an external file. In any web page, almost all the contents are inline except the CSS and image files. Any element that starts a new line for a paragraph and uses the full page or container is called block elements. It has one line or multiple lines and possesses a line break before and after the elements in the line. CSS can be used for formatting the block element.
                </p>
            </div>
        </div>
    );
};

export default Blogs;