import React from "react";

import ReviewSorting from "./ReviewSorting";

const reviewsByCategory = {
  Wallets: [
    {
      title: "Thinner than I expected, in the best way",
      daysAgo: "2 weeks ago",
      text: "I carry four cards and a few folded bills and it disappears in my front pocket. The leather felt stiff the first couple of days and then molded to exactly what I carry. You can tell this was designed by people who actually use it.",
    },
    {
      title: "Quality you can feel",
      daysAgo: "1 month ago",
      text: "The stitching is clean, the edges are finished properly, and the leather has that real full-grain smell when you open the box. It already darkened slightly where my thumb slides the cards out — looks better every week.",
    },
    {
      title: "Third one I buy, this time as a gift",
      daysAgo: "2 months ago",
      text: "Bought one for myself last year, then one for my brother, now one for my dad. They wear in beautifully and nobody has managed to wear one out yet. Shipping was fast and the packaging makes it gift-ready.",
    },
  ],
  Eyewear: [
    {
      title: "My glasses finally have a home",
      daysAgo: "1 week ago",
      text: "The microfiber lining cleans the lenses a little every time I slide them in, which I didn't expect to matter but now I can't live without. Slim enough for a jacket pocket, solid enough that I stopped worrying.",
    },
    {
      title: "Saved my sunglasses twice already",
      daysAgo: "3 weeks ago",
      text: "Dropped my bag at the airport with the case inside — not a scratch on the glasses. The closure is firm, the structure holds its shape, and the leather is picking up a nice character. Exactly what I wanted.",
    },
    {
      title: "Understated and well made",
      daysAgo: "1 month ago",
      text: "No logos screaming at you, no flimsy hinges. Just a clean leather case that does its job and looks better than anything else on my desk. Quality is honestly above the price point.",
    },
  ],
  Kitchen: [
    {
      title: "Feels professional from the first use",
      daysAgo: "1 week ago",
      text: "The weight and balance are on another level compared to what I had before. You notice the build quality the moment you pick it up, and it's clear this was made for people who cook every day, not for display.",
    },
    {
      title: "Big upgrade from my old set",
      daysAgo: "1 month ago",
      text: "Meal prep takes noticeably less time now. Everything feels solid, nothing rattles or flexes, and cleanup is simple. My only regret is not replacing my old gear sooner.",
    },
    {
      title: "Bought it as a gift, kept it for myself",
      daysAgo: "2 months ago",
      text: "It was supposed to be a wedding present. After unboxing it I ordered a second one because there was no way I was giving this up. Looks great on the counter and performs even better.",
    },
  ],
  "Electronics & Gadgets": [
    {
      title: "Does exactly what it promises",
      daysAgo: "1 week ago",
      text: "Set up in under five minutes and it has worked flawlessly since. No apps fighting me, no flaky connections — it just works, every single day. That's rarer than it should be.",
    },
    {
      title: "Clean design, zero plastic feel",
      daysAgo: "3 weeks ago",
      text: "Most tech accessories look like tech accessories. This one looks like it belongs next to a leather wallet and a nice watch. The materials are genuinely premium and the attention to detail shows.",
    },
    {
      title: "Solved a daily annoyance",
      daysAgo: "1 month ago",
      text: "One of those products you don't know you need until you have it, and then you can't go back. Quality construction, thoughtful details, fast shipping. No complaints at all.",
    },
  ],
  "Home & Decor": [
    {
      title: "Instantly elevated the room",
      daysAgo: "1 week ago",
      text: "It's the first thing guests comment on. The finish looks far more expensive than it is, and it fits in with everything else on the shelf instead of fighting for attention. Very happy with this one.",
    },
    {
      title: "Quality you notice up close",
      daysAgo: "3 weeks ago",
      text: "Photos don't do the texture justice — it has real weight and the surface feels carefully finished. Packaging was excellent too, double-boxed with no damage. Would buy from this brand again.",
    },
    {
      title: "Bought one, came back for more",
      daysAgo: "1 month ago",
      text: "Started with one piece for the living room and ended up ordering for the bedroom too. Everything matches in tone without being identical. Shipping was quick both times.",
    },
  ],
};

const defaultReviews = reviewsByCategory["Electronics & Gadgets"];

const authors = [
  { name: "Daniel M.", avatar: "/images/avatar/user-default.jpg" },
  { name: "Sarah K.", avatar: "/images/avatar/user-default.jpg" },
  { name: "Chris B.", avatar: "/images/avatar/user-default.jpg" },
];

export default function Reviews({ product }) {
  const reviews = (
    reviewsByCategory[product?.category] || defaultReviews
  ).map((review, index) => ({ ...review, ...authors[index] }));

  return (
    <>
      <div className="tab-reviews-heading">
        {" "}
        <div className="top">
          <div className="text-center">
            <div className="number title-display">4.8</div>
            <div className="list-star">
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
            </div>
            <p>(26 Ratings)</p>
          </div>
          <div className="rating-score">
            <div className="item">
              <div className="number-1 text-caption-1">5</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "81%" }} />
              </div>
              <div className="number-2 text-caption-1">21</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">4</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "19%" }} />
              </div>
              <div className="number-2 text-caption-1">5</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">3</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">2</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">1</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
          </div>
        </div>
        <div>
          <div className="btn-style-4 text-btn-uppercase letter-1 btn-comment-review btn-cancel-review">
            Cancel Review
          </div>
          <div className="btn-style-4 text-btn-uppercase letter-1 btn-comment-review btn-write-review">
            Write a review
          </div>
        </div>
      </div>
      <div className="reply-comment style-1 cancel-review-wrap">
        <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
          <h4 className="">0{reviews.length} Comments</h4>
          <div className="d-flex align-items-center gap-12">
            <div className="text-caption-1">Sort by:</div>
            <ReviewSorting />
          </div>
        </div>
        <div className="reply-comment-wrap">
          {reviews.map((review, index) => (
            <React.Fragment key={index}>
              <div className="reply-comment-item">
                <div className="user">
                  <div className="image">
                    <img
                      alt=""
                      src={review.avatar}
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <h6>
                      <a href="#" className="link">
                        {review.title}
                      </a>
                    </h6>
                    <div className="day text-secondary-2 text-caption-1">
                      {review.daysAgo} &nbsp;&nbsp;&nbsp;- {review.name}
                    </div>
                  </div>
                </div>
                <p className="text-secondary">{review.text}</p>
              </div>
              {index === 0 && (
                <div className="reply-comment-item type-reply">
                  <div className="user">
                    <div className="image">
                      <img
                        alt=""
                        src="/images/avatar/user-default.jpg"
                        width={104}
                        height={104}
                      />
                    </div>
                    <div>
                      <h6>
                        <a href="#" className="link">
                          Reply from STONEPATH
                        </a>
                      </h6>
                      <div className="day text-secondary-2 text-caption-1">
                        {review.daysAgo} &nbsp;&nbsp;&nbsp;-
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary">
                    We love to hear it — everything we make is built for the
                    long run. If you ever need anything, our team is one email
                    away at info@stonepathstore.com. Thank you for the kind
                    review!
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <form
        className="form-write-review write-review-wrap"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="heading">
          <h4>Write a review:</h4>
          <div className="list-rating-check">
            <input type="radio" id="star5" name="rate" defaultValue={5} />
            <label htmlFor="star5" title="text" />
            <input type="radio" id="star4" name="rate" defaultValue={4} />
            <label htmlFor="star4" title="text" />
            <input type="radio" id="star3" name="rate" defaultValue={3} />
            <label htmlFor="star3" title="text" />
            <input type="radio" id="star2" name="rate" defaultValue={2} />
            <label htmlFor="star2" title="text" />
            <input type="radio" id="star1" name="rate" defaultValue={1} />
            <label htmlFor="star1" title="text" />
          </div>
        </div>
        <div className="mb_32">
          <div className="mb_8">Review Title</div>
          <fieldset className="mb_20">
            <input
              className=""
              type="text"
              placeholder="Give your review a title"
              name="text"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <div className="mb_8">Review</div>
          <fieldset className="d-flex mb_20">
            <textarea
              className=""
              rows={4}
              placeholder="Write your comment here"
              tabIndex={2}
              aria-required="true"
              required
              defaultValue={""}
            />
          </fieldset>
          <div className="cols mb_20">
            <fieldset className="">
              <input
                className=""
                type="text"
                placeholder="You Name (Public)"
                name="text"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required
              />
            </fieldset>
            <fieldset className="">
              <input
                className=""
                type="email"
                placeholder="Your email (private)"
                name="email"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required
              />
            </fieldset>
          </div>
          <div className="d-flex align-items-center check-save">
            <input
              type="checkbox"
              name="availability"
              className="tf-check"
              id="check1"
            />
            <label className="text-secondary text-caption-1" htmlFor="check1">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
        </div>
        <div className="button-submit">
          <button className="text-btn-uppercase" type="submit">
            Submit Reviews
          </button>
        </div>
      </form>
    </>
  );
}
