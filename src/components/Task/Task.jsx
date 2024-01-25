export default function Task({ref, content, done, doneClicked, removeClicked, ...props}){
    return (
<div className="task" ref={props}>
<div className="content" onClick={doneClicked}>
  {done ? (// Ici, nous sommes dans une condition. Si done === true, la première partie jusqu'au ":" sera appliquée
    <svg // La  case sera cochée
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
    </svg>
            ) : (// Si done === false, c'est cette seconde partie qui sera appliquée.
            <svg // La case est décochée
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
  </svg>
  )}
  
  {/* Ci-dessous. Il faut bien mettre les { } à l'intérieur des balises jsx strike puisqu'on veut insérer du Js dans du jsx
    Par contre, après le ":" nous ne sommes plus dans du jsx mais dans du Js. Donc pas besoin d'ajouter des { } pour afficher la variable
    Les balises strike servent à barrer un texte 
    Quand done === false , le contenu dans la variable "content" est affiché normalement.
    Quand done  === true, le texte sera barré puisqu'il la variable "content" se trouve entre les balises strike.*/}
  {done ? <strike>{content}</strike> : content}
  {/*
  Il est aussi possible d'inclure toute la ligne 32 dans la première condition ternaire qui commence à la ligne 5 . 
  Il faudra diviser cette ligne en deux parties.
  <strike>{content}</strike> à insérer juste avant la parenthèse fermante de la ligne 16
  Puis la variable "content" à insérer à la fin juste avant la parenthèse fermante de la ligne 26
  Ainsi, il ne reste qu'une seule condition ternaire à la place de deux.
  */}
</div>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  viewBox="0 0 16 16"
  onClick={removeClicked}
>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
</svg>
</div>
    )
}

