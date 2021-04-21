import { apiInitializer } from "discourse/lib/api";
import { findAll } from "discourse/models/login-method";

const HIDDEN_METHODS = settings.hidden_auth_method_names
  .split("|")
  .filter((a) => a);

export default apiInitializer("0.8", (api) => {
  if (HIDDEN_METHODS.length == 0) return;

  const methods = findAll();
  for (let i = methods.length - 1; i >= 0; i--) {
    if (HIDDEN_METHODS.includes(methods[i].name)) {
      methods.splice(i, 1);
    }
  }
});
