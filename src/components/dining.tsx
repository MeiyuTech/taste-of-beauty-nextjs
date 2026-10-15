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
import { menus, menuKeys, isMenuKey, type MenuKey } from "@/lib/menus";
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
const DiningContext = createContext<{
  active: MenuKey;
  select: (menu: MenuKey, jump?: boolean) => void;
}>({ active: "59", select: () => {} });
export function DiningProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<MenuKey>("59");
  useEffect(() => {
    function restore() {
      const menu = new URLSearchParams(window.location.search).get("menu");
      setActive(isMenuKey(menu) ? menu : "59");
    }
    restore();
    const initialMenu = new URLSearchParams(window.location.search).get("menu");
    if (isMenuKey(initialMenu) && !window.location.hash)
      requestAnimationFrame(() =>
        document
          .getElementById("menus")
          ?.scrollIntoView({ behavior: "instant" }),
      );
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  function select(menu: MenuKey, jump = false) {
    setActive(menu);
    window.history.replaceState(null, "", menuUrl(window.location.href, menu));
    if (jump)
      document
        .getElementById("menus")
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
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
export function MenuChoice({
  menu,
  children,
}: {
  menu: MenuKey;
  children: ReactNode;
}) {
  const { active, select } = useContext(DiningContext);
  return (
    <button
      type="button"
      className={active === menu ? "selected" : ""}
      onClick={() => select(menu, true)}
    >
      {children}
    </button>
  );
}
const tabLabels = {
  "59": ["$59 Dinner", "五道纯素晚餐"],
  "99": ["$99 Tasting", "八道式品鉴"],
  lunch: ["Lunch", "自在午餐"],
  xlb: ["Xiaolongbao", "手工小笼包"],
};
export function MenuPanel() {
  const { active, select } = useContext(DiningContext);
  const [diet, setDiet] = useState<"vegan" | "vegetarian">("vegan");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const menu = menus[active];
  const courses =
    active === "99" && diet === "vegetarian" ? menu.vegetarian! : menu.courses;
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
            aria-controls="menu-detail"
            aria-selected={active === key}
            tabIndex={active === key ? 0 : -1}
            className={active === key ? "selected" : ""}
            onClick={() => choose(key)}
            onKeyDown={(e) => keyboard(e, index)}
          >
            {tabLabels[key][0]}
            <small>{tabLabels[key][1]}</small>
          </button>
        ))}
      </div>
      <div
        id="menu-detail"
        role="tabpanel"
        aria-labelledby={`menu-tab-${active}`}
        tabIndex={0}
      >
        <div className="detail-visual">
          <img src={`/assets/${menu.image}`} alt={menu.alt} loading="lazy" />
          <div className="photo-label">TASTE OF BEAUTY · {menu.zh}</div>
        </div>
        <div className="detail-copy">
          <div className="eyebrow">{menu.eyebrow}</div>
          <div className="detail-heading">
            <h3>
              {menu.title}
              <small>{menu.zh}</small>
            </h3>
            <div className="price">
              {menu.price}
              <small>{menu.unit}</small>
            </div>
          </div>
          <p className="menu-intro">
            {menu.intro}
            <span>{menu.introZh}</span>
          </p>
          {active === "99" && (
            <div className="diet-switch" role="group" aria-label="Dietary menu">
              <button
                type="button"
                aria-pressed={diet === "vegan"}
                onClick={() => setDiet("vegan")}
              >
                Vegan · 纯素
              </button>
              <button
                type="button"
                aria-pressed={diet === "vegetarian"}
                onClick={() => setDiet("vegetarian")}
              >
                Vegetarian · 蛋奶素
              </button>
            </div>
          )}
          <ol className="dish-list">
            {courses.map((course, index) => (
              <li key={course[0]}>
                <span className="course-n">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>
                    {course[0]}
                    <span>{course[1]}</span>
                  </h4>
                  <p>
                    {course[2]}
                    <span>{course[3]}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
          {active === "lunch" && (
            <p className="fine">
              Selected lunch dishes shown. · 此处展示午餐部分菜品。
            </p>
          )}
          <div className="menu-actions">
            <a className="cta" href="#booking">
              {menu.cta}
              <small>{menu.ctaZh} ↓</small>
            </a>
            {active === "xlb" && (
              <>
                <a
                  className="secondary"
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order online<small>查看口味与下单 ↗</small>
                </a>
                <a className="inline-link" href="/xiaolongbao">
                  Discover more · 小笼包详情 ↗
                </a>
              </>
            )}
          </div>
          <p className="fine">
            {menu.dinner && (
              <>
                Prices per guest; tax, gratuity and beverages additional.
                菜单按每位计算，税、小费及饮品另计。
                <br />
              </>
            )}
            Tell us about allergies before ordering. · 点餐前请告知过敏情况。
          </p>
        </div>
      </div>
    </>
  );
}
export function BookingForm() {
  const { active } = useContext(DiningContext);
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
        EXPLORING · 当前浏览 <b>{menu.zh}</b>
      </p>
      <form id="booking-form" onSubmit={submit}>
        <label>
          Date<small>日期 · 周一休息</small>
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
          Guests<small>用餐人数</small>
          <select name="party" defaultValue="2">
            {[2, 1, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"} · {n}位
              </option>
            ))}
          </select>
        </label>
        <label>
          Preferred time<small>期望时间</small>
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
          Check availability<small>查看可订时间 ↗</small>
        </button>
      </form>
      {error && (
        <p id="booking-error" role="alert" className="booking-error">
          {error}
        </p>
      )}
      <p className="fine">
        Opens OpenTable to check actual availability and complete your
        reservation. Your menu preference is for browsing; confirm dining
        details when booking.
        <br />
        进入 OpenTable
        查看实际可订时段并完成预订。此处菜单选择用于浏览，用餐安排请在预订时确认。
      </p>
      <a
        className="inline-link"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Prefer to book directly? · 直接打开订位页面 ↗
      </a>
    </div>
  );
}
