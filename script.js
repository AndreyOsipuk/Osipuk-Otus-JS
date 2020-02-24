// С помощью Custom Elements создать приложение для показа дерева с помощью 
// компонентов my-tree и my-leaf. Компоненты должны получать данные о структуре
//  поддерева от родительского элемента. Используйте Shadow DOM при отрисовке компонент.
//   Можно также использовать для реализации Lit-Element, Lit-HTML или Polymer.


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