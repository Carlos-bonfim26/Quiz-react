import React, { useState } from 'react'; 

  

const perguntas = [ 

  { 

    pergunta: 'Qual é a capital do Brasil?', 

    opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'], 

    resposta: 'Brasília' 

  }, 

  { 

    pergunta: 'Quem descobriu o Brasil?', 

    opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'], 

    resposta: 'Pedro Álvares Cabral' 

  }, 

  { 

    pergunta: 'Quantos planetas existem no sistema solar?', 

    opcoes: ['5', '7', '9', '8'], 

    resposta: '8' 

  },
  { 

    pergunta: 'Qual a cor do cavalo branco de napoleão?', 

    opcoes: ['Branco', 'Preto', 'Marrom', 'Vermelho'], 

    resposta: 'Marrom' 

  }, 

  { 

    pergunta: 'Quem foi o primeiro campeão do campeonato brasileiro de futebol?', 

    opcoes: ['Bahia', 'Atletico Mineiro', 'Santos', 'Palmeiras'], 

    resposta: 'Bahia' 

  },
  { 

    pergunta: 'Quantos Meses tem 28 dias no periodo de 3 anos?', 

    opcoes: ['3', '36', '12', '24'], 

    resposta: '36' 

  }, 

  { 

    pergunta: 'Quem ganhou a Champions League de 1993?', 

    opcoes: ['Milan', 'Estrela Vermelha', 'Olympique de Marseille', 'Barcelona'], 

    resposta: 'Olympique de Marseille' 

  },
  { 

    pergunta: 'Qual a linguagem de programação que criou o minecraft?', 

    opcoes: ['C#', 'Phyton', 'JavaScript', 'Java'], 

    resposta: 'Java' 

  }, 
  { 

    pergunta: 'quantas musicas tem o album sobrevivendo no inferno?', 

    opcoes: ['12', '11', '10', '13'], 

    resposta: '12' 

  },
  { 

    pergunta: 'em que ano caiu o avião da chapecoense?', 

    opcoes: ['2015', '2014', '2016', '2017'], 

    resposta: '2016' 

  },
  { 

    pergunta: 'que mc de batalha de freestyle tem o bordão "WadaWadaWeu"?', 

    opcoes: ['Jotapê', 'Guri', 'Barreto', 'Magrão'], 

    resposta: 'Magrão' 

  }

]; 

function Quiz() { 

  const [indicePergunta, setIndicePergunta] = useState(0); 

  const [respostas, setRespostas] = useState([]); 

  const [resultado, setResultado] = useState(null); 
 
  

  const responder = (respostaSelecionada) => { 

    setRespostas([...respostas, respostaSelecionada]); 

    if (indicePergunta + 1 < perguntas.length) { 

      setIndicePergunta(indicePergunta + 1); 

    } else { 

      calcularResultado(); 

    } 

  }; 

  

  const calcularResultado = () => { 

    let pontuacao = 0; 

    for (let i = 0; i < perguntas.length; i++) { 

      if (respostas[i] == perguntas[i].resposta) { 

        pontuacao++; 

      } 

    } 

    setResultado(pontuacao); 

  }; 

  

  const reiniciarQuiz = () => { 

    setIndicePergunta(0); 

    setRespostas([]); 

    setResultado(null); 

  }; 

  

  return ( 

    <div className='container'> 

      {resultado !== null ? ( 

        <div className='container-resposta'> 

          <h2>Resultado do Quiz</h2> 

          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p> 

          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button> 

        </div> 

      ) : ( 

        <div className='container-pergunta'> 

          <h2>Pergunta {indicePergunta + 1}</h2> 

          <p className='pergunta'>{perguntas[indicePergunta].pergunta}</p> 

          <ul> 

            {perguntas[indicePergunta].opcoes.map((opcao, index) => ( 

              <li key={index} onClick={() => responder(opcao)}> 

                {opcao} 

              </li> 

            ))} 

          </ul> 

        </div> 

      )} 

    </div> 

  ); 

} 

export default Quiz; 