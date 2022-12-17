import React, { useState } from "react";
import axios from "axios";
import JokeItem from "./components/JokeItem";
import joker from "./images/jok.png";
import {
  Wrapper,
  Header,
  Image,
  Row,
  Form,
  Search,
  Button,
} from "./components/styled/index";
import { Joke } from "./common/types";

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";

interface IProps {}

const App: React.FC<IProps> = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;

    const { data } = await axios.get(ENDPOINT);
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }

    setSearch("");
  };

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={joker} alt="Laughing Face" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search
            type="text"
            placeholder="Search.."
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>

        {/* Jokes */}
        <div>
          {error && <p>Sorry, no jokes found.</p>}
          {jokes.length > 0 &&
            jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
















// import React,{useState} from 'react'
// import { Wrapper,Row,Header,Image,Form,Search,Button} from './components/styled/index'
// import joker from "./images/jok.png"
// import axios from 'axios'
// import JokeItem from './components/JokeItem'
// import {Joke} from "./common/types"

// // type Flag = {
// //   nsfw:boolean;
// //   religious:boolean;
// //   politicial:boolean;
// //   racist:boolean;
// //   sexist: boolean;
// //   explicit:boolean;
// // }

// // type Joke ={
// //   id:number;
// //   flags:Flag;
// //   category:  "nsfw" |
// //   "religious"| 
// //   "political"|
// //   "racist"| 
// //   "sexist"| 
// //   "explicit" ;
// //   safe:boolean,
// //   setup?:string;
// //   delivery?:string;
// //   joke:string
// //   lang: "cs" | "de " | "en" | "es" | "fr" | "pt",
// //   type: "single" | "twopart";
// // }


// const BASE_URL="https://v2.jokeapi.dev/joke/Any"

// interface IProps {}

// const App: React.FC<IProps> = () => {
//   const [search, setSearch] = useState("");
//   const [error, setError] = useState(false);
//   const [jokes, setJokes] = useState<Joke[]>([]);


//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{

//     setSearch(event.target.value);


    
//   }
//   const getJokes = async (event: React.FormEvent<HTMLFormElement>) =>{
//     event.preventDefault();

//     const ENDPOINT = `${BASE_URL}?contains?${search}amount=10`;
//     const {data} = await axios.get(ENDPOINT);
    
//     if(data.error){
//       setError(true);
//       setJokes([]);
//     }else{
//       setError(false);
//       setJokes(data.jokes);
//     }
//     setSearch("");
//   }

//   return (
//     <div>
//       <Wrapper>
//         <Row>
//           <Header>Joker</Header>
//           <Image src={joker} alt="joke" />
//         </Row>

//       <Form onSubmit={getJokes}>
        
//         <Search type="text"
//         placeholder='Search' 
//         value={search}
//          onChange={handleChange} />
//          <Button type="submit">Submit</Button>
//         </Form>  
        
//          <div>
//           {error && <p>Sorry,no jokes for you</p>}
           
     
//           {jokes.length> 0 && jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
//          </div>

//       </Wrapper>
     
//     </div>
//   )
// }

// export default App



// // 33.24 