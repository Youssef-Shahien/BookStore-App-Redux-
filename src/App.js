import "./App.css";
import AddForm from "./Components/AddForm/AddForm";
import BookContainer from "./Components/BookContainer/BookContainer";
import Header from "./Components/Header/Header";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </div>
  );
}

export default App;
