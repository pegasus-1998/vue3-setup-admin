<!--  -->
<template>
    <img class="loading" src="@/images/loading.png" />
</template>

<style lang='scss' scoped>
.loading {
    @include center();
    animation: rt 2s ease-out infinite;
}
@keyframes rt {
    100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
    }
}
</style>