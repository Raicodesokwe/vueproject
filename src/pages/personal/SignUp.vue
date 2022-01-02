<template>
  <section>
    <div class="container">
      <div class="title">Sign up</div>
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <input type="text" placeholder="E-mail" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder=" Password" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder=" Confirm password" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="First name" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Last name" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="County" required />
          </div>
          <div class="input-box">
            <input type="tel" placeholder="Phone number" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="User image" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Preferred username" required />
          </div>
          <div class="input-box">
            <input type="number" placeholder="ID number" required />
          </div>
          <div class="input-box">
            <input type="date" placeholder="Date of birth" required />
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
  background: linear-gradient(
    -30deg,
    #3beb3b 0%,
    green 50%,
    #262626 50%,
    #607d8b 100%
  );
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
  background: #3beb3b;
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
  color: #fff;
  background: #3beb3b;
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