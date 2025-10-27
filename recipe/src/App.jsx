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
      pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Gokul79618/hostel.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // If your project files are inside a folder named 'hos', keep this
                // Otherwise, remove the dir('hos') wrapper
                dir('hos') {
                    bat '"C:\\Program Files\\nodejs\\npm.cmd" install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('hos') {
                    bat '"C:\\Program Files\\nodejs\\npm.cmd" run build'
                }
            }
        }
    }

    post {
        success {
            echo "✅ React project built successfully!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}

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
