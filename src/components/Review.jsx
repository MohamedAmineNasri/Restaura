import { useTheme } from "./ThemeContext";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";

const Review = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`container mx-auto mb-8 mt-12 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-[#000000] text-gray-100"
      }`}
      id="review"
    >
      <div className="flex flex-col">
        <p
          className={`mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3.5rem] ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
          <img
            className={`rounded-full border ${
              theme === "light" ? "border-gray-300" : "border-gray-700"
            }`}
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
          />
          <div
            className={`tracking-tighter ${
              theme === "light" ? "text-gray-900" : "text-gray-100"
            }`}
          >
            <h6>{REVIEW.name}</h6>
            <p>{REVIEW.profession}</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
          {[customer1, customer2, customer3, customer4].map(
            (customer, index) => (
              <img
                key={index}
                src={customer}
                alt="customer"
                className={`h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover ${
                  theme === "light"
                    ? "border border-gray-300"
                    : "border border-gray-700"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;
