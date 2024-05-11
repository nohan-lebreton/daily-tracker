'use client'
import React, { useState } from 'react';
import './styles/globals.css';

export default function Home() {
  // Définir l'état initial de la liste de tâches
  const [tasks, setTasks] = useState<string[]>([]);
  // Définir l'état pour le champ d'entrée de la nouvelle tâche
  const [newTask, setNewTask] = useState<string>('');

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Réinitialiser le champ d'entrée après l'ajout de la tâche
    }
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Fonction pour modifier une tâche de la liste
  const editTask = (index: number, newText: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Daily tracker</h1>
      <div className="mt-8">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="border border-gray-300 rounded px-4 py-2 mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>
      <ul className="mt-8">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
            <span>{task}</span>
            <div>
              <button onClick={() => deleteTask(index)} className="text-red-500 mr-2">
                Delete
              </button>
              <button
                onClick={() => {
                  const newText = prompt('Edit task:', task);
                  if (newText !== null) {
                    editTask(index, newText);
                  }
                }}
                className="text-blue-500"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
