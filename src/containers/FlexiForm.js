import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TextField from '../components/TextField'
import DropdownField from '../components/DropdownField'

class FlexiForm extends Component {
    state = {
        items: [
            {
                id: 1,
                name: "person_name",
                label: "Person's Name",
                type: "text",
                value: ''
            },
            {
                id: 2,
                name: "states",
                label: "Person's state",
                type: "dropdown",
                values: [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
                ],
                value: ''
            }
        ]
    }

    onFlexiSubmit = (event) => {
        event.preventDefault();
        let postObject = this.state.items.map(postData => {
            return { [postData.name]: postData.value }
        })
        event.target.reset();
        console.log(postObject);
    }

    handleChange = (event, id) => {
        let newData = this.state.items.map(x => {
            if (x.id == id) {
                x.value = event.target.value
            }
            return x;
        })
        this.setState({
            items: newData
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div className="form-wrapper">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <form className="form-class" onSubmit={this.onFlexiSubmit}>
                                {items.map((form) => {
                                    if (form.type === "text") {
                                        return (
                                            <TextField
                                                name={form.name}
                                                key={form.id}
                                                label={form.label}
                                                handleChange={(e) => this.handleChange(e, form.id)}
                                            />
                                        );
                                    }
                                    if (form.type === "dropdown") {
                                        return (
                                            <DropdownField
                                                name={form.name}
                                                key={form.id}
                                                val={form.values}
                                                label={form.label}
                                                handleChange={(e) => this.handleChange(e, form.id)}
                                            />
                                        );
                                    }
                                })}
                                <input type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FlexiForm;
