<template>
    <Header/>
    <Footer/>
</template>

<script>
    import Footer from 'layouts/footer.vue';
    import Header from 'layouts/header.vue';
    export default{
        name: 'ClientDashboard',
        components: {
            Footer,
            Header
        }
    }
</script>