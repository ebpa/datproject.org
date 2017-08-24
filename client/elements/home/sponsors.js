const html = require('choo/html')
const css = require('sheetify')

module.exports = function (sectionClass) {
  const elCss = css`
    :host {
      a {
        display: block;
        padding: 1rem;
      }
      img {
        width: 100%;
        max-width: 220px;
        display: block;
        margin: 0 auto;
      }
      .code-for-science-logo {
        max-width: 130px;
      }
    }
  `

  return html`
    <section class="${sectionClass} ${elCss}">
      <header>
        <h2 class="f2 mb0">Sponsors and Supporters</h2>
        <p class="f4 mt1 color-neutral-70 horizontal-rule">Dat is developed by the non-profit group Code for Science & Society and supported by generous sponsors.</p>
      </header>
      <div class="pt3 flex items-center">
        <a class="inline-flex" href="https://codeforscience.org/">
          <img src="/public/img/codeforscience.png" class="code-for-science-logo">
        </a>
        <a class="inline-flex" href="https://sloan.org/programs/digital-technology/data-and-computational-research">
          <img src="/public/img/sloan.png">
        </a>
        <a class="inline-flex" href="http://www.knightfoundation.org/grants/201346305/">
          <img src="/public/img/knight.png">
        </a>
      </div>
      <div class="pv3">
        <div class="br1 ba b--green bg-white">
          <div class="dt-ns dt--fixed-ns w-100">
            <div class="pa3 pa4-ns dtc-ns v-mid">
              <div>
                <h2 class="fw4 f3 mt0 mb3">We need your support!</h2>
                <p class="black-70 measure lh-copy mv0">
                  You help make Dat Project a reality.
                  Grant applications take our time away from development.
                  Please donate so we can write code instead of rewrite our grant applications again.
                </p>
              </div>
            </div>
            <div class="pa3 pa4-ns dtc-ns v-mid">
              <a href="http://donate.datproject.org" class="no-underline f4 tc db w-100 pv3 bg-animate bg-green hover-bg-dark-green white">Donate Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}