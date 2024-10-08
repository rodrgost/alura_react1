import Header from './componentes/header'
import styled from 'styled-components'

const AppComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

li {
  list-style: none;
}
`

function App() {
  return (
    <AppComponent>
      <Header/>
    </AppComponent>
  );
}

export default App;
