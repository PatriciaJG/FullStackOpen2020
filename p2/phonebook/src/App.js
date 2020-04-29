import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = (props) => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456',
      id: 0,
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 0 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 0 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 0 },
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  let personsToShow = [...persons]
  if (filter) {
    personsToShow = personsToShow.filter((person) =>
      person.name.toLocaleLowerCase().includes(filter.toLowerCase())
    )
  }

  console.log(filter)

  let createId = persons.map((person) => (person.id = Math.random() * 100))
  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: createId,
    }

    if (
      persons.filter((person) => person.name === personObject.name).length > 0
    ) {
      window.confirm(`${personObject.name} is already added to the notebook`)
      return
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleNameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new </h3>
      <PersonForm
        addName={addName}
        handleNameAdd={handleNameAdd}
        handleNumberAdd={handleNumberAdd}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
