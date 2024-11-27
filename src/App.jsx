import Menu from "./components/Menu";
import Title from "./components/Title";

function App() {
  return(
    <div className="h-screen w-screen flex">
      <Menu />
      <div className="flex flex-col w-full ">
        <Title />
        <div className="p-8">
          <p>Conteudo</p>
        </div>
      </div>
      
    </div>
    
  )
}
export default App;