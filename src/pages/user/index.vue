<template>
    <router-view v-slot="{ Component}">
        <transition name="fade2" mode="out-in" appear>
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>