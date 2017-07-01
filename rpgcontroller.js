(function(angular) {
  'use strict';

angular.module('rpg', [])
  .controller('RpgController', ['$scope', RpgController]);

function RpgController($scope) {
  this.name = "Pavan";
  this.health = 100;
  this.pic = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/21a/0e2/2f357b4.jpg"
  this.picE = "https://s-media-cache-ak0.pinimg.com/736x/34/70/05/347005021de6302da94ebbabcf23630b.jpg"
  this.fight = function(){
      this.Enemyhealth = this.Enemyhealth - Math.floor(Math.random() * 13);
     
      this.health = this.health - Math.floor(Math.random() * 13);
      this.chechDead()
  }

this.reset = function(){

   this.health = 100;
   this.Enemyhealth = 100;

}
  this.chechDead = function(){
    if(this.health < 0 ){

      alert(`${this.name} is DEAD 🤐`)
        this.reset()

    }
    if(this.Enemyhealth < 0 ){
        alert(`${this.EnemyName} is DEAD 🤐`)
      this.reset()
    }
        // if((this.health < 0 ) ||  (this.Enemyhealth < 0)){

        //   alert("You are dead")
        // }
  }

 this.EnemyName = "Angry Rabbit";
 this.Enemyhealth = 100;
  // $scope.contacts = [
  //   {type:'phone', value:'408 555 1212'},
  //   {type:'email', value:'john.smith@example.org'} ];

  // $scope.greet = function() {
  //   alert($scope.name.split('').reverse().join(''));
  // };

  // $scope.addContact = function() {
  //   $scope.contacts.push({type:'email', value:'andy@andy.andy'});
  // };

  // $scope.removeContact = function(contactToRemove) {
  //   var index = $scope.contacts.indexOf(contactToRemove);
  //   $scope.contacts.splice(index, 1);
  // };

  // $scope.clearContact = function(contact) {
  //   contact.type = 'phone';
  //   contact.value = '';
  // };

  //   $scope.replaceLetters = function(contact) {

  //   contact.value = contact.value.split('').reverse().join('');

  // };

  // $scope.caps = function(contact){
    
  //     contact.value = contact.value.toUpperCase()
  // }

  // $scope.replaceWith = function(contact){

  //     contact.value = "🐈🐈🐈🐇🐈🐈🐈"
  // }
  



}
})(window.angular);