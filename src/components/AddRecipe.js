import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {FaPlus} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

 class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        recipetitle: "",
        preptime: "",
        cooktime: "",
        serves: "",
        measurement: "",
        unit: "",
        ingredients: [{measurement:"", unit:"", ingredients:""}],
        number: "",
        steps: [{steps:"", number:""}]
      };
    }
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      
    
    render() {
        return (
            <Container>
        <div className="Form">
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <Row>
              <Col>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
                <input type="text"
                  value={this.state.recipetitle}
                  name="recipetitle"
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Recipe Title"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              </Row>
              <Row>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
              </label>
                <select
                  onChange={this.changeHandler}
                  type="numberofguests"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="preptime"
                  placeholder="Prep Time">
                  <option value="">Prep Time</option>
                  <option value="1">5 minutes</option>
                  <option value="2">10 minutes</option>
                  <option value="3">15 minutes</option>
                  <option value="4">20 minutes</option>
                  <option value="5">25 minutes</option>
                  <option value="6">30 minutes</option>
                  <option value="7">35 minutes</option>
                  <option value="8">40 minutes</option>
                </select>
                  </Col>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
              </label>
                <select
                  onChange={this.changeHandler}
                  type="numberofguests"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="cooktime"
                  placeholder="Cook Time">
                  <option value="">Cook Time</option>
                  <option value="1">10 minutes</option>
                  <option value="2">20 minutes</option>
                  <option value="3">30 minutes</option>
                  <option value="4">40 minutes</option>
                  <option value="5">50 minutes</option>
                  <option value="6">1 Hour</option>
                  <option value="7">1.30 Hours</option>
                  <option value="8">2 Hours</option>
                </select>
                  </Col>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
              </label>
                <select
                  onChange={this.changeHandler}
                  type="numberofguests"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="serves"
                  placeholder="Serves">
                  <option value="">Serves</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                  </Col>
              </Row>
              <h2 className="header1">Add Ingredients</h2>
              <br />
              <Row>
              <FaPlus className="button-plus" onClick={()=>{
                  this.setState(previousState=>({ingredients:[...previousState.ingredients,
                  {measurement:"", unit:"", ingredients:""}]}))}}/>
              <Col>
                  <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
              {this.state.ingredients.map(ingredients=>(
                <input type="text"
                  value={this.state.measurement}
                  key={uuidv4()}
                  name="measurement"
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Measurement"
                  required
                />
              ))}
                <div className="valid-feedback">Looks good!</div>
                </Col>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
              </label>
                <select
                  onChange={this.changeHandler}
                  type="numberofguests"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="unit"
                  placeholder="Unit">
                  <option value="">Unit</option>
                  <option value="1">c(Cup)</option>
                  <option value="2">l(Liter)</option>
                  <option value="3">kg(Kilogram)</option>
                  <option value="4">g(Gram)</option>
                  <option value="5">tsp(Teaspoon)</option>
                  <option value="6">dp(Drop)</option>
                  <option value="7">oz(Ounce)</option>
                  <option value="8">Tbsp(Tablespoon)</option>
                </select>
                  </Col>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
                <input type="text"
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Ingredients"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <h2 className="header2">Add Steps</h2>
              <Row>
              <FaPlus className="button-plus" onClick={()=>{
                        this.setState(previousState=>({steps:[...previousState.steps,
                         {steps:"", number:previousState.currentStep}],
                          currentStep: previousState.currentStep++}))}}>
              </FaPlus>
              <Col xs={2}>
              <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
              {this.state.steps.map(number=> (
                <input 
                key={uuidv4()}
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Add Number"
                  required
                />
              ))}
                <div className="valid-feedback">Looks good!</div>
              </Col>
                  <Col>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
                <input type="text"
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Step One"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              </Row>
              <Button className="button-submit" color="primary" type="submit">
                  Create Recipe
              </Button>
              </form>
              </div>
              </Container>
        )
    }
}

export default AddRecipe
