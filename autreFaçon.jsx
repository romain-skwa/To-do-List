        {/* .map pour créer une boucle.
        On crée chaque task.
        On définit un index pour savoir si on en est à la tache n°1 ou 2... */}
        {tasks.map((task, index) => {
            return <Task key={index}/>; {/* Il faut, dans les propriétés dynamiques, préciser la propriété "key", React pourra gérer facilement le DOM virtuel */}
          })}
    
                {/* Ça fonctionne aussi en écrivant comme ci-dessous */}
      {tasks.map((task, index) => (
        <Task key={index} content={task.content} done={task.done}/>
        ))}
    </div>