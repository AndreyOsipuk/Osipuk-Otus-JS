import { LitElement, html } from "@polymer/lit-element";


export class MyLeaf extends LitElement {
    static properties = {
      value: { type: String }
    };
  
    render() {
      return html`
      <li>${this.value}</li>
      `;
    }
  }