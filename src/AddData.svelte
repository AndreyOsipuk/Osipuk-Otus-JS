<script>
  import { data, category, add } from "./store.js";

  let date, text, selected;

  function handleSubmit() {
    add({
      date: date,
      category: selected,
      value: text
    });
    date = "";
    text = "";
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="date">Введите дату</label>
  <input id="date" type="date" bind:value={date} />

  <label for="category">Choose a category:</label>
  <select id="category" bind:value={selected}>
    {#each $category as item}
      <option value={item}>{item}</option>
    {/each}
  </select>
  <label for="value">Введите значение</label>
  <input id="value" type="text" bind:value={text} />
  <br />

  <button disabled={!date | !text | !selected} type="submit">Submit</button>
</form>
