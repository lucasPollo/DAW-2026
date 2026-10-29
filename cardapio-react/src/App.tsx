import { useState } from "react"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { NavigationBar } from "./components/layout/nav"
import { categories } from "./data/categories"
import { ProductCard } from "./cases/products/components/product-card"
import { useProducts } from "./cases/products/hooks/use-product"


function App() {

  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const products = useProducts();

  function handleSelectCategory(alias: string) {
    setActiveCategory(alias);
  }
  return (
    <>
      <Header />
      <NavigationBar categories={categories} 
      activeCategory={activeCategory}
      onSelectCategory={handleSelectCategory}
      />
      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">{activeCategory}</span>: 10 itens</p>
          </header>
           

           {products.map((product) => (
            <ProductCard product={product} />
           ))}
          


        </section>
        <aside>
          <h2>Seu Pedido</h2>
          <div className="cart-empty">
            <img src="assets/img/cart.svg" alt="Carrinho Vazio" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar</p>
          </div>
        </aside>
      </main>
      <Footer />
      

    </>
  )
}

export default App
