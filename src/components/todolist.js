import React, {Component} from 'react';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			value: ''
		};
		this.wrapper = React.createRef()
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.state.value &&
		this.setState((preStates) => ({
			list: [
				...preStates.list,
				this.state.value
			],     
			value: ''
			})
		);
		this.wrapper.current.focus()
	}

	handleRemoveItem(index) {
		this.setState(({list}) => ({
			list: list.filter((item, key) => key !== index)
		}));
	}

	handleChange = (event) => {
		this.setState({
			value : event.target.value
		})
	}	

	render() {
		const { value, list } = this.state;
		return (
			<div className="todolist-container">
				<div className="header">
					<h1>React todolist</h1>
					<form onSubmit={this.handleSubmit}>
						<input ref={this.wrapper} type="text" onChange={this.handleChange} value={value} />
						<input type="submit" className="btnSubmit"/>
					</form>
				</div>
				<div className="list-items">
					<table className="table table-hover w-100">
						<tbody>
							{
							list.map((item, index) => 
								<tr key={index}>
									<td className="task text-left pl-3">
										{item}
									</td>
									<td className="w-30">
										<button className="btn">
											<span onClick={() => this.handleRemoveItem(index)}>&#10006;</span>
										</button>
									</td>
								</tr>)
							}
						</tbody>
					</table>

				</div>
			</div>
		)
	}
}

export default Todolist;