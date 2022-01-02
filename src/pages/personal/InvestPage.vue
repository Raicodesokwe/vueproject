<template>
  <section>
    <div class="container">
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Stock Investments</h2>
          <p>
            Fancy investing in top American stocks such as Apple,Google and
            Netflix,dive right in
          </p>
          <router-link to="/stock">Invest</router-link>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Cryptocurrency Investments</h2>
          <p>
            Fancy investing in top cryptocurrencies such as Bitcoin and
            Ethereum,we've got you covered
          </p>
          <router-link to="/crypto">Invest</router-link>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Property crowdfunding Investments</h2>
          <p>
            Always dreamt of investing in real estate but was deterred by the
            high entry fees,worry no more
          </p>
          <router-link to="/property">Invest</router-link>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Equity Investments</h2>
          <p>
            Fancy a shot at investing in high growth promising startups and
            SMEs,look no further
          </p>
          <router-link to="/equity">Invest</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: consolas;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: #b8ff2e */
  background: #003100
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
}

.container .box {
  position: relative;
  width: 320px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
}

.container .box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}
.container .box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(30px);
  transition: 0.5s;
}
.container .box:hover:before,
.container .box:hover:after {
  transform: skewX(0deg);
  left: 20px;
  width: calc(100%-90px);
}

.container .box:nth-child(1):before,
.container .box:nth-child(1):after {
  background: linear-gradient(315deg, #ffbc00, #09ee09);
}
.container .box:nth-child(2):before,
.container .box:nth-child(2):after {
  background: linear-gradient(315deg, #03a9f4, #09ee09);
}
.container .box:nth-child(3):before,
.container .box:nth-child(3):after {
  background: linear-gradient(315deg, #b9eb04, #09ee09);
}
.container .box:nth-child(4):before,
.container .box:nth-child(4):after {
  background: linear-gradient(315deg, #32b9f8, #09ee09);
}

.container .box span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  pointer-events: none;
}
.container .box span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.container .box:hover span::before {
  top: -50px;
  left: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}
.container .box span::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation-delay: -1s;
}
.container .box:hover span::after {
  bottom: -50px;
  right: 100px;
  width: 100px;
  height: 100px;
  opacity: 1;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.container .box .content {
  position: relative;
  left: 0;
  padding: 15px 40px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: 0.5s;
  color: #fff;
  /* display: none; */
}

/* .container .box:hover .content {
  left: -25px;
  padding: 60px 40px;
}
.container .box .content h2 {
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
}
.container .box .content p {
  font-size: 1.1em;
  margin-bottom: 10px;
  line-height: 1.4em;
} */
.container .box .content a {
  display: inline-block;
  font-size: 1.1em;
  color: seagreen;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 5px;
} 
</style>