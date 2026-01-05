
import Link from "next/link";
import Image from "next/image";
import styles from "./OfferSectio.module.css";

export default function OffersSection() {
    const offers = [
        {
            id: 1,
            title: "Welcome to AddKart | Your savings corner",
            items: [
                {
                    name: "Coupons",
                    image: "/images/img1.jpg"
                },
                {
                    name: "Best seller",
                    image: "/images/img2.jpg"
                },
                {
                    name: "Today's deals",
                    image: "/images/img3.jpg"
                },
                {
                    name: "Budget store",
                    image: "/images/img4.jpg"
                },
            ],
        },
        {
            id: 2,
            title: "Up to 70% Off | Electronics",
            items: [
                {
                    name: "Cameras",
                    image: "/images/img5.jpg"
                },
                {
                    name: "Video games",
                    image: "/images/img6.jpg"
                },
                {
                    name: "Audio",
                    image: "/images/img7.jpg"
                },
                {
                    name: "TVs",
                    image: "/images/img8.jpg"
                },
            ],
        },
        {
            id: 3,
            title: "Health & beauty | Up to 50% off",
            items: [
                {
                    name: "Perfumes",
                    image: "/images/img9.jpg"
                },
                {
                    name: "Grooming gadgets",
                    image: "/images/img10.jpg"
                },
                {
                    name: "Personal care",
                    image: "/images/img11.jpg"
                },
                {
                    name: "Nutrition & supplements",
                    image: "/images/img12.jpg"
                },
            ],
        },
        {
            id: 4,
            title: "Bank Offers | 4 Deals, Extra savings",
            items: [
                {
                    name: "Apply & get cashbacks",
                    image: "/images/img13.jpg"
                },
                {
                    name: "Upto 75AED off",
                    image: "/images/img14.jpg"
                },
                {
                    name: "10%off on citibank",
                    image: "/images/img15.jpg"
                },
                {
                    name: "0% installment options",
                    image: "/images/img16.jpg"
                },
            ],
        },
        {
            id: 5,
            title: "Under AED 99 - Electronics",
            items: [
                {
                    name: "Headsets",
                    image: "/images/img17.jpg"
                },
                {
                    name: "Gaming",
                    image: "/images/img18.jpg"
                },
                {
                    name: "Batteries",
                    image: "/images/img19.jpg"
                },
                {
                    name: "PC Accessories",
                    image: "/images/img20.jpg"
                },
            ],
        },
        {
            id: 6,
            title: "Best deals on healthcare",
            items: [
                {
                    name: "Personal care",
                    image: "/images/img12.jpg"
                },
                {
                    name: "Body wash ans soaps",
                    image: "/images/img9.jpg"
                },
                {
                    name: "Hair care",
                    image: "/images/img10.jpg"
                },
                {
                    name: "Body Lotions & more",
                    image: "/images/img11.jpg"
                },
            ],
        },
        {
            id: 7,
            title: "Headsets and more | sale",
            items: [
                {
                    name: "Headsets pack",
                    image: "/images/img7.jpg"
                },
                {
                    name: "Ear pieces",
                    image: "/images/img17.jpg"
                },
                {
                    name: "Headsets",
                    image: "/images/img17.jpg"
                },
                {
                    name: "Audio sets",
                    image: "/images/img7.jpg"
                },
            ],
        },
        {
            id: 8,
            title: "Just landed for men | Up to 40% off",
            items: [
                {
                    name: "Watches",
                    image: "/images/img21.jpg"
                },
                {
                    name: "Sportswear",
                    image: "/images/img22.jpg"
                },
                {
                    name: "Sunglasses",
                    image: "/images/img23.jpg"
                },
                {
                    name: "Shoes",
                    image: "/images/img24.jpg"
                },
            ],
        },
    ];

    return (
        <div className={`${styles.offersSection} container my-5`}>
            <div className="row g-4">
                {offers.map((offer) => (
                    <div key={offer.id} className="col-lg-3 col-md-6">
                        <div className={`${styles.offerBox} shadow-sm`}>
                            <h3 className={styles.offerTitle}>{offer.title}</h3>
                            <div className={styles.offerItems}>
                                {offer.items.map((item, index) => (
                                    <div key={index} className={styles.offerItem}>
                                        <Image src={item.image} alt={item.name} width={86} height ={53}/>
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="#">Shop now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


