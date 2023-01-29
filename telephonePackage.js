// this is the telephone class
class telephone {
    constructor (){
      this.contacts = new Set()
      this.observers = new Set()
    }
  
    // methods to add phone number
    addphonenumber(numberToAdd){
     this.contacts.add(numberToAdd)
    }
    // methods to remove phone number
   removePhoneNumber(numberToRemove){
     this.contacts.delete(numberToRemove)
   } 
    // methods to dial phone number
   dialPhoneNumber(numberToDial){
     if(this.contacts.has(numberToDial)){
      this.notifyObserver(`Dialing ${numberToDial}`)
     } else {
      this.notifyObserver(`${numberToDial} is not in your contacts list`) 
       }
   }
   // method to add an observer
    addObserver(observerToAdd){
      this.observers.add(observerToAdd)
    }
   // method to remove an observer
   removeObserver(observersToRemove){
    this.observers.delete(observersToRemove)
  
   }
   // method to notify observers
   notifyObserver(messageForEachObserver){
      this.observers.forEach(observer=> {
        observer.update(messageForEachObserver)
      })
   }
  }
  // the observer class
  class Observer{
      constructor(name){
          this.name = name
      }
  
      update(messageForEachObserver){
          console.log(`${this.name}: ${messageForEachObserver}`)
  
      }
  }
  
  const phone = new telephone()
  const moses = new Observer('moses')
  const tuzy = new Observer('tuzy')
  
  phone.addObserver(moses)
  phone.addObserver(tuzy)
  
  let number1 = 0816187
  let number2 = 2347023232
  
  phone.addphonenumber(number2)
  phone.notifyObserver(`${number2} was added successfully`)
  
  phone.dialPhoneNumber(number1)
  phone.dialPhoneNumber(number2)