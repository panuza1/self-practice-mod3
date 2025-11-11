import { deleteQuote, loadQuotes } from "./quoteManagement";

document.addEventListener('DOMContentLoaded', async () => {
    const quotes = await loadQuotes()

    // create html quote cards
    const quoteList = document.getElementById("quoteList")
    quotes.forEach((quote) => {
        quoteList.innerHTML += `<div class="quote-card" data-id="${quote.id}">
                        <p>${quote.content}</p>
                        <p class="author">${quote.author}</p>
                        <div class="actions">
                            <button class="edit" data-id="${quote.id}">Edit</button>
                            <button class="delete" data-id="${quote.id}">Delete</button>
                    </div>`
    });
    const deleteBtns = document.querySelectorAll('button.delete')
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', handleDelete);
    });
})

function handleDelete(e) {
    console.log(e.target.dataset.id)

    const removeId = e.target.dataset.id
    const ans = confirm(`Do you want to delete quote: ${removeId}`)
    if (ans) {
        deleteQuote(removeId)
        const removeTarget = document.querySelector(`[data-id="${removeId}"]`)
        document.getElementById('quoteList').removeChild(removeTarget)
    }
}


