import { LitElement, html } from "@polymer/lit-element";
// import { MyLeaf } from './MyLeaf'
// customElements.define("my-leaf", MyLeaf);

export class MyTree extends LitElement {
    static properties = {
      data: { type: Array }
    };
   
    render() {
      console.log(this.data)
      return html`
      tree
      `;
    }
  }