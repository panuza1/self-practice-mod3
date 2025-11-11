// CRUD on quote 
import { getItems, deleteItem, addItem } from "./mylib/fetchUtils";
//GET Quotes
const quoteURL = `${import.meta.env.VITE_APP_URL}/quotes`
async function loadQuotes() {
  try {
      const quotes = await getItems(quoteURL);
    console.log(quotes);
    return quotes
  } catch (error) {
    alert(error)
      return[];
  }
}

//DELETE
async function deleteQuote(id) {
  try {
    const removeId = deleteItem(id)
    return removeId
  } catch (error) {
    alert(`Quote: ${error}`)
  }
}
//ADD
async function addQuote(item) {
    try {
        const addedQuote = await addItem(quoteURL, item)
        return addedQuote
    } catch (error) {
        alert(`Quote: ${error}`)
    }
}
export { loadQuotes, deleteQuote, addQuote}
//Create Quote
//Edit Quote
//Delete Quote