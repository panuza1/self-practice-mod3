//CRUD on any items
//GET
async function getItems(url) {
  try {
    const res = await fetch(url) //fetch returns respnse object
    console.log(res)
    const data = await res.json() //json() converts json string to JavaScript object
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

async function deleteItem(url, id) {
    try {
        const res = await fetch(`${url}/${id}`, {method: "DELETE"});
        if(!res.ok) throw new Error("fail to delete item");
        return id;
    } catch(error) {
        throw new Error(error.message)
    }
}

async function addItem(url, item) {
    try {
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
        if (res.status !== 201) throw new Error("Fail to add item")
        const addedItem = res.json()
        return addedItem
    } catch (error) {
        throw new Error(error.message)
    }
}

export { getItems, deleteItem, addItem}
//POST
//PUT
//DELETE