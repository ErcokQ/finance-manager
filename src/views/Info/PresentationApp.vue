<template>
  <div
    class="relative bg-gradient-to-br from-night-900 via-night-800 to-night-700 text-white min-h-screen overflow-hidden bg-stars">
    <header class=" flex w-full bg-transparent h-16 p-5 justify-evenly items-center border-b border-gray-800 gap-24">
      <div>
        <h2 class=" xl:text-lg">FManager</h2>
      </div>
      <!-- Menu -->
      <div class="relative z-10">
        <div
          class="absolute -inset-x-20 -inset-y-4 z-0 bg-gradient-to-b from-white/60 to-transparent blur-2xl pointer-events-none rounded-xl">
        </div>

        <ul class="relative z-10 flex gap-4 px-4 py-2">
          <li>
            <router-link to="" class="text-gray-300 hover:text-white font-medium transition">Lobby</router-link>
          </li>
          <li>
            <router-link to="" class="text-gray-200 hover:text-white font-medium transition">Costos</router-link>
          </li>
          <li>
            <router-link to="" class="text-gray-200 hover:text-white font-medium transition">Presentación</router-link>
          </li>
        </ul>
      </div>
      <!-- Boton Inicio Sesion -->
      <div>
        <router-link to="/auth" class="text-gray-200 hover:text-gray-400">
          <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Iniciar Sesión
          </button>
        </router-link>
      </div>
    </header>
    <main class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-2xl md:text-7xl font-bold text-center uppercase">
        Toma el <span class=" text-indigo-300">control</span> de tus<br>
        finanzas y haz que tu dinero<br>
        siga tu <span class=" text-indigo-300">ritmo</span>
      </h1>
      <div class="flex flex-col md:flex-row gap-5 w-3/4 mt-10">
        <div
          class="flex gap-2 flex-col p-6 rounded-2xl border-gray-100 backdrop-blur-2xl bg-gray-50/10 w-1/3 h-44 relative">
          <h3 class=" text-indigo-300 md:text-lg">Registro de gastos inteligente</h3>
          <p class="md:text-sm">
            Lleva un control diario, quincenal o mensual de tus gastos, con categorías personalizadas y etiquetas
            visuales para que nunca pierdas detalle.
          </p>
          <span class=" italic md:text-sm text-indigo-200">Convierte cada gasto en una decisión consciente.</span>
          <CurrencyDollarIcon class=" w-8 h-8 absolute right-2 bottom-2 text-indigo-100"></CurrencyDollarIcon>
        </div>
        <div
          class="flex flex-col relative p-6 gap-2 rounded-2xl border-gray-100 backdrop-blur-2xl bg-gray-50/10 w-1/3 h-44">
          <h3 class=" text-indigo-300 md:text-lg">Visualización clara del flujo de dinero</h3>
          <p class="md:text-sm">
            Gráficas dinámicas y comparativas que te muestran cómo, cuándo y en qué estás gastando.
          </p>
          <span class=" italic md:text-sm text-indigo-200">Detecta patrones, ajusta tus hábitos y mejora tus
            finanzas.</span>
          <ChartBarIcon class=" w-8 h-8 absolute right-2 bottom-2 text-indigo-100">
          </ChartBarIcon>
        </div>
        <div
          class="flex flex-col relative gap-2 p-6 rounded-2xl border-gray-100 backdrop-blur-2xl bg-gray-50/10 w-1/3 h-44">
          <h3 class=" text-indigo-300 md:text-lg">Gestión de tarjetas de crédito</h3>
          <p class="md:text-sm">
            Agrega movimientos de tus tarjetas, sigue tu deuda en tiempo real y mantén tus pagos bajo control.
          </p>
          <span class=" italic md:text-sm text-indigo-200">Evita sorpresas y planea tus pagos con anticipación.</span>
          <CreditCardIcon class=" w-8 h-8 absolute right-2 bottom-2 text-indigo-100"></CreditCardIcon>
        </div>
      </div>
    </main>
    <footer class="h-6 relative">
      <div class="absolute inset-0 bg-gradient-to-t from-indigo-500 via-transparent to-indigo-200/40 blur-3xl">
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { CurrencyDollarIcon } from '@heroicons/vue/16/solid';
import { ChartBarIcon } from '@heroicons/vue/16/solid';
import { CreditCardIcon } from '@heroicons/vue/16/solid';
</script>
