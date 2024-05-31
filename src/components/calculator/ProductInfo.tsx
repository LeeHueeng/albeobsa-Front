/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Image from "next/image";

interface Price {
  label: string;
  price100g: number;
  price1050g: number;
}

interface Product {
  name: string;
  imageSrc: string;
  prices: Price[];
}

const products: Product[] = [
  {
    name: "즉석밥",
    imageSrc: "/path/to/rice.png",
    prices: [
      { label: "역대 최저가", price100g: 300, price1050g: 3150 },
      { label: "초중저가", price100g: 350, price1050g: 3675 },
      { label: "중저가", price100g: 400, price1050g: 4200 },
      { label: "평균 판매가", price100g: 450, price1050g: 4725 },
    ],
  },
  {
    name: "만두",
    imageSrc: "/path/to/dumpling.png",
    prices: [
      { label: "역대 최저가", price100g: 450, price1050g: 4750 },
      { label: "초중저가", price100g: 560, price1050g: 5880 },
      { label: "중저가", price100g: 640, price1050g: 6720 },
      { label: "평균 판매가", price100g: 740, price1050g: 7770 },
    ],
  },
  {
    name: "치킨너겟",
    imageSrc: "/path/to/nugget.png",
    prices: [
      { label: "역대 최저가", price100g: 500, price1050g: 5250 },
      { label: "초중저가", price100g: 600, price1050g: 6300 },
      { label: "중저가", price100g: 700, price1050g: 7350 },
      { label: "평균 판매가", price100g: 800, price1050g: 8400 },
    ],
  },
  {
    name: "참치",
    imageSrc: "/path/to/tuna.png",
    prices: [
      { label: "역대 최저가", price100g: 700, price1050g: 7350 },
      { label: "초중저가", price100g: 800, price1050g: 8400 },
      { label: "중저가", price100g: 900, price1050g: 9450 },
      { label: "평균 판매가", price100g: 1000, price1050g: 10500 },
    ],
  },
  {
    name: "제로콜라",
    imageSrc: "/path/to/zero_cola.png",
    prices: [
      { label: "역대 최저가", price100g: 250, price1050g: 2625 },
      { label: "초중저가", price100g: 300, price1050g: 3150 },
      { label: "중저가", price100g: 350, price1050g: 3675 },
      { label: "평균 판매가", price100g: 400, price1050g: 4200 },
    ],
  },
  {
    name: "탄산수",
    imageSrc: "/path/to/sparkling_water.png",
    prices: [
      { label: "역대 최저가", price100g: 100, price1050g: 1050 },
      { label: "초중저가", price100g: 150, price1050g: 1575 },
      { label: "중저가", price100g: 200, price1050g: 2100 },
      { label: "평균 판매가", price100g: 250, price1050g: 2625 },
    ],
  },
];

const ProductCalculator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [selectedProductName, setSelectedProductName] = useState(
    products[0].name
  );

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPrice(Number(e.target.value));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleProductChange = (productName: string) => {
    const selected = products.find((product) => product.name === productName);
    if (selected) {
      setSelectedProduct(selected);
      setSelectedProductName(productName);
    }
  };
  const totalWeight = weight * quantity;
  const pricePer100g = totalWeight ? (totalPrice / totalWeight) * 100 : 0;
  const pricePer1050g = pricePer100g * 10.5;

  return (
    <div css={calculatorStyle}>
      <h1>알뜰 계산기</h1>
      <div className="product-section">
        <div className="product-buttons">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => handleProductChange(product.name)}
              className={
                product.name === selectedProductName ? "selected" : ""
              }>
              {product.name}
            </button>
          ))}
        </div>
        <div className="product-info">
          <div className="product-image">
            <Image
              src={selectedProduct.imageSrc}
              alt={selectedProduct.name}
              width={170}
              height={170}
            />
          </div>
          <div className="product-details">
            <h2>{selectedProduct.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>{selectedProductName}</th>
                  <th>100g당 가격</th>
                  <th>1봉(1050g)당 가격</th>
                </tr>
              </thead>
              <tbody>
                {selectedProduct.prices.map((price) => (
                  <tr key={price.label}>
                    <td>{price.label}</td>
                    <td>{price.price100g}원</td>
                    <td>{price.price1050g}원</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="calculator-section">
        <h2>{selectedProductName} 계산기</h2>
        <div className="input-set">
          <div className="input-section">
            <div>
              <input
                type="number"
                value={totalPrice}
                onChange={handlePriceChange}
                placeholder="총 가격"
              />
              <label>원</label>
            </div>
            <div className="secons-input">
              <div>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <label>봉</label>
              </div>
              <div>
                <input
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                />
                <label>g/봉</label>
              </div>
            </div>
            <button>구성 추가</button>
          </div>
          <div className="result-section">
            <table>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>값</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>총 중량</td>
                  <td>{totalWeight}g</td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>{totalPrice}원</td>
                </tr>
                <tr>
                  <td>100g당 가격</td>
                  <td>{pricePer100g.toFixed(2)}원/100g</td>
                </tr>
                <tr>
                  <td>1050g당 가격</td>
                  <td>{pricePer1050g.toFixed(2)}원/1050g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCalculator;

const calculatorStyle = css`
  padding: 20px;

  .product-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    .product-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: 90%;
      button {
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 50px;
        border: 1px solid #ccc;
        background-color: #c4c4c4;
        cursor: pointer;

        &.selected {
          background-color: #a775ff;
          color: white;
        }
        &:hover {
          background-color: #ececec;
        }
      }
    }

    .product-info {
      display: flex;
      gap: 20px;

      .product-image {
        flex: 1;
        img {
          width: 100%;
          height: auto;
        }
      }

      .product-details {
        flex: 2;
        h2 {
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          th,
          td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
          }
          th {
            background-color: #e0ceff;
          }
        }
      }
    }
  }

  .calculator-section {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    input {
      width: 100%;
    }
    .secons-input {
      display: flex;
      gap: 20px;
    }
    .input-set {
      display: flex;
      gap: 20px;
    }

    h2 {
      margin-bottom: 20px;
    }

    .input-section {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        display: flex;
        align-items: center;
        label {
          flex: 1;
        }
        input {
          flex: 2;
          padding: 5px;
          margin-left: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }
      }

      button {
        margin-top: 10px;
        padding: 10px;
        background-color: #6200ee;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
      }
    }

    .result-section {
      margin-top: 20px;
      width: 100%;
      table {
        width: 100%;
        border-collapse: collapse;
        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
        th {
          background-color: #e0ceff;
        }
      }
    }
  }
`;
