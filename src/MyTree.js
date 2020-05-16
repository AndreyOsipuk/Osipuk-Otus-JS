import { LitElement, html } from "@polymer/lit-element";
import { MyLeaf } from './MyLeaf'


export class MyTree extends LitElement {

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.data = {};
    this.value = 0;
  }
  render() {
    return html`
      <ul>
      ${Object.keys(this.data).map(i => {
      if (typeof this.data[i] === 'object') {
        return html`<my-tree .data=${this.data[i][0]}></my-tree>`
      } else {
        return html`<my-leaf .value=${this.data[i]}></my-leaf>`
      }
    })
      }
      </ul>
    `;
  }
}

customElements.define("my-leaf", MyLeaf);