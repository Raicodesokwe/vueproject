<template>
  <section>
    <div class="container">
      <div class="step-row">
        <div class="progress" :class="{active: step === 2,thirdactive: step === 3}"></div>
        <div class="step-col"><small>Revenue</small></div>
        <div class="step-col">
          <small>Growth</small>
        </div>
        <div class="step-col">
          <small>Runway</small>
        </div>
      </div>
      <form v-if="step === 1">
        <div class="title">What's your annual recurring revenue?</div>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">Ksh0-50,000</span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">Ksh50,000-250,000</span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">Ksh250,000-2,000,000</span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">Ksh2,000,000-6,000,000</span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount"> Ksh6,000,000 and above</span>
        </label>
        <div class="btn-box">
          <button type="button" @click="nextStep">Next</button>
        </div>
      </form>
      <form v-if="step === 2">
        <div class="title">What's your ARR growth YOY?</div>
        <label>
          <input type="radio" name="btn" />
          <span class="amount"> greater than 0% </span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">0%-30%</span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">30%-100%</span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">100% and above</span>
        </label>
        <div class="btn-box">
          <button type="button" @click="backStep">Back</button>
          <button type="button" @click="nextStep">Next</button>
        </div>
      </form>
      <form v-if="step === 3">
        <div class="title">Do you have more than 3 months of cash runway</div>
        <label>
          <input type="radio" name="btn" />
          <span class="amount"> Yes </span>
        </label>
        <label>
          <input type="radio" name="btn" />
          <span class="amount">No</span>
        </label>

        <div class="btn-box">
          <button type="button" @click="backStep">Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      totalsteps: 3,
    };
  },
  methods: {
    nextStep() {
      return (this.step += 1);
    },
    backStep() {
      return (this.step -= 1);
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap');
section {
  font-family: 'Karla';
  font-weight: 600;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -30deg,
    #3beb3b 0%,
    green 50%,
    #262626 50%,
    #607d8b 100%
  );
  /* background-position: center; */
  filter: hue-rotate(120deg);
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.container {
  max-width: 500px;

  /* margin: 8% auto; */
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  /* position: relative; */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* display: flex;
  flex-direction: column; */
  
}
.container .title {
  font-size: 25px;
  position: relative;
  color: #fff;
  margin-bottom: 1rem;
  margin-left: 30px;
  margin-top: 25px;
}

.container .title::before {
  margin-left: 30px;
  /* padding: 25px 30px; */
  content: '';
  margin-bottom: -3px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background: #3beb3b;
}
.btn-box {
  width: 100%;
  margin: 30px auto;
  text-align: center;
   transition: 0.5s ease-in-out;
}
.btn-box button {
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  height: 35px;
  margin: 0 10px;
  background: chartreuse;
  border-radius: 30px;
  border: 0;
  color: #fff;
  cursor: pointer;
   transition: 0.5s ease-in-out;
}
.container label {
  display: flex;
  align-items: center;
}
.container label .amount {
  color: #fff;
  margin-left: 20px;
}

.step-row {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-shadow: 0 -1px 5px -1px #000;
  position: relative;
}
.step-col {
  width: calc(100% / 3);
  text-align: center;
  color: #fff;
  position: relative;
}
.progress {
  position: absolute;
  height: 100%;
  width: calc(100% / 3);
  background: chartreuse;
  border-radius: 10px 10px 10px 0;
   transition: 0.5s ease-in-out;
}
.active {
  position: absolute;
  height: 100%;
  width: calc(100% / 3 + 100% / 3);
  background: chartreuse;
  border-radius: 10px 10px 10px 0;
  transition: 0.5s ease-in-out;
}
.thirdactive {
     position: absolute;
  height: 100%;
  width: 100%;
  background: chartreuse;
  border-radius: 10px 10px 10px 0;
   transition: 0.5s ease-in-out;
}
.runit {
  position: absolute;
  height: 100%;
  width: 100%;
  background: chartreuse;
  border-radius: 10px 10px 10px 0;
   transition: 0.5s ease-in-out;
}

input[type='radio'] {
  position: relative;
  width: 120px;
  height: 40px;
  margin: 10px 20px;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  -webkit-appearance: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.1),
    5px 5px 10px rgba(0, 0, 0, 1), inset -2px -2px 5px rgba(255, 255, 255, 0.1),
    inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.5);
  transition: 0.5s;
}
input[type='radio']:checked {
  background: palegreen;
}
input[type='radio']::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 40px;
  background: linear-gradient(to top, #7a7979, rgb(48, 48, 48));
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: scale(0.98, 0.96);
  transition: 0.5s;
}
input[type='radio']:checked:before {
  left: 40px;
}
input[type='radio']::after {
  content: '';
  position: absolute;
  left: 65px;
  top: calc(50% - 2px);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
}
input[type='radio']:checked::after {
  left: calc(65px + 40px);
  background: greenyellow;
  box-shadow: 0 0 5px greenyellow, 0 0 15px greenyellow, 0 0 30px greenyellow;
}
</style>