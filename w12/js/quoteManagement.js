// CRUD on quote 
import { getItems } from "./mylib/fetchUtils";


//GET Quotes
async function loadQuotes() {
  try {
    const quotes = await getItems(`${import.meta.env.VITE_APP_URL}/quotes`)
    console.log(quotes)
    return quotes
  } catch (error) {
    alert(error)
  }
}

//DELETE
async function deleteQuote(id) {
  try {
    const removeId = deleteItem(quoteURL, id)
    return removeId
  } catch (error) {
    alert(`Quote: ${error}`)
  }
}
export { loadQuotes }
//Create Quote
//Edit Quote
//Delete Quote