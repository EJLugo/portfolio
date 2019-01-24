console.log('hey there');

//PROJECTS PAGE
function aboutProject(project){
  const description = [
    {
      name: 'Quarto',
      description: 'A two player game with 16 pieces.',
      screenshot: 
    },
    {
      name: 'Spot: Best Furry Friend',
      description: 'Spot: Best Friend Finder is a website that uses Petfinders API to help users in NYC find a dog to adopt.'
    },
    {
      name: 'Exquisite Chronicle',
      description: 'Exquisite Chronicle allows users to create an account and add to a prompt to create a story along with other users.'
    }
  ]
  const h1tag = $('.project-name');
  const ptag = $('.project-description');
    if (project == 'quarto'){
      $('.project-name').html(description[0].name);
      $('.project-description').html(description[0].description);
    }
    else if (project == 'spot'){
      $('.project-name').html(description[1].name);
      $('.project-description').html(description[1].description);
    }
    else if (project == 'exquisite'){
      $('.project-name').html(description[2].name);
      $('.project-description').html(description[2].description);
    }
  }
