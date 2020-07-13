marked.setOptions({
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value });

  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { class: "text-center display-4", id: "title" }, "Markdown Previewer"),
      React.createElement("div", { id: "container", class: "d-md-flex" },
      React.createElement("div", { id: "left", class: "col-md-6" },
      React.createElement("textarea", { class: "h-100 w-100 p-3", id: "editor", onChange: this.handleChange, value: this.state.input })),


      React.createElement("div", { id: "right", class: "col-md-6" },
      React.createElement("div", { class: "h-100 w-100 p-3", id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.input) } })))));




  }}


const placeholder = `# Welcome to the Markdown Previewer 
## Edit on the left, see the results on the right

Before you start, here are some examples of what you can do with Markdown.

Above you saw headers, which you can make using as many \#\s as you like.
The amount of \#\s corresponds with the number in the \`<h1><h2><h3>\` you want.

You can make an ordered list:
1. one list item
2. another list item
3. yet another list item
* You can also make unordered lists like this
  * and make sublists

You can even **bold** or *italic* text or even do __*both*__

Or you could ~~strike through~~ text

[This is a link to GitHub](http://github.com)

If you want to make a blockquote
> This is how you can write it

You can create a break<br>in your text too.

You can write inline \`<code>\` like thisOr you could write a code block:
\`\`\`
if (this === true) {
  array.push();
}
\`\`\`

You can add a To Do list:
- [x] completed item
- [ ] uncompleted item

and if you wanna add a cool picture...

![Image of Baby Yoda](https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fbaby-yoda-official-life-size-figure-the-mandalorian-00.jpg?fit=max&cbr=1&q=90&w=750&h=500)
`;

ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));