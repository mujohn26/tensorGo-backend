import response from '../helpers/response';
import UserServices from '../services/user.services';
// import axios from 'axios';
import axios from '../helpers/axios.helper';
var https = require("https");
const request = require('request');


class UserController{

    static async saveProduct(req,res){
        try {
            request(
                'https://gorest.co.in/public-api/users',
                (error, response1, body) => {
                    if (error) {
                        return console.error(error);
                    }
                    const data =  JSON.parse(response1.body)
                    data.data.map((user, index)=>{
                      UserServices.createUser(user);
                    })
                    return response.successMessage(
                        res,
                        'Users data were saved successfully',
                        200,
                        data.data
                      );
                }
            );
        } catch (error) {
            return response.errorMessage(res, error.message, 500);     
        }


    }
 static async getProducts(req,res){
     try {
         const usersData=[];
         const users =  await UserServices.getUsers();
         users.map((user, index)=>{
             usersData.push(user.dataValues)
         })
         return response.successMessage(
            res,
            'Users were retrieved successfully',
            200,
            usersData
          );
     } catch (error) {
        return response.errorMessage(res, error.message, 500);    
     }

 }

 static async updateUser(req,res){
     const id = req.params.userId;
     const userData={};
     if(req.body.name){
         userData['name']= req.body.name;
     }
     if(req.body.email){
        userData['email']= req.body.email;
   
     }
     if(req.body.gender){
        userData['gender']= req.body.gender; 
     }

     if(req.body.status){
        userData['status']= req.body.status; 
 
     }

     const updateUser = await UserServices.updateUser(id,userData);

     return response.successMessage(
        res,
        'Users was updated successfully',
        200
      );
 }
}

export default UserController;