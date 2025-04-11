<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import AuthInput from '@/components/ui/AuthInput.vue';
import AuthButton from '@/components/ui/AuthButton.vue';
import ButtonRedes from '@/components/ui/ButtonRedes.vue';

</script>

<template>
  <main class="p-8 flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900 h-screen">
    <div class="md:w-[40%] text-center text-gray-800 dark:text-gray-100">
      <h2 class="md:text-3xl ">Acceso</h2>
      <p class="md:text-sm"> Ingresa tu correo electrónico y contraseña para acceder a tu cuenta y gestionar tus
        finanzas personales. Si
        aún
        no estás registrado, haz clic en ‘Registrarte’ y empieza a llevar el control de tus gastos e ingresos de manera
        organizada y segura. </p>
    </div>
    <div
      class="flex justify-center items-center md:w-[35%] border border-gray-800 dark:border-gray-100 rounded-xl bg-gray-200/80 dark:bg-gray-800/80 shadow-md p-4">
      <form class="w-full max-w-sm mx-auto p-4 flex flex-col gap-2">
        <!-- Input con ícono de correo -->
        <AuthInput type="email" placeholder="Ingresa tu correo electrónico" />
        <!-- Input con ícono de candado -->
        <AuthInput type="password" placeholder="Ingresa tu contraseña" />
        <span class="md:text-xs flex items-center justify-end text-gray-800 dark:text-gray-100 gap-2">
          <span>¿Olvidaste tu contraseña?</span>
          <router-link to="/auth/recover"
            class="inline-flex items-center gap-1 font-extrabold text-teal-950 dark:text-green-300">
            Recuperala
            <ArrowRightIcon class="h-4 w-4 font-extrabold text-teal-950 dark:text-green-300" />
          </router-link>
        </span>
        <!-- Botón de inicio de sesión -->
        <AuthButton type="submit" text="Iniciar sesión" />
        <span class="md:text-xs flex items-center justify-start text-gray-800 dark:text-gray-100 gap-2">
          <span>¿No tienes cuenta?</span>
          <router-link to="/auth/register"
            class="inline-flex items-center gap-1 font-extrabold text-teal-950 dark:text-green-300">
            Registrate
            <ArrowRightIcon class="h-4 w-4 font-extrabold text-teal-950 dark:text-green-300" />
          </router-link>
        </span>
        <!-- Botones de inicio de sesión con Google y Facebook -->
        <div class="flex flex-col gap-2 w-full mt-4">
          <ButtonRedes id="login-google" social="google" label="Iniciar sesión con Google" />
          <ButtonRedes id="login-facebook" social="facebook" label="Iniciar sesión con Facebook" />
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
