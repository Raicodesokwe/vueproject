<template>
  <main>
    <header class="navbar">
      <h1>
        Dojo
        <div class="dot"></div>
      </h1>

      <nav>
        <ul>
          <li>Personal</li>
          <li><router-link to="/bizna">Business</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
        </ul>
      </nav>
    </header>
    <nav class="navigation">
      <ul class="navigation-nav">
        <li class="logo">
          <font-awesome :icon="['fas', 'angle-double-left']" />
          <span class="navigation-nav-link">Dojo</span>
        </li>
        <li class="list-nav">
          <font-awesome :icon="['fas', 'home']" />
          <span class="navigation-nav-link">Home</span>
        </li>
        <router-link to="/invest">
          <li class="list-nav">
            <font-awesome :icon="['fas', 'chart-line']" /><span
              class="navigation-nav-link"
              >Invest</span
            >
          </li>
        </router-link>
        <router-link to="/more">
          <li class="list-nav">
            <font-awesome :icon="['fas', 'plus-square']" /><span
              class="navigation-nav-link"
              >More</span
            >
          </li>
        </router-link>
        <router-link to="/savings">
        <li class="list-nav">
          <font-awesome :icon="['fas', 'archive']" /><span
            class="navigation-nav-link"
            >Savings</span
          >
        </li>
        </router-link>
        <router-link to="profile">
        <li class="list-nav">
          <font-awesome :icon="['fas', 'user']" /><span
            class="navigation-nav-link"
            >Profile</span
          >
        </li>
        </router-link>
      </ul>
    </nav>
    <section class="glass">
      <h1>
        We're <br />
        the New Era of <br />Financial Services
      </h1>
      <p>
        Invest,save,buy now pay later,<br />buy insurance products all in <br />
        one place
      </p>
      <div class="inputbox">
        <form>
          <input type="text" name="" placeholder="Type in your E-mail" />
          <input type="submit" name="" value="Sign Up" />
        </form>
      </div>
      <div class="card-list">
        <article class="card">
          <header class="card-header">
            <p>Invest</p>
            <h2>
              Invest in US stocks,<br />
              cryptocurrencies,<br />
              property and startups
            </h2>
          </header>
          <div class="card-author">
            <div class="author-avatar">
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <p>Buy Now Pay Later</p>
            <h2>
              Buy products from your favourite store now and pay for them later
              flexibly
            </h2>
          </header>

          <div class="bnpl-card-author">
            <div class="author-avatar">
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <p>Insurance</p>
            <h2>
              Access various insurance products from your favourite insurance
              companies
            </h2>
          </header>
          <div class="bnpl-card-author">
            <div class="author-avatar">
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <p>Savings</p>
            <h2>Save in any currency,crypto or commodity of your choice</h2>
          </header>
          <div class="save-card-author">
            <div class="author-avatar">
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>

  <div class="circle1"></div>
  <div class="circle2"></div>
</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yaldevi&display=swap');
@import url('https://db.onlinewebfonts.com/c/ec0dbdb6bebc34634ada7628478460eb?family=Trueno');
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap');
main {
  min-height: 100vh;
  /* min-width: 100vw; */
  /* background: linear-gradient(to right top, #7fff00, #32b132); */
  background-image: radial-gradient(
      circle at 72% 95%,
      hsla(313, 0%, 4%, 0.07) 0%,
      hsla(313, 0%, 4%, 0.07) 64%,
      transparent 64%,
      transparent 84%,
      transparent 84%,
      transparent 100%
    ),
    radial-gradient(
      circle at 31% 30%,
      hsla(313, 0%, 4%, 0.07) 0%,
      hsla(313, 0%, 4%, 0.07) 49%,
      transparent 49%,
      transparent 51%,
      transparent 51%,
      transparent 100%
    ),
    radial-gradient(
      circle at 72% 25%,
      hsla(313, 0%, 4%, 0.07) 0%,
      hsla(313, 0%, 4%, 0.07) 37%,
      transparent 37%,
      transparent 76%,
      transparent 76%,
      transparent 100%
    ),
    radial-gradient(
      circle at 71% 16%,
      hsla(313, 0%, 4%, 0.07) 0%,
      hsla(313, 0%, 4%, 0.07) 2%,
      transparent 2%,
      transparent 21%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 57%,
      hsla(313, 0%, 4%, 0.07) 0%,
      hsla(313, 0%, 4%, 0.07) 30%,
      transparent 30%,
      transparent 68%,
      transparent 68%,
      transparent 100%
    ),
    linear-gradient(135deg, rgb(11, 249, 77), rgb(30, 241, 43));
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-width: 100%; */
  /* margin-right: 5rem; */
}
.fa-home {
  font-size: 1.5rem;
  transition: 600ms;
}
.fa-chart-line {
  font-size: 1.5rem;
  transition: 600ms;
}
.fa-plus-square {
  font-size: 1.5rem;
  transition: 600ms;
}
.fa-archive {
  font-size: 1.5rem;
  transition: 600ms;
}
.fa-user {
  font-size: 1.5rem;
  transition: 600ms;
}

.list-nav {
  display: flex;
  align-items: center;
  height: 5rem;
  filter: grayscale(100%) opacity(0.7);
  transition: 600ms;
}

.navigation-nav-link {
  display: none;
  margin-left: 1rem;
}

.navigation {
  text-align: center;
  z-index: 3;
  position: fixed;
  /* background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.4)
  ); */
  background: rgba(255, 255, 255, 0.4);
  /* border-radius: 10px; */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: width 200ms ease;
}

.logo {
  font-family: 'Trueno';
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;

  background: whitesmoke;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.fa-angle-double-left {
  transform: rotate(0deg);
  transition: transform 600ms;
}
.navigation:hover .fa-angle-double-left {
  transform: rotate(-540deg);
  color: rgb(22, 170, 22);
}

.navigation-nav {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@font-face {
  font-family: 'Trueno';
  src: url('//db.onlinewebfonts.com/t/ec0dbdb6bebc34634ada7628478460eb.eot');
  src: url('//db.onlinewebfonts.com/t/ec0dbdb6bebc34634ada7628478460eb.eot?#iefix')
      format('embedded-opentype'),
    url('//db.onlinewebfonts.com/t/ec0dbdb6bebc34634ada7628478460eb.woff2')
      format('woff2'),
    url('//db.onlinewebfonts.com/t/ec0dbdb6bebc34634ada7628478460eb.woff')
      format('woff'),
    url('//db.onlinewebfonts.com/t/ec0dbdb6bebc34634ada7628478460eb.ttf')
      format('truetype'),
    url('//db.onlinewebfonts.com/t/ec0dbdb6bebc34634ada7628478460eb.svg#Trueno')
      format('svg');
}

.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  background: none;

  height: 5rem;

  display: flex;
  align-items: center;
}

.navbar nav {
  flex: 1;
  text-align: center;
}

.dot {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  background: white;
}
.navbar ul {
  list-style: none;
}

.navbar li {
  display: inline;
  margin: 0 1rem;
  /* font-family: Titillium; */
  font-family: 'Be Vietnam Pro', Arial;
  font-weight: 600;
  font-size: 1rem;
}

.navbar h1 {
  font-family: 'Trueno', Arial;

  padding-left: 2rem;
  font-size: 3rem;
}

.glass {
  /* background: white; */
  background: rgba(255, 255, 255, 0.1);
  /* border-radius: 10px; */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1)
  );*/
  border-radius: 2rem;
  z-index: 2;
  /* backdrop-filter: blur(2rem); */
}
.glass h1 {
  margin-top: 4rem;
  margin-left: 2rem;
  line-height: 2;
  font-size: 2rem;
  font-family: 'Josefin Sans';
}

.glass p {
  font-family: 'Prompt';
  margin-left: 2rem;
  font-weight: 500;
}

.inputbox {
  margin-top: 2rem;
  margin-left: 2rem;
  font-family: 'Yaldevi', Arial;
}
.inputbox input[type='text'] {
  font-family: 'Yaldevi', Arial;
  font-weight: 900;
  /* font-size: 1rem; */
  width: 13rem;
  height: 2rem;
  border: none;
  outline: none;
  padding: 0 1.5rem;
  border-radius: 1.5rem 0 0 1.5rem;
}

.inputbox input[type='submit'] {
  font-family: 'Yaldevi', Arial;
  font-weight: 900;
  position: relative;
  right: 1.4rem;
  border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;
  height: 2rem;
  width: 5rem;
  background-color: rgb(51, 218, 9);
  border-color: green;
}

.card-list {
  height: 27rem;
  width: 30rem;
  background: rgb(15, 228, 15);
  position: absolute;
  top: 2rem;
  left: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  padding: 3rem;
  overflow: hidden;
  overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.card-list::-webkit-scrollbar-thumb {
  background: rgb(10, 247, 112);
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
.card-list::-webkit-scrollbar-track {
  border-radius: 10px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
}
.card {
  color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgb(59, 223, 59);
  box-shadow: -1rem 0 3rem #000;
  transition: 0.2s;
}
.card p {
  font-family: 'Karla';
  font-size: 1.3rem;
}
.card:hover {
  transform: translateY(-1rem);
}
.card:hover ~ .card {
  transform: translateX(130px);
}
.card:not(:first-child) {
  margin-left: -130px;
}

.card-author {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 1rem 0 0;
}
.bnpl-card-author {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: -1rem 0 0;
}
.save-card-author {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 2rem 0 0;
}

.author-avatar {
  display: block;
  background: rgb(253, 166, 3);
  /* background: linear-gradient(
    to right bottom,
    rgb(245, 165, 245),
    rgb(196, 159, 196)
    rgb(210, 212, 75)
  ); */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* filter: grayscale(100%); */
  margin: 16px 10px;
}

.half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}
.card-header h2:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71, rgb(226, 10, 10));
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.circle1 {
  background: white;
  /* background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  ); */
  background: rgba(255, 255, 255, 0.3);
  /* border-radius: 10px; */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 20rem;
  width: 20rem;
  position: absolute;
  top: 13%;
  right: 10%;
  /* border-radius: 41% 59% 70% 30% / 50% 29% 71% 50% ; */
  border-radius: 50%;
}
.circle2 {
  background: white;
  /* background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  ); */
  background: rgba(255, 255, 255, 0.3);
  /* border-radius: 10px; */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 20rem;
  width: 20rem;
  position: absolute;
  bottom: 3%;
  left: 8%;
  /* border-radius: 22% 78% 22% 78% / 41% 61% 39% 59% ; */
  border-radius: 50%;
}
@media only screen and (max-width: 600px) {
  .navigation {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    /* justify-content: center; */
  }
  .list-nav:hover {
    color: rgb(22, 170, 22);
    filter: grayscale(0%) opacity(1);
    background: white;
  }
  .logo {
    display: none;
  }
  .navigation-nav {
    flex-direction: row;
  }
  .navbar nav {
    display: none;
  }
  .card-list {
    display: none;
  }
  .navigation-nav {
    justify-content: center;
  }
  .list-nav {
    width: 5rem;
    justify-content: center;
  }
  .circle1 {
    top: 3%;
  }
  .circle2 {
    bottom: 10%;
  }
  .glass {
    width: 90%;
    min-height: 70vh;
    margin-top: 1.5rem;
  }
}
@media only screen and (max-width: 1100px) {
  .card-list {
    display: none;
  }
}
@media only screen and (min-width: 600px) {
  .navigation {
    width: 5rem;
    height: 100vh;
    right: 0;
  }
  .glass {
    width: 60%;
    min-height: 80vh;
    margin-top: 3rem;
  }
  .navigation:hover {
    width: 16rem;
    /* display: block; */
  }
  .navigation:hover .navigation-nav-link {
    display: block;
    font-family: 'Karla', Arial;
    font-weight: 700;
    font-size: 1.3rem;
  }
  .list-nav {
    justify-content: center;
  }
  .list-nav:hover {
    width: 100%;

    filter: grayscale(0%) opacity(1);
    background: white;
    color: rgb(22, 170, 22);
  }
}
</style>