import './Footer.scss';



export const Footer = () => {

  const logos = ['amazon','apple','att','bbc','bk','bmw','cola','doritos','dunkundonats','ford','gap','google','ibm','ikea','lego','macd','microsoft','nasa','nfl','nike','pepsi','rainbow','shell','shevrole','starbucks','subway','ups','walmart','wd'];
  
  return(
    <footer>
      <section className="company__info">
        <div className="for__buyers  info__block">
          <h2 className="title">For Buyers</h2>
          <a href="#">Delivery</a>
          <a href="#">Processing of personal data</a>
          <a href="#">Payment</a>
          <a href="#">Pickup</a>
          <a href="#">Insurance</a>
          <a href="#">Public offer agreement</a>
          <a href="#">Contacts</a>
          <a href="#">Reviews</a>
        </div>
        <div className="profitable__offer  info__block">
          <h2 className="title">Profitable offer</h2>
          <a href="#">Premium goods</a>
          <a href="#">Channels of connection</a>
          <a href="#">Payment in installments</a>
          <a href="#">Promo codes</a>
          <a href="#">Gift Ideas</a>
          <a href="#">Recommended products</a>
          <a href="#">Gift certificates</a>
          <a href="#">Bonus program</a>
          <a href="#">All promotions</a>
          <a href="#">Discounted goods</a>
        </div>
        <div className="company  info__block">
          <h2 className="title">Company</h2>
          <a href="#">News</a>
          <a href="#">Jobs</a>
          <a href="#">Cashless sales</a>
          <a href="#">Wholesale</a>
          <a href="#">Affiliate program</a>
          <a href="#">Affiliate program "Bridge"</a>
          <a href="#">Suppliers</a>
          <a href="#">About us</a>
          <a href="#">Mission and values</a>
          <a href="#">Requisites</a>
        </div>
        <div className="useful__information  info__block">
          <h2 className="title">Useful information</h2>
          <a href="#">Equipment repair</a>
          <a href="#">Replacement and return of goods</a>
          <a href="#">Reliable Protection Program</a>
          <a href="#">Non-warranty repair</a>
          <a href="#">Additional services</a>
          <a href="#">Service centres</a>
          <a href="#">How to make a purchase</a>
          <a href="#">How to use promo code</a>
          <a href="#">Help in choosing</a>
          <a href="#">Manufacturers</a>
        </div>
      </section>

      <section className="partners">{
        logos.map((logo, index) => <div className={`partner__logo  ${logo}__logo`} key={logo + index}></div>)}
      </section>

      <section className="footer__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt in reiciendis nobis! Rerum facilis maiores perspiciatis adipisci impedit aperiam? Facere quis molestias ad cum officia in voluptate expedita exercitationem numquam incidunt culpa, quisquam, velit nam?<br/><br/>Tenetur suscipit, a voluptas accusantium rem laboriosam laudantium animi aspernatur adipisci. Optio saepe cupiditate, fuga odio qui eius quaerat nobis explicabo ad velit cum dolor repellat hic perferendis repellendus nemo.<br/><br/>In, adipisci explicabo aspernatur harum blanditiis repudiandae ea minus omnis voluptate hic quasi distinctio non, odit culpa dignissimos architecto delectus commodi. Temporibus ullam repellendus, esse, consectetur minus laudantium illo doloremque atque expedita dolor quod?</section>

      <div className="payments__icon"></div>
    </footer>
  )
}