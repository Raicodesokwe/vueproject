<template>
  <section>
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img src="saving.png" />
          <h3>Personal</h3>
        </div>
        <div class="content">
          <div>
            <h3>Personal</h3>
            <p>Save in any currency,crypto or commodity</p>
            <router-link to="/personalsaving">Start Saving</router-link>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src="funds.png" />
          <h3>Group</h3>
        </div>
        <div class="content">
          <div>
            <h3>Group</h3>
            <p>
              Save with your family,friends or colleagues in any currency,crypto
              or commodity
            </p>
            <router-link to="/personalsaving">Start Saving</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(0deg, #b8ff2e, #2ea8ff);
  background-attachment: fixed;
}
.container {
  position: relative;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px 0;
}
.container .card {
  position: relative;
  height: 250px;
  background: #fff;
  display: flex;
  width: 45%;
  margin: 30px 0;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.container .card .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  transition: 0.5s ease-in-out;
}
.container .card:hover .imgBx {
  display: grid;
  /* flex-wrap: wrap; */
  /* justify-content: center;
    align-items: center; */
  height: 150px;
  width: 150px;
  left: -75px;
  top: calc(50% - 75px);
}
.container .card .imgBx img {
  max-width: 100px;

  transition: 0.5s ease-in-out;
}

.container .card:hover .imgBx img {
  max-width: 75px;
  filter: invert(0.5);
}
.container .card:hover .imgBx h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  filter: invert(0.5);
}
.container .card .content {
  position: absolute;
  right: 0;
  width: calc(100% - 75px);
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .card .content h3 {
  color: #47f31c;
  margin-bottom: 5px;
  font-size: 24px;
}
.container .card .content a {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 20px;
  border-radius: 5px;
  background: #7df703;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}
@media (max-width: 992px) {
  .container {
    position: relative;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .container .card {
    width: 300px;
    height: auto;
    flex-direction: column;
    background: transparent;
    margin: -20px 0;
    box-shadow: none;
  }
  .container .card .imgBx {
    position: relative;
  }
  .container .card .imgBx,
  .container .card:hover .imgBx {
    width: 80%;
    height: 200px;
    top: 100px;
    left: 10%;
  }
  .container .card:hover .imgBx {
      top: 80px;
    }
  .container .card .imgBx img,
  .container .card:hover .imgBx img {
      max-width: 100px;
  }
  .container .card .content {
      position: relative;
      width: 100%;
      background: #fff;
      box-shadow: none;
      border-radius: 20px;
      padding: 20px 40px 40px;
      border-top: 100px solid #fff;
  }
  
}
</style>