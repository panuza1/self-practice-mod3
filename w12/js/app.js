import { loadQuotes } from "./quoteManagement.js";

document.addEventListener("DOMContentLoaded", async () => {
  const quotes = await loadQuotes();

  quotes.forEach((quote) => {
      const div = document.createElement("div");
      div.className = "quote-card";
      div.dataset.id = quote.id;

      const content = document.createElement("p");
      content.textContent = `"${quote.content}"`;
      const author = document.createElement("p");
      author.textContent = quote.author;

      div.appendChild(content);
      div.appendChild(author);
      quoteList.appendChild(div);

      const divActions = document.createElement("div");
      divActions.className = "actions";

      const editBtn = document.createElement("button");
      editBtn.dataset.id = quote.id;
      editBtn.textContent = "Edit";
      editBtn.className = "edit";

      const deleteBtn = document.createElement("button");
      deleteBtn.dataset.id = quote.id;
      deleteBtn.textContent = "delete";
      deleteBtn.className = "delete";

      divActions.appendChild(editBtn);
      divActions.appendChild(deleteBtn);
      div.appendChild(divActions);
    });
});
 