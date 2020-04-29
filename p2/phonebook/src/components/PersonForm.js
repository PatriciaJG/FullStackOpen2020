import React from 'react'

const PersonForm = ({
  addName,
  newName,
  newNumber,
  handleNameAdd,
  handleNumberAdd,
}) => {
  return (
    <div>
      <form onSubmit={addName}>
        <h3>Add a new</h3>
        <div>
          <p>
            Name: <input value={newName} onChange={handleNameAdd} />
          </p>
          <p>
            Number: <input value={newNumber} onChange={handleNumberAdd} />
          </p>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default PersonForm
