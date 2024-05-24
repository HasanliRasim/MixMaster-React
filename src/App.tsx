import Header from "./components/header/Header"
import Input from "./components/input/Input"
import Card from "./components/cards/Card"
import styles from "./App.module.scss"
import { beverages } from "./components/data/cards"

const App = () => {
  return (
    <div>
      <Header/>
      <Input/>
      <div className={styles.container}>
      {beverages.map((card) => {
        return (
          <Card key={card.id} img={card.imgUrl} text={card.beverageName} fullName={card.fullName} type={card.type}/>
        )
      })}
    </div>
    </div>
  )
}

export default App