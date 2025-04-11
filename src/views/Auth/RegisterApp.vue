<template>
  <main class="p-8 flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900 min-h-screen">
    <div class="md:w-[40%] text-center text-gray-800 dark:text-gray-100">
      <h2 class="md:text-3xl ">Registro</h2>
      <p class="md:text-sm">
        Bienvenido a Finance Manager, tu aliado en la organización y control de tus finanzas. Regístrate para empezar a
        planificar,
        gestionar y transformar tu salud financiera de manera sencilla y efectiva.
      </p>
    </div>
    <div
      class="flex flex-col justify-center items-center md:w-[35%] border border-gray-800 dark:border-gray-100 rounded-xl bg-gray-200/80 dark:bg-gray-800/80 shadow-md p-4">
      <form class="w-full mx-auto p-4 flex flex-col gap-2">
        <div class="flex gap-2 w-full">
          <AuthInput type="text" placeholder="Ingresa tu nombre completo" />
          <AuthInput type="text" placeholder="Ingresa tus apellidos" />
        </div>
        <AuthInput type="email" placeholder="Ingresa tu correo electrónico" />
        <AuthInput type="password" placeholder="Ingresa tu contraseña" />
        <span class="md:text-xs flex items-center justify-end text-gray-800 dark:text-gray-100 gap-2">
          <span>¿Olvidaste tu contraseña?</span>
          <router-link to="/auth/recover"
            class="inline-flex items-center gap-1 font-extrabold text-teal-950 dark:text-green-300">
            Recuperala
            <ArrowRightIcon class="h-4 w-4 font-extrabold text-teal-950 dark:text-green-300" />
          </router-link>
        </span>
        <AuthInput type="date" placeholder="Ingresa tu fecha de nacimiento" />
        <!-- Botón de registro -->
        <AuthButton type="submit" text="Registrarme" />
        <span class="md:text-xs flex items-center justify-start text-gray-800 dark:text-gray-100 gap-2">
          <span>¿Ya tienes cuenta?</span>
          <router-link to="/auth"
            class="inline-flex items-center gap-1 font-extrabold text-teal-950 dark:text-green-300">
            Inicia sesión
            <ArrowRightIcon class="h-4 w-4 font-extrabold text-teal-950 dark:text-green-300" />
          </router-link>
        </span>
      </form>
      <div class="flex flex-col gap-2 w-full mt-4 p-4">
        <ButtonRedes id="register-google" social="google" label="Registrarme con Google" />
        <ButtonRedes id="register-facebook" social="facebook" label="Registrarme con Facebook" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import AuthInput from '@/components/ui/AuthInput.vue';
import AuthButton from '@/components/ui/AuthButton.vue';
import ButtonRedes from '@/components/ui/ButtonRedes.vue';

</script>
