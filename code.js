var userone= {
    email: 'dre@cute.com',
    name: 'dre',
    login(){
        console.log(this.email, 'has logged in');

    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};
//classes Objects
class User {
    constructor(email,name){
        this.email=email
        this.name=name
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email,'just logged out');
    }
}

var userOne = new User ('batman@joker.com','joker');
var userTwo = new User('joker@batman.com', 'batman');
userOne.login();
userTwo.login();

//method chaining
class User {
    constructor(email,name){
        this.email=email
        this.name=name
        this.score = 0
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email,'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is  now', this.score);
        return this;
    }
}






//inher
class User {
    constructor(email,name){
        this.email=email
        this.name=name
        this.score = 0
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email,'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is  now', this.score);
        return this;
    }
}

class Admin extends User{
    deleteUser(user){
        users=users.filter(u => {
            return u.email !=user.email
        }

        )
    }

}

var userOne = new User ('batman@joker.com','joker');
var userTwo = new User('joker@batman.com', 'batman');
userOne.login().updateScore().updateScore().logout();
var admin = new Admin ('broski@dre.com','broski');
var users=[userOne,userTwo,admin];

admin.deleteUser(userTwo);
console.log(users);

//pro

function User (email,name){
    this.email=email
    this.name=name
    this.online=false;
    this.login=function(){
        console.log(this.email,'has logged in ');
    }
    
    }


var userOne = new User ('batman@joker.com','joker');
var userTwo = new User('joker@batman.com', 'batman');

console.log(userOne);
userTwo.login

//pro add 

function User (email,name){
    this.email=email
    this.name=name
    this.online=false;
    this.login=function(){
        console.log(this.email,'has logged in ');
    }
    User.prototype.login= function(){
        this.online=true;
        console.log(this.email, 'has logged in');
    }
    User.prototype.logout = function(){
        this.online = false;
        console.log(this.email, 'has logged out');
    }
}

var userOne = new User ('batman@joker.com','joker');
var userTwo = new User('joker@batman.com', 'batman');

console.log(userOne);
userTwo.login