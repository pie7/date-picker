import Calendar from './components/Calendar';
import styled from 'styled-components';
import DateInput from './components/DateInput';

const Container = styled.div`
  position: absolute;
  top:  50%;
  left: 50%;
  transform: translate(-50%,-50%);

  & * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <Container>
      <DateInput/>
      <Calendar />
    </Container>
  );
}

export default App;
