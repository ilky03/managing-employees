import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { onAdd } = this.props;
        if (this.state.name.length < 3) {
            alert('Ім\'я має бути більше 3 символів!');
        } else if (!this.state.salary || this.state.salary < 0) {
            alert('Уведіть зарплату! (>=0)');
        } else {
            onAdd (
                {name: this.state.name, 
                 salary: this.state.salary, 
                 increase: false, 
                 rise: false,
                 id: Math.trunc(Math.random()*10000)}
            )
        }
    
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавити нового працівника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?" 
                        name="name"
                        value={name} 
                        onChange={this.onChangeValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onChangeValue} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>Добавити</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;