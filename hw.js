// для импорта базового шаблона на основе lit-element
import {LitElement, html } from 'lit-element'; 

// для создания логики самого компонента
class MyComponent extends LitElement {
    render(){
        return html`<p>Hello World!</p>`
    }
}


// для регистрации компонента в браузере
customElements.define('my-component', MyComponent);