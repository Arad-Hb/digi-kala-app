import Image from 'next/image'
import React from 'react'
import styles from "./Card.module.css"
import AddButton from './AddButton'
import NavLink from '../features/NavLink'

const Card = ({product}) => {
  return (
    <div className={`${styles.cardContainer}`}>
        <div className={`${styles.header}`}>
          <span className={`${styles.title}`}>
            {product.incredibleOffers === true ? <Image className={`${styles.incredibleOfferImage}`} alt={product.name} src='/images/IncredibleOffer.svg' width={200} height={15} /> : null}
          </span>
          <NavLink productId={product.id} categoryName={null}><Image src={product.indexImageUrl} alt={product.name} width={150} height={200}  className={`${styles.image}`}/></NavLink>
        </div>
        <div className={`${styles.main}`}>
            <p className={`${styles.name}`}>{product.name.substring(0, 25)}{product.name.length > 25 ? "..." : null}</p>
            {product.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceBeforeOff}`}>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}تومان
              </div>
              <div>
                {product.priceWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}تومان
              </div>
            </div>
            <label className={`${styles.offPrcent}`}>
              {Math.floor(((product.price - product.priceWithDiscount) / product.price) * 100)} %
            </label>
          </div>
        )}
        </div>
        <div className={`${styles.footer}`}>
          {product.stock===0?<label className={`${styles.outOfStockLabel}`}>ناموجود</label>:<AddButton product={product}/>}
        </div>
    </div>
  )
}

export default Card