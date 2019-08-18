// Insert site-specific javascript code

const log = console.log;

(function pinboardFeed() {
  /**
   * pinboardFeed - grab the lastest pins from pinboard and display them
   *
   * @function
   *
   * @notes
   *
   * The pinboard user is determined via a data tag in the feed element:
   *
   * @example
   *     <div id="pinboard-feed" data-pinboard-user="{{site.social.pinboard}}" ></div/>
   *
   * This uses `fast-xml-parser` to do the decoding of the xml RSS feed from pinboard
   * @see https://www.npmjs.com/package/fast-xml-parser
   *
   * Fetching the feed requires a CORS proxy
   * @see https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
   * @see https://github.com/tamouse/cors-anywhere
   *
   * The CORS proxy needs a home, I'll probably start out with at heroku like the original. The CORS proxy address is set in the HTML element as follows:
   *
   * @example
   *     <div id="pinboard-feed" data-pinboard-user="{{site.social.pinboard}}" data-proxyurl="{{site.corsProxy}}" ></div/>
   *
   * *note* that the `corsProxy` item in `_config.yml` *MUST* end with a slash: "/"
   *
   *
   */

  const PBFEED_TEMPLATE = "https://feeds.pinboard.in/rss/u:username/";

  function corsProxy(p) {
    if (p && p.hasAttribute("data-proxyurl")) {
      return p.getAttribute("data-proxyurl");
    } else {
      throw new Error("no proxyurl");
    }
  }

  function pbUser(p) {
    if (p.hasAttribute("data-pinboard-user")) {
      return p.getAttribute("data-pinboard-user");
    } else {
      throw new Error("no pinboard user");
    }
  }

  function createDisplay(json) {
    // Shortcu=ts
    const ce = (tag, opts) => document.createElement(tag, opts);
    const ct = (text, opts) => document.createTextNode(text, opts);

    function createLink(href, text, attrs = {}) {
      const link = ce("a");
      const linkText = ct(text);
      link.appendChild(linkText);
      link.setAttribute("href", href);
      for (let [key, value] of Object.entries(attrs)) {
        link.setAttribute(link, value);
      }
      return link;
    }

    // Extract data
    const {
      "rdf:RDF": {
        channel: { title, description, link },
        item = []
      }
    } = json;

    // Build the display

    const feedDisplay = ce("div");

    const heading = ce("h3");
    heading.appendChild(createLink(link, title));
    feedDisplay.appendChild(heading);

    const descP = ce("p");
    descP.appendChild(ct(description));
    feedDisplay.appendChild(descP);

    let listItems = ce("ul");
    for (let i = 0; i < 10; i++) {
      const {
        title = "",
        description = "",
        link = "",
        "dc:subject": tags = ""
      } = item[i];

      const itemLi = ce("li");

      const itemH4 = ce("h4");
      const itemLink = createLink(link, title);
      itemH4.appendChild(itemLink);
      itemLi.appendChild(itemH4);

      const itemTags = ce("div");
      itemTags.appendChild(ct(tags));
      itemLi.appendChild(itemTags);

      listItems.appendChild(itemLi);
    }
    feedDisplay.appendChild(listItems);
    return feedDisplay;
  }

  const pinboardFeedDiv = document.getElementById("pinboard-feed");
  if (!pinboardFeedDiv) {
    throw new Error("no pinboard feed");
  }

  const pbFeedUrl = PBFEED_TEMPLATE.replace(
    /username/,
    pbUser(pinboardFeedDiv)
  );

  const proxyUrl = corsProxy(pinboardFeedDiv);

  fetch(proxyUrl + pbFeedUrl)
    .then(data => {
      return data.text();
    })
    .then(xml => {
      let valid = parser.validate(xml);
      if (!valid) {
        throw new Error(valid.err);
      }
      return parser.parse(xml);
    })
    .then(json => {
      pinboardFeedDiv.appendChild(createDisplay(json));
    });
})();
