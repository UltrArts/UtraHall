<template>


    <div>
        <header>
            <div class="container bg-dark p-5 ">
                <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active text-primary" > <b>{{ userSession.role }} </b>  <span class="sr-only"></span></a>
                    <a class="nav-item nav-link" ></a>
                    <a class="nav-item nav-link" >{{ userSession.email }} </a>
                    </div>

                    <div class="d-flex flex-row-reverse">
                        <button class="form-control btn btn-danger" @click="logout">Logout</button>
                    </div>
                </div>
                </nav>
            </div>
            </header>
          
            <!---->
    </div>


</template>


<script>

    export default {
        data(){
            return {
                userSession: null,
            }
        },
        created() {
            this.userSession = JSON.parse(localStorage.getItem('userSession'))
            this.userSession == null ? this.$router.push('/') : ''
        },
        methods: {
            is_admin() {
                if(this.userSession.role == 'Admin'){
                    return true
                }else if(this.userSession.role == 'Client'){
                    // this.$router.push('/login');
                    return false
                }
            },
            logout(){
                localStorage.removeItem('userSession');
                this.$router.push('/');
            }

        }
        // mounted:{

        // }
        
    }
</script>


<style >
body{
    background-image:url('../../assets/img.jpg');
    background-repeat:no-repeat;
    background-size: 100%;
}

footer{

	margin-top: 20px;
	padding-top: 20px;
}
.bg__card__navbar{
	background-color: #000000;
}
.bg__card__footer{
	background-color: #000000 !important;
}
#add__new__list{
    top: -38px;
    right: 0px;
}


</style>