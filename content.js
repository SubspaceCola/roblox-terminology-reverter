const replacements = [
  // Specific phrases
  { from: /\bAdd Connection\b/g, to: "Add Friend" },
  { from: /\bRemove Connection\b/g, to: "Remove Friend" },
  { from: /\bCONNECT\b/g, to: "FRIEND" },
  { from: /\bConnect\b/g, to: "Friend" },

  // Connections
  { from: /\bConnections\b/g, to: "Friends" },
  { from: /\bconnections\b/g, to: "friends" },

  // Communities → Groups
  { from: /\bCommunity\b/g, to: "Group" },
  { from: /\bcommunity\b/g, to: "group" },
  { from: /\bCOMMUNITY\b/g, to: "GROUP" },
  { from: /\bCommunities\b/g, to: "Groups" },
  { from: /\bcommunities\b/g, to: "groups" },
  { from: /\bCOMMUNITIES\b/g, to: "GROUPS" },

  // Experiences → Games
  { from: /\bExperiences\b/g, to: "Games" },
  { from: /\bexperiences\b/g, to: "games" },
  { from: /\bEXPERIENCES\b/g, to: "GAMES" },

  // Charts → Discover
  { from: /\bCharts\b/g, to: "Discover" },
  { from: /\bcharts\b/g, to: "discover" },
  { from: /\bCHARTS\b/g, to: "DISCOVER" }
];

function replaceTextInElement(el) {
  if (!el || !el.childNodes) return;

  for (let node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      replacements.forEach(({ from, to }) => {
        text = text.replace(from, to);
      });
      node.textContent = text;
    } else {
      replaceTextInElement(node);
    }
  }
}

function applyReplacements() {
  const elements = document.querySelectorAll('body *:not(script):not(style):not(noscript)');
  elements.forEach(replaceTextInElement);
}

setInterval(applyReplacements, 500);
