---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<div class="bg-red-300 m-8 p-8">
<div data-controller="hello">
  <input type="text" class="border-2 shadow"
    data-hello-target="name">
  <button data-action="click->hello#greet">Greet</button>
</div>
</div>

