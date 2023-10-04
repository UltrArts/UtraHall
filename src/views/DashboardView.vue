<template>
    <Header/>
    <div>

        <div v-if="this.userSession.role === 'Admin'? true : false">
            <AdminDashboard />
        </div>

        <div v-else="isAdmin">
            <ClientDashboard />
        </div>
    
    </div>
    <Footer/>
</template>

<script>
    // import ClientDashboard from '../components/ClientDashboard.vue';
    import AdminDashboard from '../components/AdminDashboard.vue';
    import Footer from '../components/layouts/footer.vue'
    import Header from '../components/layouts/header.vue';
    import { useCounterStore } from '@/store/counter';
    import { useHallStore } from '@/store/HallStore';




    export default{
        name: 'DashboardView',
        setup(){
            const counter = useCounterStore()
            const hall = useHallStore()
            return{
                    counter,
                    hall
            }
        },
        data(){
            return {
                userSession: null,
            }
        },
        created() {
            this.userSession = JSON.parse(localStorage.getItem('userSession'))
            this.userSession == null ? this.$router.push('/') : ''
        },
        components: {
            Footer,
            Header,
            // ClientDashboard,
            AdminDashboard,
        },
        methods: {
            isAdmin(){
                return this.userSession.role === 'Admin'? true : false
            },
        }
    }



</script>