import styles from "../styles/basic.module.css";

export default () => {
  return (
    <div class={styles.app}>
      <div class={styles.inner}>
        <div class={styles.container}>
          <h1>hello :D</h1>
          <p>i am Rachel! <i>(you may also call me Rach)</i></p>
          <p>a software developer, interested in the cyber-security field</p>
          <h2>about me?</h2>
          <p>i don't have that much to say, but i'll still put some details:</p>
          <ul>
            <li>i am 15 years old</li>
            <li>as much as i dislike forced social interaction, i enjoy hanging out with people</li>
            <li>i am transgender (mtf); i go by she/they</li>
            <li>i am <b>NOT</b> a native english speaker! however, people say i'm pretty good at it</li>
            <li>random fact: this webpage is my first project made with SolidJS</li>
          </ul>
          <h2>interests</h2>
          <dl>
            <dt>programming</dt>
            <dd>the one and dearest, i mostly write <a target="_blank" href="https://luau-lang.org">Luau</a>, JavaScript (TypeScript) & C++ code!</dd>
            <dd>you can find my github at the bottom of this page, if you're interested in my work</dd>
            <dt>music</dt>
            <dd>i am a <b>HUGE</b> enjoyer of vocaloid! i love MARETU's music</dd>
            <dd>i also enjoy breakcore & lo-fi</dd>
          </dl>
          <h2>my social media</h2>
          <p>if you contact me, please get <a target="_blank" href="https://nohello.net/en/">straight to the point</a></p>
          <ul>
            <li>roblox - <a href="https://www.roblox.com/users/1018441530/profile">ClientCooldown</a></li>
            <li>discord - <a href="https://discord.com/users/482265556175552512">@robloxplayerbeta.dll</a></li>
            <li>github - <a href="https://github.com/the-wawa">the-wawa</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}