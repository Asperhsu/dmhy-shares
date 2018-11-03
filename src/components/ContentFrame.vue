<template>
    <div class="content-frame">
        <iframe :src="src" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style lang="scss">
    .content-frame {
        background: url('../assets/loading.gif') center center no-repeat;

        iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>