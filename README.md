# CocktailCraft

A study project in React aiming to interact with a cocktail API, providing the user with the possibility of filtering results by specific ingredient or viewing random options.
## Technologies

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)


## Documentation

The project consists of two pages, the home page and the drinks page.

#### Homepage
The home page consists of a title, an input and a button.

#### Drinks
The drinks page consists of a title, a return button and a section where the drinks appear.


## Functionalities

The user has two options: 
- Click on the button and, when redirected to the drinks, get a random drink;
- Enter an ingredient and get all the drinks of that flavor available in the API.


## API
The API used is external, if you want to access it [click here](https://www.thecocktaildb.com/api.php).

Two API functions are used in the project:
- Random;
- Search by ingredient;

```Typescript
    const apiUrl = searchParams.search === "random"
        ? "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchParams.search}`;
``` 



## Demonstration

![home](https://github.com/Ismael-Moreira-Kt/CocktailCraft/assets/154206380/cd34ff64-1714-4afe-a6eb-dccd5c59e317)
![drinks](https://github.com/Ismael-Moreira-Kt/CocktailCraft/assets/154206380/fa9e4045-901d-4331-ade3-95b42097f1d0)
![random-drink](https://github.com/Ismael-Moreira-Kt/CocktailCraft/assets/154206380/b143db95-c067-40b5-89f1-8038fe82aeec)
