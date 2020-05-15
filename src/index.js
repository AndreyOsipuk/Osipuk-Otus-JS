import { LitElement, html } from "@polymer/lit-element";
import { MyTree } from './MyTree'
import { MyLeaf } from './MyLeaf'

const data = {
  "id": 1,
  "items": [{
    "id": 2,
    "items": [{
      "id": 3
    }]
  }]
}

class App extends LitElement {
  static properties = {
    message: { type: String }
  };
  constructor() {
    super();
    this.data = {
      "id": 1,
      "items": [{
        "id": 2,
        "items": [{
          "id": 3
        }]
      }]
    }
  }
  render() {
    return html`
      <p>Hello ${this.message}</p>
      <my-tree data=${['a',1]}></my-tree>
    `;
  }
}

customElements.define("x-app", App);
customElements.define("my-tree", MyTree);
