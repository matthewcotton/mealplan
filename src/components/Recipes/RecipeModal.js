import React from "react";
import { Container } from "react-bootstrap";
import Cross from "../../assets/icons/times-solid.svg";

export const RecipeModal = ({ recipe, show, setModalState }) => {
  const closeRecipeModal = (e) => {
    e.preventDefault();
    setModalState(false);
  };

  const buildIngredients = () => {
    return recipe.ingredients.map((ingredient) => {
      return <li>{`${ingredient.measurement}${ingredient.unit} ${ingredient.ingredient}`}</li>;
    });
  };

  const buildSteps = () => {
    return recipe.steps.map((step) => {
      return <li>{`${step.step}. ${step.instruction}`}</li>;
    });
  };

  console.log(recipe);
  return (
    <Container className="recipe-modal-container">
      <section style={show ? { display: "block" } : { display: "none" }} className="recipe-modal">
        <span classname="recipe-cross">
          <img
            classname="recipe-cross-img"
            onClick={(e) => closeRecipeModal(e)}
            alt="close"
            src={Cross}
          />
        </span>
        <h3>{recipe.title}</h3>
        <p>
          Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time} |{" "}
          {recipe.ingredients.length} Ingredients
        </p>
        <section>
          <h4>Ingredients</h4>
          <ul>{buildIngredients()}</ul>
        </section>
        <section>
          <h4>Steps</h4>
          <ul>{buildSteps()}</ul>
        </section>
      </section>
    </Container>
  );
};
