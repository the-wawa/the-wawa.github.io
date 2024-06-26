import styles from "../styles/basic.module.css";

export default () => {
  return (
    <div class={styles.app}>
      <div class={styles.inner}>
        <div class={styles.container}>
          <h1>hello :D</h1>
          <p>
            i am [name]!
            <br></br>
            a software developer mostly fueled by aspiration, interested in the cyber security field
            <br></br>
            here's some thing you may want to know:
          </p>
          <ul>
            <li>i am 15 years old</li>
            <li>as much as i dislike forced social interaction, i enjoy hanging out with people</li>
            <li>i am transgender (non-binary, questioning if mtf); i go by he/she/they</li>
            <li>i am <b>NOT</b> a native english speaker! however, people say i'm pretty good at it</li>
            <li>random fact: this webpage is my first project made with SolidJS</li>
          </ul>
          <h2>interests</h2>
          <dl>
            <dt>programming</dt>
            <dd>the one and dearest, i mostly write <a href="https://luau-lang.org">Luau</a>, JavaScript & C++ code!</dd>
            <dd>you can find my github at the bottom of this page, if you're interesting in my work</dd>
            <dt>music</dt>
            <dd>i am a <b>HUGE</b> enjoyer of vocaloid! i love MARETU's music</dd>
          </dl>
          <h2>how to contact me</h2>
          <ul>
            <li>discord - <a href="https://discord.com/users/482265556175552512">@robloxplayerbeta.dll</a></li>
            <li>github - <a href="https://github.com/the-wawa">the-wawa</a></li>
          </ul>
          <button class={styles.button}>read</button>
        </div>
      </div>
    </div>
  )
}