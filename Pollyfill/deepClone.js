const userProfile = {
  id: 101,
  username: "alex_dev",
  status: "active",
  // First level of nesting
  contact: {
    email: "alex@example.com",
    // Second level of nesting
    phone: {
      mobile: "+1-555-0199",
      office: "+1-555-0144",
    },
  },
  // Another nested object
  address: {
    city: "San Francisco",
    state: "CA",
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
};

function deepClone(obj) {
  if (typeof obj !== "object" && obj === null) {
    return obj;
  }

  const isArray = Array.isArray(obj);
  let clone = isArray ? [] : {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
}

console.log(deepClone(userProfile));
