import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';


class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: "",
        prep_time: "",
        cook_time: "",
        serves: "",
      },
      ingredient: [],
      step: [],
    };
  }


  submitHandler = (event) => {
    event.preventDefault();
    //Send data to api
    let formdata = {};
    formdata['title'] = this.state.form.title;
    formdata['prep_time'] = this.state.form.prep_time;
    formdata['cook_time'] = this.state.form.cook_time;
    formdata['serves'] = this.state.form.serves;
    formdata['ingredient'] = this.state.ingredient;
    formdata['step'] = this.state.step;
    //Turn array into json
    let payload = JSON.stringify(formdata);
    console.log(payload);
  };



  //Update form data
  changeHandler = e => {
    let form = this.state.form;
    form[e.target.name] = e.target.value
    this.setState({
      form: form
    });
  };



  //Add new ingredient to list
  addIngredients = (e) => {
    //Get ingredients from
    let measurementInput = document.getElementById('measurement').value;
    let unitInput = document.getElementById('unit').value;
    let ingredientInput = document.getElementById('ingredient').value;
    //Add new ingredients to array
    this.setState((prevState) => ({
      //concat the new ingredients onto the array list
      ingredient: [...prevState.ingredient,
      { measurement: measurementInput, unit: unitInput, ingredient: ingredientInput }],
    }));
  }



  //Add new step to list
  addSteps = (e) => {
    //Get step from
    let stepInput = document.getElementById('step').value;
    let instructionInput = document.getElementById('instruction').value;
    //Add new ingredients to array
    this.setState((prevState) => ({
      //concat the new ingredients onto the array list
      step: [...prevState.step,
      { step: stepInput, instruction: instructionInput }],
    }));
  }



  //Print table rows
  printIngredients = () => {
    return this.state.ingredient.map((ingredient, index) => {
      //array map requires a key
      return (
        <tr key={index}>
          <td>
            {ingredient.measurement}
          </td>
          <td>
            {ingredient.unit}
          </td>
          <td>
            {ingredient.ingredients}
          </td>
        </tr>
      );
    });
  };


   //Print table rows
   printInstructions = () => {
    return this.state.step.map((step, index) => {
      //array map requires a key
      return (
        <tr key={index}>
          <td>
            {step.step}
          </td>
          <td>
            {step.instruction}
          </td>
        </tr>
      );
    });
  };



  render() {
    return (
      <Container>
        <div className="Form">
          <h1 className="header1">Create A Recipe</h1>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <Row>
              <Col lg={12}>
                <label
                  htmlFor="title"
                  className="grey-text"
                >
                </label>
                <input type="text"
                  onChange={this.changeHandler}
                  value={this.state.form.title}
                  name="title"
                  id="title"
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
                  htmlFor="prep_time"
                  className="grey-text"
                >
                </label>
                <select
                  onChange={this.changeHandler}
                  value={this.state.form.preptime}
                  id="prep_time"
                  className="form-control"
                  name="prep_time"
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
                  htmlFor="cook_time"
                  className="grey-text"
                >
                </label>
                <select
                  onChange={this.changeHandler}
                  value={this.state.form.cook_time}
                  id="cook_time"
                  className="form-control"
                  name="cook_time"
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
                  htmlFor="serves"
                  className="grey-text"
                >
                </label>
                <select
                  onChange={this.changeHandler}
                  value={this.state.form.serves}
                  id="serves"
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
            <h2 className="header2">Add Ingredients</h2>
            <br />
            <Row>
              <FaPlus className="button-plus" onClick={(e) => {
                this.addIngredients(e)
              }} />
              <Col>
                <label
                  htmlFor="measurement"
                  className="grey-text"
                >
                </label>
                <input type="text"
                  //key={uuidv4}
                  id="measurement"
                  className="form-control"
                  placeholder="Measurement"
                  name="measurement"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              <Col>
                <label
                  htmlFor="unit"
                  className="grey-text"
                >
                </label>
                <select
                  id="unit"
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
              </Col>
              <Col>
                <label
                  htmlFor="ingredient"
                  className="grey-text"
                >
                </label>
                <input type="text"
                  id="ingredient"
                  className="form-control"
                  name="ingredient"
                  placeholder="Ingredient"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table className="table">
                  <thead>
                    <tr>
                      <th>Measurement</th>
                      <th>Unit</th>
                      <th>Ingredient</th>
                    </tr>
                  </thead>
                  <tbody>{this.printIngredients()}</tbody>
                </Table>
              </Col>
            </Row>
​
            <h2 className="header2">Add Steps</h2>
            <Row>
              <FaPlus className="button-plus" onClick={(e) => {
                this.addSteps(e)
              }} />
              <Col xs="2">
                <label
                  htmlFor="step"
                  className="grey-text"
                >
                </label>
                  <input type="text"
                    // key={uuidv4}
                    //value=""
                    id="step"
                    className="form-control"
                    placeholder="Insert No"
                    name="step"
                    required
                  />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              <Col>
                <label
                  htmlFor="instruction"
                  className="grey-text"
                >
                </label>
                <input type="text"
                  name="instruction"
                  id="instruction"
                  className="form-control"
                  placeholder="Step One"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table className="table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Instructions</th>
                    </tr>
                  </thead>
                  <tbody>{this.printInstructions()}</tbody>
                </Table>
              </Col>
            </Row>
            <Button type="button" className="button-submit" onClick={this.submitHandler}>Create Recipe</Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default AddRecipe



