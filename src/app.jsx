import { useEffect, useState } from "preact/hooks";

export default function App() {

    const items = {
        espresso: {title: "espresso", price: 3},
        latte: {title: "latte", price: 3.5},
        largeLatte: {title: "large latte", price: 4},
        americano: {title: "americano", price: 3},
        largeAmericano: {title: "large americano", price: 3.25},
        cappuccino: {title: "cappuccino", price: 3.5},
        mocha: {title: "mocha", price: 3.5},
        largeMocha: {title: "large mocha", price: 4.5},
        hotChoco: {title: "hot chocolate", price: 4},
        kidsHotChoco: {title: "kids hot chocolate", price: 2.5},
        flatWhite: {title: "flat white", price: 3.5},
        tea: {title: "tea", price: 2.5},
        water: {title: "water", price: 2},
        softDrink: {title: "soft drink", price: 2},
        lemonade: {title: "lemonade", price: 3},
        toastie: {title: "toastie", price: 7},
        milk: {title: "vegan milk", price: 0.5},
        syrup: {title: "syrup", price: 0.5},
        cookie: {title: "cookie", price: 2.5},
        croissant: {title: "croissant", price: 3.5},
        overnightOats: {title: "overnight oats", price: 5},
        crisps: {title: "crisps", price: 1.5},
        chocolateBar: {title: "chocolate bar", price: 2},
        proteinBall: {title: "protein ball", price: 2.5}
    };

    const [currentOrder, setCurrentOrder] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [changeTotal, setChangeTotal] = useState(0);
    const [totalGiven, setTotalGiven] = useState(0);
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        setChangeTotal(totalGiven - orderTotal);
    }, [orderTotal, totalGiven]);

    const AddToOrder = (item) => {
        const orderClone = [...currentOrder];
        orderClone.push(item);
        setOrderTotal(orderTotal + item.price);
        setCurrentOrder(orderClone);
    };

    const RemoveFromOrder = (key) => {
        const orderClone = [...currentOrder];
        setOrderTotal(orderTotal - orderClone[key].price);
        orderClone.splice(key, 1);
        setCurrentOrder(orderClone);
    };


    return (
        <div class="h-full flex flex-nowrap">

            <button onClick={() => setShowMenu(!showMenu)} className="fixed right-0 p-5">
                MENU
            </button>

            <div className="flex-grow p-10 overflow-auto">
                <div class="">
                    <h1>Drinks</h1>
                    <div className="mt-3 flex flex-wrap gap-5">
                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.espresso)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Espresso
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.cappuccino)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Cappuccino
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.latte)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Latte
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.largeLatte)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Large Latte
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.flatWhite)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Flat White
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.mocha)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Mocha
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.largeMocha)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Large Mocha
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.hotChoco)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Hot Chocolate
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.kidsHotChoco)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Kids Hot Chocolate
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.tea)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Tea
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.lemonade)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Lemonade
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.softDrink)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Soft Drink
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.water)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Water
                        </button>
                    </div>
                </div>

                <div className="mt-5">
                    <h1>Food</h1>
                    <div className="mt-3 flex flex-wrap gap-5">
                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.toastie)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Toastie
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.cookie)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Cookie
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.croissant)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Croissant
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.proteinBall)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Protein Ball
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.overnightOats)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Overnight Oats
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.crisps)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Crisps
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.chocolateBar)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Chocolate Bar
                        </button>
                    </div>
                </div>

                <div className="mt-5">
                    <h1>Extras</h1>
                    <div className="mt-3 flex flex-wrap gap-5">
                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.milk)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Almond / Oat / Soy / Coconut Milk
                        </button>

                        <button ontouchstart={() => {}} onClick={() => AddToOrder(items.syrup)} className="border-2 px-5 py-2 border-black transition active:bg-black/20">
                            Syrup
                        </button>
                    </div>
                </div>

                <div className="mt-5">
                    <h1>Custom Amount</h1>
                    <input onKeyDown={(e) => {
                        if (e.key !== "Enter") return;

                        AddToOrder({
                            title: "Custom Amount",
                            price: parseFloat(e.target.value)
                        });
                    }} className="border-2 border-black placeholder:text-black p-1.5 mt-5"
                        placeholder="Custom Amount" type="number" min="0" step="any"
                    />
                </div>
            </div>

            <div style={{display: showMenu ? "block" : "none"}} className="min-w-[300px] p-5 border-l-2 border-l-black overflow-y-auto">
                <h1 className="font-semibold">Current Order</h1>

                <div className="mt-3">
                    {currentOrder.map((item, key) => (
                        <div key={key} className="flex items-center justify-between">
                            <h1>{item.title}</h1>
                            <h1>{item.price}</h1>

                            <button onClick={() => RemoveFromOrder(key)} className="text-red-500">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <h1 className="font-bold mt-3 text-[18px]">Total: €{orderTotal}</h1>

                <input
                    value={totalGiven}
                    onInput={(e) => setTotalGiven(e.target.value)}
                    className="w-full border-2 border-black placeholder:text-black p-1.5 mt-5"
                    placeholder="Total Given"
                    type="number"
                    min="0"
                    step="any"
                />

                <h1 className="mt-2 font-bold text-[18px]">Change: €{changeTotal}</h1>

                <button
                    onClick={() => {
                        setCurrentOrder([]);
                        setTotalGiven(0);
                        setOrderTotal(0);
                        setChangeTotal(0);
                    }}
                    className="border-2 border-black w-full py-2 mt-4"
                >
                    Finish Order
                </button>
            </div>
        </div>
    );
}
