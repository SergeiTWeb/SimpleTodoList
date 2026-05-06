import { useState } from "react"

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return 

    onSubmit(newItem)

        setNewItem("") // clears up the input each time after typing
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor='item'>New Item</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value) } //when I enter a new value - update the value and rerun the code. Otherwise nothing can be set in the input sonce value declared as empty in the code above
          type="text" 
          id="item" 
          placeholder="What needs to be done?"
          autoFocus
        />
      </div>
      <button className="btn">Add</button>
    </form>
)
}