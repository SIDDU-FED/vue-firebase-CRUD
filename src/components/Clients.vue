<template>
        <div>
            <div class="white-bg padd-10" >
                <el-form :label-position="labelPosition"  label-width="100px" >
                    <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Client Name" size="medium" >
                                <el-input v-model="clients.cName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Image Title" size="medium" >
                                <el-input v-model="clients.cImgTitle"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Alt Title" size="medium" >
                                <el-input v-model="clients.cAltName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Client Location" size="medium" >
                                <el-input v-model="clients.cLocation"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">

                        <el-col :span="12">
                            <el-form-item label="Client Summary" size="medium" >
                                <el-input type="textarea" :rows="6"  v-model="clients.cSummary"></el-input>
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
                    <div v-if="editMode">
                        <el-row type="flex" class="row-bg" justify="end" :gutter="0">
                        <el-form-item>
                            <el-button type="primary" @click="updateClient">Update</el-button>
                            <el-button >Cancel</el-button>

                        </el-form-item>
                    </el-row>
                    </div>
                    <div v-else>
                        <el-row type="flex" class="row-bg" justify="end" :gutter="0">
                            <el-form-item>
                                <el-button type="primary" @click="addClients">Save</el-button>
                                <el-button >Reset</el-button>

                            </el-form-item>
                        </el-row>
                    </div>
                </el-form>

            </div>
            <div>
            <el-table
                    :data="clientList"
                    style="width: 100%" class="hide">
                <el-table-column
                        label="Client Name"
                        prop="cName">
                </el-table-column>
                <el-table-column
                        label="Image Title"
                        prop="cImgTitle">
                </el-table-column>
                <el-table-column
                        label="Alt Title"
                        prop="cAltName">
                </el-table-column>
                <el-table-column
                        label="Location"
                        prop="cLocation">
                </el-table-column>
                <el-table-column
                        label="Status"
                        prop="cStatus">
                </el-table-column>
                <el-table-column
                        align="right">
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="Type to search"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
            <div class="test">
                <table>
                    <tr>
                        <th>name</th>
                        <th>img name</th>
                        <th>alt name</th>
                        <th>location</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(list, index) in clientList1">
                        <td>{{list.cName}}</td>
                        <td>{{list.cImgTitle}}</td>
                        <td>{{list.cAltName}}</td>
                        <td>{{list.cLocation}}</td>
                        <td>{{list.cStatus}}</td>
                        <td><el-button
                                size="mini"
                                @click="editClient(index)">Edit</el-button>
                            </td>
                        <td><el-button
                                size="mini"
                                type="danger"
                                @click="deleteClient(index)">Delete</el-button></td>
                    </tr>
                </table>
            </div>
        </div>
</template>

<script>
    export default{

        data(){
            name:'clientsData'

            return{
                labelPosition:'top',
                statusCheck: false,
                search: '',
                objResults:'',
                editMode: false,
                clients:
                    {
                        cId: 1,
                        cName: '',
                        cImgTitle:'',
                        cAltName:'',
                        cLocation:'',
                        cSummary:'',
                        cStatus:'inactive',
                    },

                clientList:[],
                clientList1:[]

            };
        },
        methods:{
            addClients:function(){
                let self = this;
                console.log(this.clients)
                axios.post('https://fir-4158c.firebaseio.com/Clients.json',
                    this.clients
                ).then(function(response){

//                    this.clientsList.push(response.data.clients);
                    self.fetchClients1();
                }).catch(function(resp){

                })
            },
            resetForm:function(){
                    this.clients.cId ='',
                    this.clients.cName ='',
                    this.clients.cImgTitle ='',
                    this.clients.cAltName ='',
                    this.clients.cLocation ='',
                    this.clients.cSummary ='',
                    this.clients.cStatus ='inactive'
                    this.statusCheck = false
            },
            fetchClients(){
                axios.get('https://fir-4158c.firebaseio.com/Clients.json').then(response => {

                    this.clientList = Object.keys(response.data).map(function(key) {

                        console.log(key);

                        return response.data[key];

                    });

                    console.log(this.clientList);
                });
            },
            fetchClients1(){
                axios.get('https://fir-4158c.firebaseio.com/Clients.json').then(response => {
                    this.clientList1 = response.data;
                    console.log(this.clientList1);
                });
            },
            handleEdit(index) {
                    this.editMode = true;
                this.clients.cId = this.clientList[index].cId;
                this.clients.cName = this.clientList[index].cName;
                this.clients.cImgTitle = this.clientList[index].cImgTitle;
                this.clients.cAltName = this.clientList[index].cAltName;
                this.clients.cLocation = this.clientList[index].cLocation;
                this.clients.cSummary = this.clientList[index].cSummary;

                console.log(this.clients.cStatus);

            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            editClient(index){
                this.editMode = true;
                axios.delete('https://fir-4158c.firebaseio.com/Clients/'+index+'.json',this.clients)
                    .then(response =>{

                });
                console.log(index);
            },
            deleteClient(index){
                console.log(index);
                console.log(this.clientList1[index]);
//                console.log('https://fir-4158c.firebaseio.com/Clients/'+index+'.json');
                axios.delete('https://fir-4158c.firebaseio.com/Clients/'+index+'.json').then(response =>{
                    this.fetchClients1();
                });

            },
            updateClient(){


            }

        },
        watch:{
            'statusCheck':function (value) {
                this.clients.cStatus = value ? 'active': 'inactive';
//                console.log(this.clients.cStatus);
            }
        },
        mounted(){
            this.fetchClients();
            this.fetchClients1();
        }
    }
</script>

<style scoped>
    .test .table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    .test td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    .test tr:nth-child(even) {
        background-color: #dddddd;
    }
    .hide{
        display: none;
    }
</style>