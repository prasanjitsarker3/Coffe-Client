import Image from "next/image";

const SideProductShow = () => {
  const items = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/tea-leaves-background-with-flat-design_23-2147844061.jpg?t=st=1718484064~exp=1718487664~hmac=7d1ef84ceef2488be467aca3fcc9a4cce1bce0e9734f9dfd1671201a4da31bfb&w=740",
      title: "Green Tea Supreme",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/view-3d-coffee-cup-with-roasted-beans_23-2151083808.jpg?t=st=1718484283~exp=1718487883~hmac=59f30c19d5b71e49957814f3290f698ba543e24e4fc462b3f5eeb920ec7c82e5&w=740",
      title: "Espresso Italiano",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-photo/illustration-cup-coffee-with-whipped-cream-cinnamon_893012-66142.jpg?w=740",
      title: "Caramel Macchiato",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/front-view-cup-tea-with-sweet-choco-biscuits-plate-tray-dark-surface-ceremony-glass-sweet-sugar-cake-dessert-color_179666-24486.jpg?t=st=1718484184~exp=1718487784~hmac=737d18544c280e43d2179e76c8206e6a18ff792f4d742851715788727b04760f&w=360",
      title: "Earl Grey Delight",
    },
  ];
  const getHeightClass = (index: number) => {
    return index === 0 || index === 3 ? "h-40" : "h-60";
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center group"
          >
            <div
              className={`${getHeightClass(index)} relative w-full ${
                index === 2 ? "-mt-20" : "mt-0"
              } overflow-hidden`}
            >
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className=" -mt-8 pb-3 text-center text-white font-semibold z-50">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideProductShow;
