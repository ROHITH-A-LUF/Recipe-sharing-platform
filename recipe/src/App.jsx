import { useState } from "react";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([
    { title: "Pasta", ingredients: "Noodles, Tomato, Cheese", instructions: "Boil pasta, add sauce, mix." },
    { title: "Pancakes", ingredients: "Flour, Eggs, Milk, Sugar", instructions: "Mix batter, cook on pan, serve." },
    { title: "Salad", ingredients: "Lettuce, Tomato, Cucumber, Dressing", instructions: "Chop veggies, add dressing." },
  ]);

  const [search, setSearch] = useState("");

  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🥗 Recipe Finder</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {filteredRecipes.length === 0 ? (
        <p className="empty">No recipes found.</p>
      ) : (
        <div className="grid">
          {filteredRecipes.map((recipe, index) => (
            <div key={index} className="card">
              <h2>{recipe.title}</h2>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <button onClick={() => deleteRecipe(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
