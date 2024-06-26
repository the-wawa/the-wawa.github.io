import styles from "../styles/basic.module.css"

export default () => {
  return (
    <div class={styles.app}>
      <div class={styles.inner}>
        <div class={styles.container}>
          <h1>how did we get here?</h1>
          <p>you tried to access a route that does not exist</p>
          <button onClick={() => window.location.href = `http://${window.location.host}/`}>return</button>
        </div>
      </div>
    </div>
  )
}