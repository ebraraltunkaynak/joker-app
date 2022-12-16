import React from 'react'
import { Wrapper,Row,Header,Image,Form,Search} from './components/styled/index'
import joker from "./images/jok.png"
const App = () => {
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={joker} alt="Baykus" />
        </Row>

      <Form onSubmit={}>
        
        <Search type="text"
        placeholder='Search' 
        value={}
         onChange={handleChange} />
        </Form>  

      </Wrapper>
     
    </div>
  )
}

export default App



// 33.24 