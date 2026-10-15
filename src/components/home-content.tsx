import { DiningProvider, MenuChoice, MenuPanel, BookingForm } from "./dining";
import { ORDER_URL } from "@/lib/booking";
export default function HomeContent() {
  return (
    <DiningProvider>
      <div className="theme-b">
        <a className="skip" href="#main">
          Skip to content · 跳至正文
        </a>
        <header className="site-nav">
          <a className="wordmark" href="/">
            TASTE OF BEAUTY<small>WEST HOLLYWOOD · 西好莱坞</small>
          </a>
          <nav aria-label="Main">
            <a href="#menus">
              Menus<small>菜单</small>
            </a>
            <a href="#gatherings">
              Gatherings<small>聚会包场</small>
            </a>
            <a href="#our-story">
              Our story<small>品牌故事</small>
            </a>
            <a href="#visit">
              Visit<small>到店</small>
            </a>
          </nav>
          <a className="cta nav-book" href="#booking">
            Book a table<small>立即订位 ↗</small>
          </a>
        </header>
        <main id="main">
          <section className="bright-hero">
            <div className="bright-title">
              <div className="eyebrow">
                VEGAN & VEGETARIAN DINING · 纯素与蛋奶素料理
              </div>
              <h1>
                Good food.
                <br />
                <em>Beautiful plans.</em>
              </h1>
              <p className="hero-zh">今晚的美好，从一顿好饭开始。</p>
              <p className="intro">
                Five courses for $59. Eight for $99.
                <br />
                Or make lunch your favorite part of the day.
              </p>
              <p className="zh">
                $59 五道式 · $99 八道式，也欢迎来吃一顿自在午餐。
              </p>
              <div className="hero-actions">
                <a className="cta" href="#menus">
                  See the menus<small>先看菜单 ↓</small>
                </a>
                <a className="inline-link" href="#booking">
                  Reserve a table · 立即订位 ↗
                </a>
              </div>
              <div className="tiny-location">
                616 N Robertson Blvd · West Hollywood
              </div>
            </div>
            <div className="bright-choices">
              <div className="eyebrow">
                WHAT ARE YOU IN THE MOOD FOR? · 今天想吃什么？
              </div>
              <div className="choice-grid">
                <MenuChoice menu="59">
                  <img src="/assets/garden.webp" alt="五道纯素晚餐" />
                  <div>
                    <strong>$59</strong>
                    <span>Five-course dinner</span>
                    <small>五道纯素晚餐</small>
                  </div>
                  <b>↗</b>
                </MenuChoice>
                <MenuChoice menu="99">
                  <img src="/assets/lotus.webp" alt="八道式品鉴" />
                  <div>
                    <strong>$99</strong>
                    <span>Eight-course tasting</span>
                    <small>八道式品鉴</small>
                  </div>
                  <b>↗</b>
                </MenuChoice>
                <MenuChoice menu="lunch">
                  <img src="/assets/pot.webp" alt="自在午餐" />
                  <div>
                    <strong>Lunch</strong>
                    <span>A little everyday pleasure</span>
                    <small>自在午餐</small>
                  </div>
                  <b>↗</b>
                </MenuChoice>
                <MenuChoice menu="xlb">
                  <img src="/assets/xlb-0.webp" alt="手工小笼包" />
                  <div>
                    <strong>Xiaolongbao</strong>
                    <span>Handmade little comforts</span>
                    <small>手工小笼包</small>
                  </div>
                  <b>↗</b>
                </MenuChoice>
              </div>
            </div>
          </section>
          <section className="menus-section" id="menus">
            <div className="section-heading">
              <div>
                <div className="eyebrow">THE MENUS · 一眼找到想吃的</div>
                <h2>
                  Your menu.
                  <br />
                  <em>Your kind of evening.</em>
                </h2>
                <p className="zh">先看吃什么，再决定何时来。</p>
              </div>
              <p>
                Choose a menu. See every course.
                <br />
                Then find your table.
                <small>选择菜单，直接看菜品，再查看可订时间。</small>
              </p>
            </div>
            <MenuPanel />
          </section>
          <section className="brand-story-section" id="our-story">
            <div className="brand-story-photo">
              <img
                src="/assets/tea.webp"
                alt="A quiet moment of tea being poured at Taste of Beauty"
                loading="lazy"
              />
              <span>BEAUTY IN THE EVERYDAY · 日常之中，发现美</span>
            </div>
            <div className="brand-story-copy">
              <div className="eyebrow">OUR STORY · 品牌故事</div>
              <h2>
                We’re all
                <br />
                <em>Earthlings.</em>
              </h2>
              <p className="story-cn-title">我们，都是地球上的生命。</p>
              <p>
                At Taste of Beauty, we see a world of possibility in plants. A
                leaf, a mushroom, a familiar vegetable — each can become
                something unexpected, beautiful and full of flavor.
              </p>
              <p>
                We bring nature and imagination to the table through vegan and
                vegetarian cooking. Whether you join us for a quiet lunch, a
                tasting menu or a gathering with people you love, our wish is
                simple: a good meal, a moment of connection, and a little more
                kindness.
              </p>
              <div className="story-chinese">
                <p>
                  在 Taste of
                  Beauty，我们相信，植物之中藏着丰富的可能。一片叶子、一朵菌菇、一种熟悉的蔬菜，都能化作意想不到的美与滋味。
                </p>
                <p>
                  我们通过纯素与蛋奶素料理，把自然与想象带上餐桌。无论是一顿自在午餐、一场品鉴晚餐，还是与珍视之人的相聚，我们希望这一餐带来美味、人与人的连接，以及多一点善意。
                </p>
              </div>
              <a className="inline-link" href="#menus">
                Discover our menus · 探索我们的菜单 ↗
              </a>
            </div>
          </section>
          <section className="booking-section" id="booking">
            <div className="booking-title">
              <div className="eyebrow">YOUR NEXT GOOD MEAL · 下一顿美好</div>
              <h2>
                Let’s find
                <br />
                <em>your table.</em>
              </h2>
              <p className="zh">选好时间，期待见面。</p>
            </div>
            <BookingForm />
          </section>
          <section className="gatherings-section" id="gatherings">
            <div className="gatherings-intro">
              <div className="eyebrow">
                GATHERINGS & PRIVATE DINING · 聚会与包场
              </div>
              <h2>
                Bring your people.
                <br />
                <em>Make it beautiful.</em>
              </h2>
              <p className="gatherings-cn-title">
                与喜欢的人，把相聚过得更美。
              </p>
              <p>
                For birthdays, meaningful celebrations and time together. Tell
                us your date, guest count and occasion — we’ll help you explore
                the dining arrangements.
              </p>
              <p className="zh">
                生日、纪念日，或一场期待已久的相聚。告诉我们日期、人数与活动类型，一起沟通适合的用餐安排。
              </p>
              <div className="hero-actions">
                <a
                  className="cta"
                  href="mailto:events@thetasteofbeauty.com?subject=Private%20dining%20enquiry"
                >
                  Plan your gathering<small>咨询聚会包场 ↗</small>
                </a>
                <a className="inline-link" href="tel:+16575063567">
                  Call us · 致电咨询 ↗
                </a>
              </div>
              <p className="fine">
                Space, menu, pricing and availability are confirmed individually
                with our team.
                <br />
                空间、菜单、费用及可用时间，请与餐厅逐项确认。
              </p>
            </div>
            <div className="gathering-options">
              <div>
                <span>01</span>
                <h3>
                  Birthdays & anniversaries<small>生日与纪念日</small>
                </h3>
              </div>
              <div>
                <span>02</span>
                <h3>
                  Social & private gatherings<small>亲友、团队与私人聚会</small>
                </h3>
              </div>
              <div>
                <span>03</span>
                <h3>
                  Vegetarian wedding celebrations<small>素食婚宴</small>
                </h3>
              </div>
            </div>
          </section>
          <section className="visit-section" id="visit">
            <div className="visit-photo">
              <img
                src="/assets/interior.webp"
                alt="Taste of Beauty dining room with warm wood interiors and a piano"
                loading="lazy"
              />
            </div>
            <div className="visit-info">
              <div className="eyebrow">COME AS YOU ARE · 期待你的到来</div>
              <h2>
                A beautiful meal.
                <br />
                <em>A place to pause.</em>
              </h2>
              <p className="zh">好好吃饭，也好好相聚。</p>
              <div className="visit-pairs">
                <div>
                  <h3>Find us · 地址</h3>
                  <p>
                    616 N Robertson Blvd
                    <br />
                    West Hollywood, CA 90069
                  </p>
                  <a
                    className="inline-link"
                    href="https://www.google.com/maps/search/?api=1&query=616+N+Robertson+Blvd+West+Hollywood+CA+90069"
                    target="_blank"
                    rel="noopener"
                  >
                    Directions · 导航 ↗
                  </a>
                </div>
                <div>
                  <h3>Tuesday–Sunday · 周二至周日</h3>
                  <p>
                    Lunch · 午餐 12:30–3:30 pm
                    <br />
                    Dinner · 晚餐 5:30–9:00 pm
                    <br />
                    Monday closed · 周一休息
                  </p>
                </div>
              </div>
              <a className="inline-link" href="tel:+16575063567">
                (657) 506-3567 · 致电咨询 ↗
              </a>
              <p className="fine">
                Dietary needs or allergies? Please let us know before you dine.
                <br />
                如有饮食要求或过敏情况，请提前告知。
              </p>
            </div>
          </section>
          <section className="last-links">
            <a href="#our-story">
              Our story<small>品牌故事 ↗</small>
            </a>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              Pickup & delivery<small>自取与外送 ↗</small>
            </a>
            <a href="#gatherings">
              Private gatherings<small>聚会与包场咨询 ↗</small>
            </a>
          </section>
        </main>
        <footer>
          <span>
            TASTE OF BEAUTY<small>West Hollywood · 西好莱坞</small>
          </span>
          <span>© 2026 Taste of Beauty</span>
        </footer>
        <div className="sticky-actions">
          <a href="#menus">View menus · 查看菜单</a>
          <a href="#booking">Book a table · 立即订位 ↗</a>
        </div>
      </div>
    </DiningProvider>
  );
}
