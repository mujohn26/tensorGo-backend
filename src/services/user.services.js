import { emit } from "nodemon";
import db from "../database/models";

class UserServices {
  static async createUser(user) {
    try {
      const users = db.user.create(user);
      if (!users) return null;
      return booking;
    } catch (error) {
      return error;
    }
  }
  static async getUsers() {
    try {
      return await db.user.findAll();
    } catch (error) {
      return error;
    }
  }

  static async updateUser(id, userData) {
    try {
      return await db.user.update(userData,{where:{id}});
    } catch (error) {
      return error;
    }
  }
}

export default UserServices;
