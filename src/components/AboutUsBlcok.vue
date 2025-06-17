<script setup></script>
<template>
  <div class="main_block">
    <div class="text_block">
      <h2 class="text1">Наши преимущества<br /><br /></h2>
      <h1 class="text2">Почему выбирают ООО «Пятигорская бронза»</h1>
      <h2 class="text3">
        <br />
        Откройте для себя эксклюзивные бронзовые сувениры от нашего
        интернет-магазина.<br />Качество и оригинальный дизайн гарантированы.
      </h2>
    </div>
    <div class="cards_block">
      <div class="card1">
        <div class="center_text">
          <h1 class="card_text">Высокое качество продукции</h1>
          Наши бронзовые изделия изготавливаются с вниманием к деталям и
          долговечностью.
        </div>
      </div>
      <div class="card2">
        <div class="center_text">
          <h1 class="card_text">Уникальный дизайн сувениров</h1>
          Каждое изделие оригинально и имеет свою историю.
        </div>
      </div>
      <div class="card3">
        <div class="center_text">
          <h1 class="card_text">Быстрая доставка по России</h1>
          Оперативно доставляем заказы в любую точку страны.
        </div>
      </div>
      <div class="card4">
        <div class="center_text">
          <h1 class="card_text">Доступные цены на сувениры</h1>
          Предлагаем отличное соотношение цены и качества.
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text1 {
  font-family: var(--sans-serif);
  font-size: 18px;
  font-weight: 600;
  color: #bc271f;
}
.text2 {
  font-family: var(--sans-serif);
  font-size: 36px;
  font-weight: bold;
}
.text3 {
  font-family: var(--sans-serif);
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
}
.text_block {
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 300px;
  color: #000000;
  justify-content: center;
  align-items: center;
}
.cards_block {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 500px;
}
.card1,
.card2,
.card3,
.card4 {
  background-color: #000000;
  border-radius: 20px;
  height: 400px;
  width: 300px;
  background-size: 300px 400px;
}
.card1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/about_us_card_1.jpg");
  height: 400px;
  width: 300px;
}
.card2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/about_us_card_2.jpg");
  height: 400px;
  width: 300px;
}
.card3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/about_us_card_3.jpg");
  height: 400px;
  width: 300px;
}
.card4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/about_us_card_4.jpg");
  height: 400px;
  width: 300px;
}
.center_text {
  text-align: center;
  position: relative;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--sans-serif);
  font-size: 14px;
}
.card_text {
  font-family: var(--sans-serif);
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
.card1:hover,
.card2:hover,
.card3:hover,
.card4:hover {
  cursor: pointer;
  filter: brightness(70%);
}
</style>
