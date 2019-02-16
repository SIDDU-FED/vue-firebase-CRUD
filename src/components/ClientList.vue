<template>
    <div>

        <div class="white-bg padd-10" >
            <el-form :label-position="labelPosition" label-width="100px">
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="Client Name" size="medium">
                            <el-input v-model="clients.cName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Image Title" size="medium">
                            <el-input v-model="clients.cImgTitle"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="Alt Title" size="medium">
                            <el-input v-model="clients.cAltName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Client Location" size="medium">
                            <el-input v-model="clients.cLocation"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">

                    <el-col :span="12">
                        <el-form-item label="Client Summary" size="medium">
                            <el-input type="textarea" :rows="6" v-model="clients.cSummary"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">

                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="Active State">
                            <el-switch style="" v-model="statusCheck" active-color="#13ce66"
                                       inactive-color="#ff4949" active-text="Active" inactive-text="Inactive">
                            </el-switch>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div>

                    <el-row type="flex" class="row-bg" justify="end" :gutter="0">
                        <div v-if="editMode">

                            <el-form-item>
                                <el-button type="primary" @click="updateClient">Update</el-button>
                                <el-button @click="cancelClient">Cancel</el-button>
                            </el-form-item>
                        </div>
                        <div v-else>
                            <el-form-item>
                                <el-button type="primary" @click="addClients">Save</el-button>
                                <el-button @click="resetForm">Reset</el-button>
                            </el-form-item>
                        </div>
                    </el-row>
                </div>
            </el-form>

        </div>
        <div>
        </div>
        <div class="test hide">
            <table>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>img name</th>
                    <th>alt name</th>
                    <th>location</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
                <tr v-for="(list, index) in clientList">
                    <td>{{list.cId}}</td>
                    <td>{{list.cName}}</td>
                    <td>{{list.cImgTitle}}</td>
                    <td>{{list.cAltName}}</td>
                    <td>{{list.cLocation}}</td>
                    <td>{{list.cStatus}}</td>
                    <td>
                        <el-button
                                size="mini"
                                @click="editClient(index)">Edit
                        </el-button>
                    </td>
                    <td>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="deleteClient(index)">Delete
                        </el-button>
                    </td>
                </tr>
            </table>
        </div>
        <table id="mytable" class="table table-bordred table-striped">

            <thead>

            <tr>
                <th>Client</th>
                <th>Image Name</th>
                <th>Alt Name</th>
                <th>Location</th>
                <th>Status</th>
                <th colspan="2" style="text-align: center;">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(list, index) in clientList">
                <!--<td>{{list.cId}}</td>-->
                <td>{{list.cName}}</td>
                <td>{{list.cImgTitle}}</td>
                <td>{{list.cAltName}}</td>
                <td>{{list.cLocation}}</td>
                <td>{{list.cStatus}}</td>
                <td>
                    <el-button
                            size="mini"
                            @click="editClient(index)">Edit
                    </el-button>
                </td>
                <td>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="deleteClient(index)">Delete
                    </el-button>
                </td>

            </tr>
            </tbody>
            <button @click="activeLoader">loader active</button>
        </table>
    </div>
</template>

<script>

    export default {
        name:'clientsData',
        data() {
            return {

                labelPosition: 'top',
                statusCheck: false,
                search: '',
                objResults: '',
                editMode: false,
                updateIndex: '',
                clients:
                    {
                        cId: 1,
                        cName: '',
                        cImgTitle: '',
                        cAltName: '',
                        cLocation: '',
                        cSummary: '',
                        cStatus: 'inactive',
                    },

                clientList: [],


            };
        },
        components:{
//            'flower-spinner': FlowerSpinner
        },
        methods: {
            addClients: function () {
                this.activeLoader();
//                let self = this;
//                console.log(this.clients)
                axios.post('firebaseurl',
                    this.clients
                ).then(response => {
                    this.fetchClients();
                    this.resetForm();
                    this.addSuccess();
                    this.hideSpinner();
                }).catch(function (resp) {

                })
            },
            fetchClients() {
                this.activeLoader();
                axios.get('firebaseurl').then(response => {
//                    console.log(response.data)
                    this.clientList = response.data;
                    this.hideSpinner();
//                    console.log(this.clientList);
                });
            },
            resetForm: function () {
                this.clients.cId = '',
                    this.clients.cName = '',
                    this.clients.cImgTitle = '',
                    this.clients.cAltName = '',
                    this.clients.cLocation = '',
                    this.clients.cSummary = '',
                    this.clients.cStatus = 'inactive'
                this.statusCheck = false
            },
            deleteClient(index) {
                this.activeLoader();
                axios.delete('firebaseurl' + index + '.json').then(response => {
                        this.fetchClients();
                        this.deleteSucess();
                        this.hideSpinner();
                });

            },
            editClient(index) {
//                window.alert("hai");
                this.editMode = true
                this.activeLoader();
                axios.get('firebaseurl' + index + '.json').then(response => {
                    this.clients = response.data
                    this.updateIndex = index;
                    this.editSuccess();
                    this.hideSpinner();
//                    console.log(this.updateIndex);
//                    this.updateClient();
                })
            },
            updateClient() {
                axios.patch('firebaseurl' + this.updateIndex + '.json', this.clients).then(response => {

                    this.updateIndex = '';
                    this.fetchClients();
                    this.resetForm();
                    this.editMode = false;
                    this.updateSuccess();
                });
            },
            cancelClient(){
                this.resetForm();
                this.editMode = false;
            },

//    loader js
            activeLoader(){
                Event.fire('showLoader');
            },
            hideSpinner(){
                Event.fire('hideLoader');
            },

//            notification js

            addSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Added to client List',
                    type: 'success',
                    duration: 2000
                });
            },
            editSuccess() {
                this.$notify.info({
                    title: 'Edit Details',
                    message: 'Ready to edit',
                    type: 'success',
                    duration: 2000
                });
            },
            deleteSucess(){
                this.$notify({
                    title: 'Success',
                    message: 'Clients is deleted',
                    type: 'success',
                    duration: 2000
                });
            },
            updateSuccess(){


                this.$notify.info({
                    title: 'Title',
                    message: 'Clients is Edited',
                    duration: 2000
                });
            }
        },
        watch: {
            'statusCheck': function (value) {
                this.clients.cStatus = value ? 'active' : 'inactive';
//                console.log(this.clients.cStatus);
            }
        },

        mounted() {

            console.log('mounted');

            this.fetchClients();
        },
        beforeMount(){

            console.log('before mounted');
        },
        beforeCreate(){

            console.log('before created');
        },
        created(){
            console.log('created');
        }
    }
</script>

<style scoped>
    #mytable{
        margin-top:50px;
        background-color: #fff;
    }
    .hide{
        display: none;
    }
    table {
        border-spacing: 0;
        border-collapse: collapse;
        background-color: transparent;
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
    }
    .table th{
        text-align: left;
     }
    .table-striped>tbody>tr {
       border-bottom: .5px solid #dddddd;
    }
    .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
        padding: 10px 8px;
        line-height: 1.42857143;
        vertical-align: top;
        border-bottom: 1px solid #ddd;
    }
</style>