<script>
  import { data } from "./store.js";
</script>

<table border="1">
  <tr>
    <th>id</th>
    <th>date</th>
    <th>category</th>
    <th>value</th>
  </tr>
  {#each $data as item, i}
    <tr>
      <td>{i}</td>
      <td>{item.date}</td>
      <td>{item.category}</td>
      <td>{item.value}</td>
    </tr>
  {/each}
</table>
