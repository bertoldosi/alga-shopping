import React, { useState, useEffect } from "react";

import { Wrapper, Container } from "./App.styles";
import AppHeader from "../AppHeader/AppHeader";
import AppContainer from "../AppContainer/AppContainer";
import LineChart from "../LineChart/LineChart";
import ShoppingList from "../ShoppingList/ShoppingList";

import productsList from "../../mocks/productsList.json";
import extractPercentage from "../../utils/extractPercentage";

export default function App() {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

  const [products, setProducts] = useState(productsList.products);
  const [selectdProducts, setSelectdProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newSelectdProducts = products.filter((product) => product.checked);

    setSelectdProducts(newSelectdProducts);
  }, [products, selectdProducts]);

  useEffect(() => {
    const total = selectdProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);

    setTotalPrice(total);
  }, [selectdProducts]);

  const handlerToggle = (id, checked) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
  };

  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponiveis"
              products={products}
              onToggle={handlerToggle}
            />
          }
          middle={
            <ShoppingList
              title="Lista de selecionados"
              products={selectdProducts}
              onToggle={handlerToggle}
            />
          }
          right={
            <div>
              <h4>estatisticas:</h4>
              <LineChart
                color={colors[0]}
                title="Saudavel"
                percentage={extractPercentage(
                  selectdProducts.length,
                  selectdProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
              />

              <LineChart
                color={colors[1]}
                title="Não tão saudavel"
                percentage={extractPercentage(
                  selectdProducts.length,
                  selectdProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
              />

              <LineChart
                color={colors[2]}
                title="Limpeza"
                percentage={extractPercentage(
                  selectdProducts.length,
                  selectdProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
              />

              <LineChart
                color={colors[3]}
                title="Outros"
                percentage={extractPercentage(
                  selectdProducts.length,
                  selectdProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
              />
              <div>
                Previsão de gastos:
                <br />
                <h2>
                  {totalPrice.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}
