Practice your query syntax using GraphiQL to get a feel for how schemas are set up in GraphQL. For problems that accept variables make sure to test each answer you come up with with multiple `id`s to make sure they work.

1. Write a query that will return the name, founder, ghost, and animal of Gryffindor (id: 1) and Ravenclaw (id: 4). Remember to alias - then DRY up your query with a fragment!

query TwoHouses($firstid: Int, $secondId: Int) {
  firstHouse: house(id: $firstid) {
    name,
    ghost,
    founder,
    animal
  },
  secondHouse: house(id: $secondId) {
    name,
    ghost,
    founder,
    animal
  }
}

{
  "firstid" : 1,
  "secondId": 4
}

2. Write a query that will return the core, length, owner name, and the name of the owner's house for both the wand with the `id` of 7 and the wand with the `id` of 10. Then use a fragment to DRY it up!

query TwoWands($firstid: Int, $secondId: Int) {
  firstWand: wand(id: $firstid) {
    core,
    length,
    wizard{
      name,
      house{
        name
      }
    }
  },
  secondWand: wand(id: $secondId) {
   	core,
    length,
    wizard{
      name,
      house{
        name
      }
    }
  }
}

{
  "firstid" : 7,
  "secondId": 10
}

3. Create a query that will accept an `id` variable and will return the patronus form associated with that `id`.

query Patronus($firstid: Int) {
  patronus: patronus(id: $firstid) {
  	form
  }
}


4. Write a query with the operation name of `FetchWizardandWand` that will accept two variables, one for a wizard to be fetched(`$wizardId`) and one for a wand to be fetched(`$wandId`). For the wizard return their name and house name. For the wand return the core, length, and the wizard's patronus form.

query FetchWizardandWand ($WizardId: Int, $WandId: Int){
  wizard: wizard(id:$WizardId){
    name,
    house{
      name
    }
  },
  wand: wand(id: $WandId) {
    core,
    length,
    wizard{
      name,
      patronus{
        form
      }
    }
  }
}

5. Now let's use variables, aliases and fragments! Write a query that will accept the `id` of two patronus. For each patronus return the form of that patronus, along with the name of the wizard that patronus belongs to.

query FetchTwoPetroni($firstPetronus: Int, $secondPetronus: Int){
  firstPetronus: patronus(id: $firstPetronus){
    form,
    wizards{
      name,
      
    }
  },
  secondPetronus: patronus(id: $secondPetronus){
    form,
    wizards{
      name,
      
    }
  }
}

6. Write a query that accepts two variables for the `id`s of two houses. For each house return the names of all the wizards of that house along with the core of their wands and their patronus forms. Use a fragment!

query TwoHouses($house1: Int, $house2: Int){
  house1: house(id:$house1){
    name,
    wizards{
      name,
      wands{
        core
      },
      patronus{
        form
      }
    }
  }
  house2: house(id:$house2){
    name,
    wizards{
      name,
      wands{
        core
      },
      patronus{
        form
      }
    }
  }
}

7. Write a query that accepts three variables for the `id` for three separate wizards. For the first wizard return their name, house name and patronus form. For the second wizard return their name, their house name, and their wand core. For the third wizard return their name, their house name, their patronus form, and their wand core. Though you are returning different information for each wizard you are still returning the name and house name of each wizard meaning you could use a fragment to DRY this up!

fragment nameHouseName on Wizard{
  name,
  house{
    name
  }
}

query ThreeWizards($wizard1: Int, $wizard2: Int, $wizard3: Int){
	wizard1: wizard(id: $wizard1){
    ...nameHouseName,
    patronus{
      form
    }
  },
  wizard2: wizard(id: $wizard2){
    ...nameHouseName,
   	wands{
      core
    }
  },
  wizard3: wizard(id: $wizard3){
    ...nameHouseName,
    patronus{
      form
    },
    wands{
      core
    }
  }
}

8. Write a query that will accept three variables for a query that can be broken down into three parts. The first variable will be the `id` for a house where you will return the name, founder, and patronus forms of all the wizards in that house. The second variable will be to fetch the length of a particular wand. The third variable will query to find the name, and the patronus form for the wizard with the specified id.

query ThreeVariables($houseId: Int, $wandId: Int, $wizardId: Int){
	house: house(id: $houseId){
  	name,
    founder,
    wizards{
      patronus{
        form
      }
    }
  },
  wand: wand(id: $wandId){
  	length
  },
  wizard: wizard(id: $wizardId){
    name,
    patronus{
      form
    }
  }
}