// import React, {useState} from 'react';
import Card from './Card';

const time = [
  {
    nome: 'Gabriel Militello',
    img: 'https://via.placeholder.com/150',
    bio: 'Doutorando e Mestre em Educação: Currículo',
    ies: 'PUC-SP'
  },
  {
    nome: 'Jonas',
    img: 'https://via.placeholder.com/150',
    bio: 'Estágio em pedagogia na Lets code',
    ies: 'Mackenzie'
  },
  {
    nome: 'Teste',
    img: 'https://via.placeholder.com/150',
    bio: 'graduado em teste',
    ies: 'teste'
  }
]

const App = () => {

  return (
    <>
      { time.map((prof, i) => <Card key={i} professor={prof} />)}
    </>
  );

};

export default App;