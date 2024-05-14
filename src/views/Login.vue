<script setup>
import useVegetablesStore from "@/plugins/vegetablesStore";

const router = useRouter();
const store = useVegetablesStore();
const loading = ref(false);
const message = ref("");
const form = reactive({});

const handleSubmit = async () => {
  try {
    loading.value = true;
    message.value = "";
    await store.login(form);
    router.push("/");
  } catch (e) {
    console.error(e);
    message.value = e.response.data.error.message;
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <div class="wrapper login-page">
    <div>
      <h3>Login</h3>
      <p>
        Don’t have an account? <router-link to="/signup">Sign up.</router-link>
      </p>
      <form>
        <input
          v-model="form.identifier"
          placeholder="Email address or user name"
        />
        <input v-model="form.password" type="password" placeholder="password" />
        <button :disabled="loading" type="submit" @click.prevent="handleSubmit">
          Login
        </button>
        <p>{{ message }}</p>
      </form>
    </div>
    <div>
      <img src="/Illustration-1.png" alt="Login illustration" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.login-page {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 500;
    a {
      color: $base-color;
    }
  }

  form {
    width: 328px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    input {
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
      border: $base-color 1px solid;
    }

    button {
      background-color: $base-color;
      color: #fff;
      padding: 0.5rem 0.75rem;
      font-weight: 600;
      border: none;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
      }
    }
  }
}
</style>
