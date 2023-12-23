class Network{
	#users = [];
  #lastId = 1;
  constructor(name){
  	this.name = name;
  }
  
  addUser(user){
  	user.id = this.#lastId++;
    this.#users.push(user);
  }
  
  RemoveUser(username){
  	const index = this.#users.findIndex(user => user.username === username);
    return this.#users.splice(index, 1);
  }
  
  login(username, password){
   return this.#users.some(user => user.username === username && user.CheckPassword(password));
   	
  }
}

class User{
#password;
	constructor(username, password, name, lastname){
  this.username = username;
  this.password = password;
  this.name = name;
  this.lastname = lastname;
  }
  
  get Password(){
  	return this.#password;
  }
  
  set Password(newpassword){
  	return this.#password = newpassword;
  }
  
  CheckPassword(password){
  	return password === this.#password;
  }
}


const insta = new Network("Instagram");
const u1 = new User("Arman123", "12345678", "Arman", "Karapetyan");


u1.password = "01234567";
console.log(u1.password);


insta.addUser(u1);

console.log(insta.login("Arman123", "12345678"));
console.log(insta.login("Arman123", "01234567"));

  

