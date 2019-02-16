<template>
    <div>
        <div class="white-bg padd-10" :class="{active : bgChange }">
            <el-form :label-position="labelPosition" label-width="100px" :model="clientdata" ref="clientdata">
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="Client Name" size="medium" prop="name">
                            <el-input v-model="clientdata.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Image Title" size="medium" prop="imageTitle">
                            <el-input v-model="clientdata.imageTitle"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="Alt Title" size="medium" prop="imageAlt">
                            <el-input v-model="clientdata.imageAlt"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Client Location" size="medium" prop="location">
                            <el-input v-model="clientdata.location"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">

                    <el-col :span="12">
                        <el-form-item label="Client Summary" size="medium" prop="summary">
                            <el-input type="textarea" :rows="6" v-model="clientdata.summary"></el-input>
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
                <el-row type="flex" class="row-bg" justify="end" :gutter="0">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('clientdata')">Save</el-button>
                        <el-button @click="resetForm('clientdata')">Reset</el-button>

                    </el-form-item>
                </el-row>
            </el-form>
        </div>

        <h3 class="text-left">
            Client list
        </h3>

        <div class="client-list">
            <el-table 
                    :data="clientdetails.filter(data => !search || data.Name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                    
                <el-table-column
                        label="Client Name"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="Image Title"
                        prop="imageTitle">
                </el-table-column>
                <el-table-column
                        label="AltTitle"
                        prop="imageAlt">
                </el-table-column>
                <el-table-column
                        label="Location"
                        prop="location">
                </el-table-column>
                <el-table-column
                        label="Status"
                        prop="status">

                </el-table-column>
                <el-table-column v-if="hideTable"
                        label="Summary"
                        prop="summary">

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
                             @click="handleEdit(scope.$index)">Edit</el-button>
                        
                         <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

            <!--<button @click="postData">post to fire base</button>-->

    </div>
</template>
<script>
    export default {
        name: 'added',
        data() {

            return {
                hideTable:false,
                bgChange : false,
                labelPosition: 'top',
                statusCheck: false,
                clientdata: {
                    name: '',
                    imageTitle: '',
                    imageAlt: '',
                    summary: '',
                    location: '',
                    status: 'inActive',
                    summary: ''

                },
                clientdetails: [{
                    name: 'abb',
                    imageTitle: 'Tom',
                    location: 'USA',
                    imageAlt: 'mobile app development',
                    status: 'active',
                    summary: 'loerm ipsum dolar'
                }, {
                     
                    name: 'accenture',
                    imageTitle: 'Tom',
                    location: 'USA',
                    imageAlt: 'mobile app development',
                    status: 'active',
                    summary: 'loerm ipsum dolar'
                }
                ],
                search: '',
            }
        },
        methods: {

//            postData:function(){
//                axios.post('https://fir-4158c.firebaseio.com/firstList.json', {
//                    name: this.clientdata.name,
//                    imageTitle: this.clientdata.imageTitle,
//                    imageAlt: this.clientdata.imageAlt,
//                    location: this.clientdata.location,
//                    status: this.clientdata.status,
//                    summary: this.clientdata.summary
//                })
//                    .then(function (response) {
//                        console.log(response);
//                    })
//                    .catch(function (error) {
//                        console.log(error);
//                    });
//                console.log('posting the data to fire base');
//            },
            submitForm(clientdata) {
                var newClient = {
                
                    name: this.clientdata.name,
                    imageTitle: this.clientdata.imageTitle,
                    imageAlt: this.clientdata.imageAlt,
                    location: this.clientdata.location,
                    status: this.clientdata.status,
                    summary: this.clientdata.summary
                };
                console.log(this.clientdetails);
                if(this.bgChange){
                    console.log("edit mode");
                }
                this.clientdetails.push(newClient);
                this.clientdata.name = '',
                    this.clientdata.imageTitle = '',
                    this.clientdata.imageAlt = '',
                    this.clientdata.location = '',
                    this.clientdata.summary = '',
                    this.statusCheck = false
                this.$refs[clientdata].validate((valid) => {
                    if (valid) {
                    //    alert('submit!');
                    this.clientAddNotify();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(clientdata) {           
                this.$refs[clientdata].resetFields();
            },
             handleEdit(index) {

                 this.bgChange = true;

               console.log(this.clientdetails[index].name);
            this.clientdata.name = this.clientdetails[index].name ;
            this.clientdata.imageTitle = this.clientdetails[index].imageTitle ;
            this.clientdata.location = this.clientdetails[index].location ;
            this.clientdata.imageAlt = this.clientdetails[index].imageAlt ;
            this.clientdata.summary = this.clientdetails[index].summary ;
            this.clientEditNodify();
                    // console.log(this.clientdetails[index]);
                //  console.log(index);
//                 return axios.get('https://fir-4158c.firebaseio.com/firstList.json').then(function(response){
//                     console.log(response);
//
//                 });

      },
      clientAddNotify() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success',
          duration: 1000
        });
      },
      clientEditNodify() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },
      deleteConfirmMdl(index) {
        
        this.$confirm('This will permanently delete this client.' , {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
             this.clientdetails.splice(index,1)
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      },
      handleDelete(index) {
        this.deleteConfirmMdl()
          console.log(index);
        //   this.clientdetails.splice(index,1);

        // console.log(index);
      },
            
            mounted() {
                
            },
        },
        watch:{
                'statusCheck':function(value){
                    this.clientdata.status = value ? 'active' : 'inactive';

                }

        },
        mounted(){
//                console.log(this.list);
                console.log(this.clientdetails);
        }
    }
    
</script>