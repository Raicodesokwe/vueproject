<template>
  <section>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="box">
      <div class="square" style="--i: 0"></div>
      <div class="square" style="--i: 1"></div>
      <div class="square" style="--i: 2"></div>
      <div class="square" style="--i: 3"></div>
      <div class="square" style="--i: 4"></div>
    </div>
    <div class="container">
      <div class="title">Runway calculator</div>
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span>Last month's revenue</span>
            <input type="text" placeholder="0" required />
          </div>
          <div class="input-box">
            <span>Gross margin</span>
            <input type="text" placeholder=" 0" required />
          </div>
          <div class="input-box">
              <span>Previous month's expenses</span>
            <input
              type="text"
              placeholder=" 0"
              required
            />
          </div>
          <div class="input-box">
              <span>Current cash balance</span>
            <input type="text" placeholder=" 0" required />
          </div>
          <div class="input-box">
              <span>Month over month growth rate</span>
            <input
              type="text"
              placeholder="0"
              required
            />
          </div>
          <div class="input-box">
              <span>What % of your revenue is recurring</span>
            <input
              type="text"
              placeholder="0"
              required
            />
          </div>
          <div class="input-box">
              <span>Your E-mail</span>
            <input type="email" placeholder="Email address" required />
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap');
section {
  font-family: 'Karla';
  font-weight: 600;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #66e474, #27c918);
}
section .color {
  position: absolute;
  filter: blur(150px);
}
section .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
  background: hsl(120, 85%, 29%);
}
section .color:nth-child(2) {
  top: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
  background: hsl(128, 91%, 69%);
}
section .color:nth-child(3) {
  bottom: 50px;
  right: 100px;
  width: 300px;
  height: 300px;
  background: hsl(138, 94%, 52%);
}
.box {
  position: relative;
}
.box .square {
  position: absolute;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation: animate 10s linear infinite;
  animation-delay: calc(-1s * var(--i));
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(-40px);
  }
  50% {
    transform: translateY(40px);
  }
}
.box .square:nth-child(1) {
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.box .square:nth-child(2) {
  top: 150px;
  left: -100px;
  width: 120px;
  height: 120px;
  z-index: 2;
  border-radius: 50%;
}
.box .square:nth-child(3) {
  bottom: 50px;
  left: 760px;
  width: 80px;
  height: 80px;
  z-index: 2;
  border-radius: 50%;
}
.box .square:nth-child(4) {
  bottom: 80px;
  left: 700px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.box .square:nth-child(5) {
  top: 80px;
  right: 110px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.container {
  max-width: 700px;
  padding: 25px 30px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.container .title {
  font-size: 35px;
  position: relative;
  color: #fff;
  /* margin-bottom: 1rem; */
}

.container .title::before {
  content: '';
  margin-bottom: -3px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background: black;
}

.container form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
form .user-details .input-box {
  width: calc(100% / 2 - 20px);
  margin: 10px 0 6px 0;
}
.user-details .input-box input {
  height: 35px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus .user-details .input-box input:valid {
  border-color: #3beb3b;
}

.user-details .input-box input::placeholder {
  color: #fff;
}

form .button {
  height: 45px;
  margin: 45px 0;
}
form .button input {
  height: 100%;
  width: 100%;
  outline: none;
  color: black;
  background: greenyellow;
  border: none;
  font-size: 18px;
  font-family: 'karla';
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 10px;
}
form .button input:hover {
  background: rgb(219, 219, 38);
}

@media only screen and (max-width: 600px) {
  .container {
    max-width: 100%;
  }
  form .user-details .input-box {
    width: 100%;
    margin: 10px 0 6px 0;
  }
  .container form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar {
    width: 0;
  }
}
</style>