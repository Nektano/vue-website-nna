<template>
  <div class="contact-form">
    <h2 class="form-title">Написать в Пятигорскую бронзу</h2>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="name">Ваше имя*</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          @blur="v$.name.$touch()"
          :class="{ error: v$.name.$error }"
        />
        <span class="error-message" v-if="v$.name.$error">
          Пожалуйста, укажите ваше имя
        </span>
      </div>

      <div class="form-group">
        <label for="phone">Телефон*</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          @blur="v$.phone.$touch()"
          :class="{ error: v$.phone.$error }"
          placeholder="+7 (___) ___-__-__"
        />
        <span class="error-message" v-if="v$.phone.$error">
          Введите корректный номер телефона
        </span>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          @blur="v$.email.$touch()"
          :class="{ error: v$.email.$error }"
        />
        <span class="error-message" v-if="v$.email.$error">
          Введите корректный email
        </span>
      </div>

      <div class="form-group">
        <label for="message">Сообщение*</label>
        <textarea
          id="message"
          v-model="form.message"
          @blur="v$.message.$touch()"
          :class="{ error: v$.message.$error }"
          rows="5"
        ></textarea>
        <span class="error-message" v-if="v$.message.$error">
          Пожалуйста, напишите ваше сообщение
        </span>
      </div>

      <div class="form-footer">
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? "Отправка..." : "Отправить сообщение" }}
        </button>
        <p class="form-note">* Поля обязательные для заполнения</p>
      </div>
    </form>

    <div v-if="showSuccess" class="success-message">
      <p>Ваше сообщение успешно отправлено!</p>
      <p>Мы свяжемся с вами в ближайшее время.</p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const phoneRegex = /^(\+7|8)[\s(]?\d{3}[)\s]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export default {
  name: "BronzeContactForm",
  setup() {
    const form = reactive({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    const rules = computed(() => ({
      name: { required: helpers.withMessage("Это поле обязательно", required) },
      phone: {
        required: helpers.withMessage("Это поле обязательно", required),
        valid: helpers.withMessage("Некорректный номер", (value) =>
          phoneRegex.test(value)
        ),
      },
      email: { email: helpers.withMessage("Некорректный email", email) },
      message: {
        required: helpers.withMessage("Это поле обязательно", required),
      },
    }));

    const v$ = useVuelidate(rules, form);

    return { form, v$ };
  },
  data() {
    return {
      isSubmitting: false,
      showSuccess: false,
    };
  },
  methods: {
    async submitForm() {
      const isValid = await this.v$.$validate();
      if (!isValid) return;

      this.isSubmitting = true;

      // Здесь будет реальный запрос к API
      try {
        // Имитация запроса
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Очистка формы после успешной отправки
        this.form.name = "";
        this.form.phone = "";
        this.form.email = "";
        this.form.message = "";
        this.v$.$reset();

        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      } catch (error) {
        console.error("Ошибка отправки:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 100px auto;
  padding: 30px;
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  color: #5a3921; /* Бронзовый цвет */
  margin-bottom: 25px;
  font-size: 24px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #5a3921;
}

.error {
  border-color: #e74c3c !important;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}

.form-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
}

.submit-btn {
  padding: 12px 30px;
  background-color: #5a3921;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #7a5a42;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.form-note {
  color: #777;
  font-size: 14px;
  text-align: center;
}

.success-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  text-align: center;
}
</style>
