<template>
    <div class="container mt-5">
        <section class="vh-100">
            <div class="container-fluid h-custom">
                <h1 class="text-center text-primary">Login</h1>
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <div v-if="error" class="divider d-flex align-items-center">
                        <alert class="alert w-100 text-center alert-danger">Credenciasi incorrectas</alert>
                    </div>
                    <form>
                        .
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0">Preencha com as credenciais</p>
                        </div>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                        <input type="email" v-model="email" id="form3Example3" class="form-control form-control-lg"
                        placeholder="Preencha com o email válido" />
                        <label class="form-label" for="form3Example3" >Email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-3">
                        <input type="password" v-model="pass" id="form3Example4" class="form-control form-control-lg"
                        placeholder="Insira a password" />
                        <label class="form-label" for="form3Example4">Senha</label>
                    </div>

                    
                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button @click="login" type="button" class="btn btn-primary btn-lg"
                        style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                        <!-- <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" -->
                            <!-- class="link-danger">Register</a></p> -->
                    </div>

                    </form>
                </div>
                </div>
            </div>
            <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <!-- Copyright -->
                <div class="text-white mb-3 mb-md-0">
                Copyright © 2023. <b>Rumuka	Inc</b> All rights reserved.
                </div>
                <!-- Copyright -->

                <!-- Right -->
                <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#!" class="text-white">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
                <!-- Right -->
            </div>
        </section>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                email: '',
                password: '',
                error: false,
                role: '',
                userSession: null
            }
        },
        methods:{
            login(){
                if((this.email == "cliente@email.com"  && this.pass == "12345678") || (this.email == "admin@email.com"  && this.pass == "12345678")){
                    this.redirect()
                    
                }else{
                    this.error = true
                }
            },

            redirect: function(){
                if(this.email == "cliente@email.com"){
                    this.role = 'Cliente'
                }else{
                    this.role = 'Admin'
                }

                const userSession = {
                    email: this.email,
                    role: this.role,
                };

                // Salvar a sessão no localStorage
                localStorage.setItem('userSession', JSON.stringify(userSession));

                // Redirecionar para a página principal
                this.$router.push('/dashboard');
            }
        },
        mounted() {
            this.userSession = JSON.parse(localStorage.getItem('userSession'))
            this.userSession !== null ? this.$router.push('/dashboard') : ''
        },

    }
</script>


<style scoped>
    .divider:after,
    .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
    }
    .h-custom {
    height: calc(100% - 73px);
    }
    @media (max-width: 450px) {
    .h-custom {
    height: 100%;
    }
    }
</style>