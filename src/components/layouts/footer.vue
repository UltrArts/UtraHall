<template>

    <!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="container my-5">

        <section class="">
        <!-- Footer -->
        <footer class="text-center text-white" style="background-color: #0a4275;">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: CTA -->
            <section class="">
            <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Saiba mais</span>
                <button @click="logout" type="button" class="btn btn-outline-light btn-rounded">
                    <!-- <router-link to="/">Logout</router-link> -->
                    Logout
                </button>
            </p>
            </section>
            <!-- Section: CTA -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-white" > <b>	Rumuka	Inc</b> </a>
        </div>
        <!-- Copyright -->
        </footer>
        <!-- Footer -->
        </section>

    </div>
    <!-- End of .container -->

</template>


<script>
    export default{
        data(){
            return{
                email: '',
                password: '',
                error: false,
                user: ''
            }
        },
        methods:{
            logout(){
                localStorage.removeItem('userSession');
                this.$router.push('/');
            }
        }

    }

    // const myObject = reactive({
    //     title: 'How to do lists in Vue',
    //     author: 'Jane Doe',
    //     publishedAt: '2016-04-10'
    // })
</script>