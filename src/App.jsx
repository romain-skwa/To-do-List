import "./App.css";
import Task from "./components/Task/Task.jsx";
import { useState, useRef, useEffect } from "react";

export default function App() {
  
  /*************************** Le State *****************************************/

  const [tasks, setTasks] = useState([
    { // On inscrit ici les propriétés
      content:' Continuer la formation React', 
      done: false // Quand done : true, le texte sera barré. Quand done: false, la tache affiche un texte normal parce qu'elle n'a pas été acomplie.
    }
  ]); // Il faut un tableau parce que tasks.map va chercher à itérer quelque chose.
  // Et sans tableau entre les ( ), il n'y a rien d'itérable. Donc, il faut un tableau même s'il est vide.

  /*************************** Le Ref *****************************************/

  const input = useRef("");// Je crée une étiquette

  /*************************** Les fonctions **********************************/

// Supprimer une tache

  const removeClickedHandler = (index) => {
    const newTasks = [...tasks]; // On crée une copie de notre state
    // La fonction "splice" permet de supprimer à partir de l'index que l'on donne le nombre de composants indiqué en paramètre.
    // Si "index" = 0 et que le paramètre = 1, l'élément à l'index zéro sera supprimé.
    // Si "index" = 2 et que le paramètre = 5, les éléments 3,4,5,6,7 seront supprimés.
    newTasks.splice(index, 1);
    setTasks(newTasks);// On met à jour notre "state" avec notre nouvelle tache.
  }
                     /****************************************/
    
// On change la valeur du booléen afin de barrer le texte

  const doneClickedHandler =(index) => { // Quand on clique sur une tache
    const newTasks = [...tasks]; // Ça crée un tableau de nos taches actuelles
    // Le paramètre "index" nous indique de quelle tache il s'agit. C'est un "number" qui vient de la méthode map
    // Et on sélectionne le booléen "done" de cette tache. 
    // On lui attribut la valeur inverse du "tasks" actuel. Si l'état actuel est true, ça devient false.
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks); // La nouvelle valeur de "tasks" devient égale à newTasks
    // Rappel : dans "newTasks", il y a le booléen qu'on vient de changer mais aussi la chaine de caractères "content"
  }
                       /****************************************/
    
// Création d'une nouvelle tache

  const submittedTaskHandler = (event) => {
    event.preventDefault();

      if(input.current.value != "" && input.current.value != " "){// Si le champ n'est pas vide
        const newTask = {// Création d'une nouvelle tache
        content:input.current.value, // Contenu de cette nouvelle tache
        done: false,// le booléen sera à false par défaut
      };
      
      //A partir de maintenant, le nouveau contenu de tasks devient : 
      //le contenu jusque-là [...tasks] ajouté de la nouvelle tache [newTask] donc [...tasks, newTask]
      setTasks([...tasks, newTask]);//Il est possible d'afficher la nouvelle tache tout en haut [newTask, ...tasks]
      input.current.value = "";//Maintenant, on vide le champ de formulaire.
    }
  }
  /*************************** Le Cycle **********************************/

useEffect(() => {
  input.current.focus();
}, []);

  return (
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        {/* Pour éviter que l'envoi du formulaire n'actualise la page (et n'affiche pas la nouvelle tache),
        On va envoyer un "évènement" */}
        <form onSubmit={(event) => submittedTaskHandler(event)}>{/*On va détecter l'envoi de formulaire grace à un évènement appelé onSubmit*/}
          <input type="text"
          placeholder="Que souhaitez-vous ajouter ?"
          ref={input}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>

      {/* Ça fonctionne aussi en écrivant comme ci-dessous */}
      {tasks.map((task, index) => (
        <Task
            key={index} 
            content={task.content}
            done={task.done}// done est un booléen dans les méthodes map
            doneClicked={() => doneClickedHandler(index)}// Quand clique, on exécute doneclickedHandler quia pour paramètre l'index : le rang du composant.
            removeClicked={() => removeClickedHandler(index)}
            />
        ))}
    </div>
  );
}
