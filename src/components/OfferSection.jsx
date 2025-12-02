const OfferSection = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Special Offers & Deals
      </h2>

      <p className="max-w-2xl text-gray-300 mb-10">
        Enjoy exclusive discounts on premium games, bundles, and memberships.  
        Limited-time deals you won’t want to miss!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Offer Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-2">
            50% Off New Releases
          </h3>
          <p className="text-gray-300 text-sm">
            Get half-price on selected top-rated games — available this week only.
          </p>
        </div>

        {/* Offer Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Buy 1 Get 1 Free
          </h3>
          <p className="text-gray-300 text-sm">
            Choose two popular titles and pay for just one. Perfect for co-op lovers.
          </p>
        </div>

        {/* Offer Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Premium Membership — 30% Off
          </h3>
          <p className="text-gray-300 text-sm">
            Unlock early access, exclusive rewards, and monthly freebies at a discount.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OfferSection;
