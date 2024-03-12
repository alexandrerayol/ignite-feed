import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"


import './globals.css'
import styles from './app.module.css'

function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar/>
        <div>
          <Post/>

          <Post/>

          <Post/>
        </div>
      </main>

    </>
  )
}

export default App
