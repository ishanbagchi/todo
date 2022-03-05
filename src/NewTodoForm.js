import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export class NewTodoForm extends Component {
	constructor(props) {
		super(props)
		this.state = { task: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value })
	}
	handleSubmit(evt) {
		evt.preventDefault()
		this.props.createTodo({ ...this.state, id: uuid(), isComplete: false })
		this.setState({ task: '' })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Task</label>
				<input
					type="text"
					placeholder="New Task"
					id="task"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add todo</button>
			</form>
		)
	}
}

export default NewTodoForm
