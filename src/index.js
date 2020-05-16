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
      "id1": 1,
      "id2": 2,
      "id3": 3,
      "items": [{
        "id1": 1,
        "id2": 2,
        "items": [{
          "id1": 1,
          "id2": 2
        }]
      }],
      "id4": 4,
    }
  }
  render() {
    return html`
      <p>Hello ${this.message}</p>
      <my-tree .data=${this.data}></my-tree>
    `;
  }
}

customElements.define("x-app", App);
customElements.define("my-tree", MyTree);
