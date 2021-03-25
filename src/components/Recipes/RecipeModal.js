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

  var modal = document.getElementById("recipe-modal-background");
  window.onclick = function (event) {
    if (event.target === modal) {
      setModalState(false);
    }
  };

  return (
    <div
      style={show ? { display: "block" } : { display: "none" }}
      className="recipe-modal-background"
      id="recipe-modal-background"
    >
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
    </div>
  );
};
