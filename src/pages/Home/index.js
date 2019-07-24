import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-masculino/26/D12-3055-026/D12-3055-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-masculino/26/D12-3055-026/D12-3055-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-masculino/26/D12-3055-026/D12-3055-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-masculino/26/D12-3055-026/D12-3055-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-masculino/26/D12-3055-026/D12-3055-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-masculino/26/D12-3055-026/D12-3055-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
