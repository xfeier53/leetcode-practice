const SAMPLE_FEATURE = {
  A: true,
  B: false,
  C: true,
};

function fetchAllFeatures() {
  console.error("Request sent to backend");
  return new Promise((resolve) => setTimeout(() => resolve(SAMPLE_FEATURE), 100));
}

let CACHE = {};
const TTL = 10000;
let fetchInstance = null;

async function getFeaturesState(featureName, defaultValue) {
  if (Object.keys(CACHE).length && new Date().getTime() < CACHE.timestamp + TTL) {
    console.error("Got result from cache");
    return CACHE.data[featureName] ?? defaultValue;
  }
  try {
    let data = {};
    if (fetchInstance === null) {
      fetchInstance = fetchAllFeatures();
      data = await fetchInstance;
      CACHE = { data, timestamp: new Date().getTime() };
    } else {
      data = await fetchInstance;
    }
    fetchInstance = null;
    return data[featureName] ?? defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}

getFeaturesState("A", true).then((enabled) => {
  console.error(`A is ${enabled}, expected true, ${enabled ? "correct" : "incorrect"}`);
});

getFeaturesState("B", true).then((enabled) => {
  console.error(`B is ${enabled}, expected false, ${!enabled ? "correct" : "incorrect"}`);
});

getFeaturesState("D", true).then((enabled) => {
  console.error(`D is ${enabled}, expected true, ${enabled ? "correct" : "incorrect"}`);
});

getFeaturesState("E", false).then((enabled) => {
  console.error(`E is ${enabled}, expected false, ${!enabled ? "correct" : "incorrect"}`);
});

setTimeout(() => {
  getFeaturesState("A", true).then((enabled) => {
    console.error(`A is ${enabled}, expected true, ${enabled ? "correct" : "incorrect"}`);
  });

  getFeaturesState("B", true).then((enabled) => {
    console.error(`B is ${enabled}, expected false, ${!enabled ? "correct" : "incorrect"}`);
  });

  getFeaturesState("D", true).then((enabled) => {
    console.error(`D is ${enabled}, expected true, ${enabled ? "correct" : "incorrect"}`);
  });

  getFeaturesState("E", false).then((enabled) => {
    console.error(`E is ${enabled}, expected false, ${!enabled ? "correct" : "incorrect"}`);
  });
}, 11000);

setTimeout(() => {
  getFeaturesState("A", true).then((enabled) => {
    console.error(`A is ${enabled}, expected true, ${enabled ? "correct" : "incorrect"}`);
  });

  getFeaturesState("B", true).then((enabled) => {
    console.error(`B is ${enabled}, expected false, ${!enabled ? "correct" : "incorrect"}`);
  });
}, 13000);
