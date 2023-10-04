<template>
      <!---->
      <main>
            <div class="container my-5">
                <div>
                    
                </div>
                <div class="card-body text-center">
                <h4 class="card-title">  </h4>
                <p class="card-text"></p>
                </div>
                <div class="card">
                    <button class="btn btn-success position-absolute "  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-plus"></i> Novo Salão</button>
                    <table class="table table-hover mt-5">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome Sala</th>
                            <th scope="col">Capacidade</th>
                            <th scope="col">Preço/H (Mt) </th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acções</th>
                        </tr>
                        </thead>
                        <tbody>
                            <!-- {{ hall }} -->
                        <tr v-for="h in hall.halls">
                            <th scope="row">{{ h.key }}</th>
                            <!-- {{ h }} -->
                            <td>{{ h.name }}</td>
                            <td>{{ h.capacity }}</td>
                            <td> {{ h.price }} </td>
                            <td><h5 class="" ><span class="badge bg-success"> Disponível</span> </h5> </td>
                            <td>
                                <a class="btn btn-sm btn-danger" href="#" @click="delete(h.name)"><i class="fas fa-trash-alt"></i> Excluir</a>    
                            </td>
                        </tr>
                        <!-- <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <a class="btn btn-sm btn-primary" href="#"><i class="far fa-edit"></i> edit</a>
                                <a class="btn btn-sm btn-danger" href="#"><i class="fas fa-trash-alt"></i> delete</a>    
                            </td>
                            <td><a class="btn btn-sm btn-info" href="#"><i class="fas fa-info-circle"></i> Details</a> </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>       
                                <a class="btn btn-sm btn-primary" href="#"><i class="far fa-edit"></i> edit</a>
                                <a class="btn btn-sm btn-danger" href="#"><i class="fas fa-trash-alt"></i> delete</a> 
                            </td>
                            <td><a class="btn btn-sm btn-info" href="#"><i class="fas fa-info-circle"></i> Details</a> </td>
                        </tr> -->
                        </tbody>
                    </table>
                </div>
                <!-- Large modal -->


            <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card-body text-center">
                        <h4 class="card-title">Adicionar Salão</h4>
                    </div>
                        <div class=" card col-8 offset-2 my-2 p-3">
                    <form @submit.prevent="sSubmit">
                        <div class="form-group">
                            <label for="saloon_name">Nome Salão</label>
                            <input v-model="sName" type="text" class="form-control" name="listname" id="listname" placeholder="Nome do salão">
                        </div>
                        <div class="form-group">
                            <label for="datepicker">Capacidade</label>
                            <input v-model="sCapacity" type="number" class="form-control" id="datepicker" placeholder="Capacida de Pessoas">
                        </div>
                        <div class="form-group">
                            <label for="datepicker">Preço por Hora</label>
                            <input v-model="sPrice" type="number" class="form-control" placeholder="Preço em Metical">
                        </div>
                    <div class="form-group text-center mt-2">
                        <button type="submit" class="btn btn-block btn-primary">Adicionar</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </div>
            </main>
            <!---->

</template>


<script >
    import { useHallStore } from '@/store/HallStore';
    import {ref} from 'vue'

    export default{
        setup(){
            const hall = useHallStore()

            // const newHall = ref('')
            const sSubmit = () => {
                if((this.sName.value.length > 0) && (this.sPrice >0 ) && (this.sCapacity > 0)){
                    hall.addHall({
                        id: Math.floor(Math.random() * 10000),
                        name: this.sName.value,
                        capacity: this.sCapacity.value,
                        
                        price: this.sPrice.value,
                        status: false
                    })
                    this.sName.value = ''
                    this.sCapacity.value = ''
                    this.sPrice.value = ''
                }
            }
            return{
                hall,
                sSubmit,
                // sName,
                // sCapacity,
                // sPrice,

            }
        },
        methods:{
            delete(name){
                alert(name)
            }
        }

    }


</script>