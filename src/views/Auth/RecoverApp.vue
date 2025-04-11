<template>
  <main class="p-8 flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900 h-screen">
    <div class="md:w-[40%] text-center text-gray-800 dark:text-gray-100">
      <h2 class="md:text-3xl ">Recuperación</h2>
      <p class="md:text-sm">
        Ingresa el correo electrónico asociado a tu cuenta y te enviaremos instrucciones para restablecer tu contraseña.
      </p>
    </div>
    <div
      class="flex justify-center items-center md:w-[35%] border border-gray-800 dark:border-gray-100 rounded-xl bg-gray-200/80 dark:bg-gray-800/80 shadow-md p-4">
      <form class="w-full max-w-sm mx-auto p-4 flex flex-col gap-2">
        <!-- Input de correo -->
        <AuthInput type="email" placeholder="Ingresa tu correo electrónico" />
        <span class="md:text-xs flex items-center justify-end text-gray-800 dark:text-gray-100 gap-2">
          <span>¿Ya tienes cuenta?</span>
          <routerLink to="/auth"
            class="inline-flex items-center gap-1 font-extrabold text-teal-950 dark:text-green-300">
            Inicia sesión
            <ArrowRightIcon class="h-4 w-4 font-extrabold text-teal-950 dark:text-green-300" />
          </routerLink>
        </span>
        <!-- Botón de inicio de sesión -->
        <AuthButton type="submit" text="Recuperar contraseña" />
        <span class="md:text-xs flex items-center justify-start text-gray-800 dark:text-gray-100 gap-2">
          <span>¿No tienes cuenta?</span>
          <router-link to="/auth/register"
            class="inline-flex items-center gap-1 font-extrabold text-teal-950 dark:text-green-300">
            Registrate
            <ArrowRightIcon class="h-4 w-4 font-extrabold text-teal-950 dark:text-green-300" />
          </router-link>
        </span>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import AuthInput from '@/components/ui/AuthInput.vue';
import AuthButton from '@/components/ui/AuthButton.vue';
</script>
