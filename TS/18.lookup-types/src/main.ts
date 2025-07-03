interface Car {
  id: number;
  name: string;
  brand: {
    popularity: number;
    logo: string;
    history: number;
  };
}

// lookup type: 기존의 속성 타입 재사용
function updateCarBrand(id: Car["id"], newBrand: Car["brand"]) {}
