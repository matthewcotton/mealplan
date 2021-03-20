import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {FaPlus} from 'react-icons/fa';

 class AddRecipe extends React.Component {
    state = {
        recipetitle: "",
        preptime: "",
        cooktime: "",
        serves: "",
        measurement: [{measurement:""}],
        unit:  [{unit:""}],
        ingredient:  [{ingredient:""}],
        steps: [{steps:""  }],
        number: [{number:""}],
      };
    
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
                  type="select"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="preptime"
                  placeholder="Prep Time">
                  <option value="">Prep Time</option>
                  <option value="5 minutes">5 minutes</option>
                  <option value="10 minutes">10 minutes</option>
                  <option value="15 minutes">15 minutes</option>
                  <option value="20 minutes">20 minutes</option>
                  <option value="25 minutes">25 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="35 minutes">35 minutes</option>
                  <option value="40 minutes">40 minutes</option>
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
                  type="select"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="cooktime"
                  placeholder="Cook Time">
                  <option value="">Cook Time</option>
                  <option value="10 minutes">10 minutes</option>
                  <option value="20 minutes">20 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="40 minutes">40 minutes</option>
                  <option value="50 minutes">50 minutes</option>
                  <option value="1 Hour">1 Hour</option>
                  <option value="1.30 Hours">1.30 Hours</option>
                  <option value="2 Hours">2 Hours</option>
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
                  type="select"
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
               <Button className="button-plus" onClick={()=>{
                  this.setState(previousState=>({measurement:[...previousState.measurement,
                  {measurement:"", unit:"", ingredients:""}]}))}}>
              <FaPlus />
              </Button>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
              {this.state.measurement.map(measurement=> (
                <input type="text"
                key={measurement.name}
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
              {this.state.measurement.map(unit=> (
                <select
                  onChange={this.changeHandler}
                  key={unit.name}
                  type="select"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="unit"
                  placeholder="Unit">
                  <option value="">Unit</option>
                  <option value="c(Cup)">c(Cup)</option>
                  <option value="l(Liter)">l(Liter)</option>
                  <option value="kg(Kilogram)">kg(Kilogram)</option>
                  <option value="g(Gram)">g(Gram)</option>
                  <option value="tsp(Teaspoon)">tsp(Teaspoon)</option>
                  <option value="dp(Drop)">dp(Drop)</option>
                  <option value="oz(Ounce)">oz(Ounce)</option>
                  <option value="Tbsp(Tablespoon)">Tbsp(Tablespoon)</option>
                </select>
              ))}
                  </Col>
                  <Col>
                  <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
              {this.state.measurement.map(ingredient=> (
                <input type="text"
                key={ingredient.name}
                  name="ingredient"
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Ingredient"
                  required
                />
              ))}
                <div className="valid-feedback">Looks good!</div>
                  </Col>
              </Row>
              <h2 className="header1">Add Steps</h2>
              <Row>
              <Button className="button-plus" onClick={()=>{
                        this.setState(previousState=>({steps:[...previousState.steps,
                         {steps:"", number:previousState.currentStep}],
                          currentStep: previousState.currentStep++}))}}>
              <FaPlus />
              </Button>
              <Col xs={2}>
              <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
              </label>
              {this.state.steps.map(number=> (
                <input 
                key={number.name}
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="1"
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
              {this.state.steps.map(steps=> (
                <input type="text"
                key={steps.name}
                  onChange={this.changeHandler}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Step One"
                  required
                />
              ))}
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
