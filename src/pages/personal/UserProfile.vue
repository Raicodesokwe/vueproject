<template>
  <section>
    <div class="glass">
      <div class="dashboard">
        <div class="user">
          <img src="sketch.png" class="sketch" alt="" />

          <h3>Ricko Garlza</h3>
        </div>
        <div class="links">
          <div class="link">
            <img src="user.png" alt="" />
            <h2>Profile</h2>
          </div>
          <div class="link">
            <img src="group.png" alt="" />
            <h2>Refer and earn</h2>
          </div>
          <div class="link">
            <img src="settings.png" alt="" />
            <h2>Settings</h2>
          </div>
          <div class="link">
            <img src="withdraw.png" alt="" />
            <h2>Withdraw</h2>
          </div>
          <div class="link">
            <img src="money.png" alt="" />
            <h2>Deposit</h2>
          </div>
          <div class="link">
            <img src="live-chat.png" alt="" />
            <h2>Live chat</h2>
          </div>
          <div class="link">
            <img src="question-mark-draw.png" alt="" />
            <h2>FAQs</h2>
          </div>
          <div class="link">
            <img src="paper.png" alt="" />
            <h2>Statement</h2>
          </div>
        </div>
      </div>
      <div class="games">
        <p>Stay taliban</p>
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
}
.glass {
  background: rgba(255, 255, 255, 0.1);
  /* border-radius: 10px; */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(161, 120, 120, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  z-index: 2;
  height: 80vh;
  width: 70%;
  display: flex;
}
.sketch {
  width: 70px;
  clip-path: circle();
}
.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  overflow-y: scroll;
}
.dashboard::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.dashboard::-webkit-scrollbar-thumb {
  background: linear-gradient(0deg, #2ea8ff,#b8ff2e);
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
.dashboard::-webkit-scrollbar-track {
  border-radius: 5px 2px 5px 2px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
}
.link {
  display: flex;
  padding: 1rem 5rem;
  align-items: center;
}
.link h2 {
  padding: 0rem 2rem;
  font-size: 1rem;
}
.games {
  flex: 2;
}
</style>