<template>
  <main>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <header>
      <h1>
        Dojo
        <div class="dot"></div>
      </h1>
      <nav>
        <ul>
          <li>
            <p>Solutions <font-awesome :icon="['fas', 'caret-down']" /></p>

            <ul>
              <li>
                <router-link to="/revenue">Revenue Financing</router-link>
              </li>
              <li>
                <router-link to="/expense">Expense Financing</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/runway">Runway Calculator</router-link></li>
          <li><router-link to="/bizlogin"> Login</router-link></li>
          <li><router-link to="/financed">Get Financed</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="grupu">
      <section>
        <h1>
          Fund<br />
          your growth with <br />
          upfront capital
        </h1>
        <p>
          Zero dilution,zero debt <br />
          Sounds great? <br />
          Dive right in 
        </p>
        <div class="btn">
          <router-link to="/financed">Get Financed</router-link>
        </div>
      </section>
      
        <img src="revenue.png" alt="" />
      
    </div>
  </main>
</template>
<style scoped>
@import url('https://db.onlinewebfonts.com/c/ec0dbdb6bebc34634ada7628478460eb?family=Trueno');
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
main {
  min-height: 100vh;
  background: linear-gradient(to bottom, #66e474, #27c918);
  display: flex;
  align-items: center;
  justify-content: center;
}

main .color {
  position: absolute;
  filter: blur(150px);
}
main .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
  background: hsl(120, 85%, 29%);
}
main .color:nth-child(2) {
  top: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
  background: hsl(128, 91%, 69%);
}
main .color:nth-child(3) {
  bottom: 50px;
  right: 100px;
  width: 300px;
  height: 300px;
  background: hsl(138, 94%, 52%);
}

.dot {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  background: white;
}
.grupu {
  position: relative;
  display: flex;
}
img {
   background-size: cover;
  margin-left: 6rem;
  margin-top: 4rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.5);
}
header {
  position: absolute;
  top: 0;
  width: 100%;
  background: none;

  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  font-family: 'Trueno';
  padding-left: 2rem;
  font-size: 3rem;
}
header nav {
  flex: 1;
  text-align: center;
}
header ul {
  list-style: none;
}
header li {
  display: inline-block;
  margin: 0 2rem;
  /* font-family: Titillium; */
  font-family: 'Titillium Web';
  font-weight: 800;
  font-size: 1.1rem;
}
section {
  z-index: 2;
}

section h1 {
  font-family: 'Prompt';
  font-size: 50px;
}
section p {
  font-family: 'Prompt';
}
section .btn {
  position: relative;
  width: 165px;
  height: 50px;
}
section .btn a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 1);
  /* border-bottom: 1px solid rgba(0, 0, 0, 1); */
  border-radius: 30px;
  color: black;
  /* color: black; */
  z-index: 2;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);
}
section .btn:hover a {
  letter-spacing: 3px;
}
section .btn a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translateX(0);
  transition: 0.5s;
}
section .btn:hover a::before {
  transform: skewX(45deg) translateX(200%);
}
section .btn::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}
section .btn:hover:before {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}
section .btn::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}
section .btn:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}
section .btn::before,
section .btn::after {
  background: #a8fd28;
  box-shadow: 0 0 5px #a8fd28, 0 0 15px #a8fd28, 0 0 30px #a8fd28,
    0 0 60px #a8fd28;
}

header nav ul li:nth-child(5) a {
  position: relative;
  padding: 5px 15px;
  margin: 0 15px;

  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.5s;
}
header nav ul li:nth-child(5) a:hover {
  background: #9efa15;
  color: black;
  box-shadow: 0 0 50px #9efa15;
  transition-delay: 0.5s;
}
header nav ul li:nth-child(5) a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-top: 2px solid darkgreen;
  border-left: 2px solid darkgreen;
  transition: 0.5s;
  transition-delay: 0.5s;
}
header nav ul li:nth-child(5) a:hover::before {
  width: 100%;
  height: 100%;
  transition-delay: 0s;
}
header nav ul li:nth-child(5) a::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid darkgreen;
  border-right: 2px solid darkgreen;
  transition: 0.5s;
  transition-delay: 0.5s;
}
header nav ul li:nth-child(5) a:hover::after {
  width: 100%;
  height: 100%;
  transition-delay: 0s;
}
header nav ul li a {
  z-index: 2;
}

header nav ul li ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  border-radius: 0.3rem;
  background: rgba(255, 255, 255, 0.1);
  /* border-radius: 10px; */
  backdrop-filter: blur(25px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* width: 250px; */
  min-width: 200px;
  position: absolute;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); */
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  transform: translateY(40px);
  z-index: 3;
}

header nav ul li:hover ul {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
header nav ul li ul li a {
  display: block;
  padding: 25px 0;
  color: #fff;
  text-decoration: none;
}
</style>