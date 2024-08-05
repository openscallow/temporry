<script>
  import { onMount } from 'svelte';
  import {productDatabase} from '$lib/json/product.js';
  console.log(productDatabase[0])


  // console.log(productDatabase.map(itemss => ({
  //   edff:itemss.img
  // })));

  let products = [
    {img: productDatabase[0].img,
     link: `./${productDatabase[0].id}`,
     name: productDatabase[0].name
    }]
  console.log(products[0].link)


  onMount();

 
  </script>
  
  <div class="container">
    {#each products as product}
      <div class="tile">
        <a href={product.link} rel="noopener noreferrer">
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
        </a>
      </div>
    {/each}
  </div>
  
  <style>
    .container {
      display: grid;
      gap: 1rem;
      margin: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  
    .tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      background-color: #f0f0f0;
      border-radius: 8px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .tile:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  
    .tile a {
      text-decoration: none;
      color: inherit;
      text-align: center;
    }
  
    .tile img {
      width: 100%;
      max-width: 150px;
      height: auto;
      margin-bottom: 1rem;
    }
  
    .tile h2 {
      font-size: 1.2rem;
      margin: 0;
    }
  </style>