(() => {
  const main = function main() {
    const counters = Object.keys(window)
      .filter((_) => _.startsWith("yaCounter"))
      .map((_) => window[_]);

    for (const counter of counters) {
      const { reachGoal: originalReachGoal } = counter;

      counter.reachGoal = (goalName, params, ...args) => {
        if (["hover_page", "click_page"].includes(goalName)) {
          return null;
        }

        originalReachGoal.call(counter, goalName, params, ...args);
      };
    }
  };

  window.addEventListener("load", main);
})();
