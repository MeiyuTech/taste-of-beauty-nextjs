"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
  type FormEvent,
} from "react";
import { menus, menuKeys, isMenuKey, menuDishId, type MenuKey } from "@/lib/menus";
import {
  BOOKING_URL,
  ORDER_URL,
  DINNER_TIMES,
  LUNCH_TIMES,
  bookingUrl,
  menuUrl,
  restaurantToday,
  nextOpenDate,
  dateError,
} from "@/lib/booking";
import InternalLink from "./internal-link";
import DishGallery from "./dish-gallery";
import { getDishImage } from "@/lib/dish-images";
const DiningContext = createContext<{
  active: MenuKey;
  select: (menu: MenuKey, jump?: boolean) => void;
}>({ active: "59", select: () => {} });
export function DiningProvider({
  children,
  queryKey = "menu",
}: {
  children: ReactNode;
  queryKey?: "menu" | "booking";
}) {
  const [active, setActive] = useState<MenuKey>("59");
  useEffect(() => {
    function restore() {
      const menu = new URLSearchParams(window.location.search).get(queryKey);
      setActive(isMenuKey(menu) ? menu : "59");
    }
    restore();
    const initialMenu = new URLSearchParams(window.location.search).get(queryKey);
    if (isMenuKey(initialMenu) && !window.location.hash)
      requestAnimationFrame(() =>
        document
          .getElementById("menus")
          ?.scrollIntoView({ behavior: "instant" }),
      );
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, [queryKey]);
  function select(menu: MenuKey, jump = false) {
    setActive(menu);
    const url = menuUrl(window.location.href, menu, queryKey);
    if (queryKey === "menu") {
      url.searchParams.delete("diet");
      if (/^#(?:dish-|menu-detail-)/.test(url.hash)) url.hash = "";
    }
    window.history.replaceState(null, "", url);
    if (jump)
      document.getElementById("menus")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }
  return (
    <DiningContext.Provider value={{ active, select }}>
      {children}
    </DiningContext.Provider>
  );
}
const tabLabels = {
  "59": "$59 Special Tasting",
  "99": "$99 Tasting Menu",
  lunch: "Lunch",
  xlb: "Xiaolongbao",
};
export function MenuPanel() {
  const { active, select } = useContext(DiningContext);
  const [diet, setDiet] = useState<"vegan" | "vegetarian">("vegan");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    function restoreDiet() {
      const query = new URLSearchParams(window.location.search);
      setDiet(query.get("menu") === "99" && query.get("diet") === "vegetarian" ? "vegetarian" : "vegan");
    }
    restoreDiet();
    window.addEventListener("popstate", restoreDiet);
    return () => window.removeEventListener("popstate", restoreDiet);
  }, []);
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!/^(?:dish-|menu-detail-)/.test(hash)) return;
    const target = document.getElementById(hash);
    if (!target || target.closest("[hidden]")) return;
    const frame = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      target.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [active, diet]);
  function chooseDiet(next: "vegan" | "vegetarian") {
    setDiet(next);
    const url = new URL(window.location.href);
    url.searchParams.set("diet", next);
    if (/^#dish-/.test(url.hash)) url.hash = "";
    window.history.replaceState(null, "", url);
  }

  function choose(key: MenuKey) {
    setDiet("vegan");
    select(key);
  }
  function keyboard(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % 4;
    else if (event.key === "ArrowLeft") next = (index + 3) % 4;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 3;
    else return;
    event.preventDefault();
    choose(menuKeys[next]);
    refs.current[next]?.focus();
  }
  return (
    <>
      <div className="menu-tabs" role="tablist" aria-label="Dining menu">
        {menuKeys.map((key, index) => (
          <button
            key={key}
            type="button"
            ref={(el) => {
              refs.current[index] = el;
            }}
            role="tab"
            id={`menu-tab-${key}`}
            aria-controls={`menu-detail-${key}`}
            aria-selected={active === key}
            tabIndex={active === key ? 0 : -1}
            className={active === key ? "selected" : ""}
            onClick={() => choose(key)}
            onKeyDown={(e) => keyboard(e, index)}
          >
            {tabLabels[key]}
          </button>
        ))}
      </div>
      {menuKeys.map((key) => {
        const menu = menus[key];
        const courses = key === "99" && diet === "vegetarian" ? menu.vegetarian! : menu.courses;
        const photoNames = courses.map(([name]) => name).filter((name) => getDishImage(name));
        return <div
        key={key}
        className="menu-detail"
        hidden={active !== key}
        id={`menu-detail-${key}`}
        role="tabpanel"
        aria-labelledby={`menu-tab-${key}`}
        tabIndex={0}
      >
        <div className="detail-visual">
          {photoNames.length ? <DishGallery key={`${key}-${diet}`} names={photoNames} label={`${menu.title} dish photos`} featured /> : <>
            <img src={`/assets/${menu.image}`} alt={menu.alt} loading="lazy" />
            <div className="photo-label">TASTE OF BEAUTY · {menu.title}</div>
          </>}
        </div>
        <div className="detail-copy">
          <div className="eyebrow">{menu.eyebrow}</div>
          <div className="detail-heading">
            <h2>
              {menu.title}
            </h2>
            <div className="price">
              {menu.price}
              <small>{menu.unit}</small>
            </div>
          </div>
          <p className="menu-intro">
            {menu.intro}{key === "xlb" && <> — see the <InternalLink href="/vegan-xiaolongbao">full xiaolongbao page</InternalLink>.</>}
          </p>
          {key === "xlb" && (
            <InternalLink className="secondary xlb-detail-link" href="/vegan-xiaolongbao">
              Explore our xiaolongbao
            </InternalLink>
          )}
          {key === "99" && (
            <div className="diet-switch" role="group" aria-label="Dietary menu">
              <button
                type="button"
                aria-pressed={diet === "vegan"}
                onClick={() => chooseDiet("vegan")}
              >
                Vegan
              </button>
              <button
                type="button"
                aria-pressed={diet === "vegetarian"}
                onClick={() => chooseDiet("vegetarian")}
              >
                Vegetarian
              </button>
            </div>
          )}
          {(key === "99" ? ["vegan", "vegetarian"] as const : ["vegan"] as const).map((variant) => (
            <section key={variant} hidden={key === "99" && diet !== variant} aria-label={key === "99" ? `${variant} tasting menu` : undefined}>
              {key === "99" && <h2 className="diet-heading">The Tasting Experience – {variant === "vegan" ? "Vegan" : "Vegetarian"}</h2>}
              <ol className="dish-list">
                {(variant === "vegetarian" ? menu.vegetarian! : menu.courses).map((course, index) => (
                  <li key={course[0]} id={menuDishId(key, variant, course[0])} tabIndex={-1}>
                    <span className="course-n">{String(index + 1).padStart(2, "0")}</span>
                    <div className="course-copy"><h3>{course[0]}</h3><p>{course[1]}</p></div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
          {key === "lunch" && (
            <p className="fine">
              Selected lunch dishes shown.
            </p>
          )}
          <div className="menu-actions">
            <InternalLink className="cta" href={`/?booking=${key}#booking`}>
              {menu.cta}
            </InternalLink>
            {key === "xlb" && (
              <>
                <a
                  className="secondary"
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order online
                </a>

              </>
            )}
          </div>
          <p className="fine">
            {menu.dinner && (
              <>
                Prices per guest; tax, gratuity and beverages additional.
                <br />
              </>
            )}
            Tell us about allergies before ordering.
          </p>
        </div>
      </div>;
      })}
    </>
  );
}
export function BookingForm() {
  const { active, select } = useContext(DiningContext);
  const menu = menus[active];
  const times = menu.dinner ? DINNER_TIMES : LUNCH_TIMES;
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const now = restaurantToday();
    setToday(now);
    setDate(nextOpenDate(now));
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const submittedDate = String(form.get("date"));
    const message = dateError(submittedDate);
    setError(message);
    if (message) {
      event.currentTarget.querySelector("input")?.focus();
      return;
    }
    window.open(
      bookingUrl(
        submittedDate,
        String(form.get("time")),
        String(form.get("party")),
      ),
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <div className="booking-box">
      <p className="selection-label">
        EXPLORING<b>{menu.title}</b>
      </p>
      <label className="booking-menu">
        Dining menu
        <select
          value={active}
          onChange={(event) => select(event.target.value as MenuKey)}
        >
          {menuKeys.map((key) => (
            <option key={key} value={key}>
              {tabLabels[key]}
            </option>
          ))}
        </select>
      </label>
      <form id="booking-form" onSubmit={submit}>
        <label>
          Date
          <input
            type="date"
            name="date"
            required
            min={today}
            value={date}
            aria-invalid={!!error}
            aria-describedby={error ? "booking-error" : undefined}
            onChange={(event) => {
              setDate(event.target.value);
              setError(dateError(event.target.value));
            }}
          />
        </label>
        <label>
          Guests
          <select name="party" defaultValue="2">
            {[2, 1, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preferred time
          <select
            name="time"
            key={menu.dinner ? "dinner" : "lunch"}
            defaultValue={times[0]}
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <button className="cta" type="submit">
          Check availability
        </button>
      </form>
      {error && (
        <p id="booking-error" role="alert" className="booking-error">
          {error}
        </p>
      )}
      <p className="fine">
        Closed Mondays. Opens OpenTable to check actual availability and complete your
        reservation. Your menu preference is for browsing; confirm dining
        details when booking.
      </p>
      <a
        className="inline-link"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Prefer to book directly?
      </a>
    </div>
  );
}
