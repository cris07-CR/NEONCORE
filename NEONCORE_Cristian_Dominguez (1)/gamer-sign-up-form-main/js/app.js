(() => {
  "use strict";

  const form = document.querySelector("#signup-form");
  const formView = document.querySelector("#form-view");
  const successView = document.querySelector("#success-view");
  const submitButton = document.querySelector("#submit-button");
  const alertBox = document.querySelector("#form-alert");
  const toast = document.querySelector("#toast");
  const fields = {
    callsign: document.querySelector("#callsign"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    confirm: document.querySelector("#confirm"),
    terms: document.querySelector("#terms")
  };
  const checked = new Set();
  let submitting = false;

  const rules = {
    callsign(value) {
      const clean = value.trim();
      if (!clean) return "Enter a callsign";
      if (clean.length < 3) return "Use at least 3 characters";
      if (clean.length > 20) return "Use 20 characters or fewer";
      if (!/^[A-Za-z0-9_-]+$/.test(clean)) return "Use letters, numbers, _ or - only";
      return "";
    },
    email(value) {
      const clean = value.trim();
      if (!clean) return "Enter your email";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean)) return "Enter a valid email, like you@example.com";
      return "";
    },
    password(value) {
      if (!value) return "Enter a password";
      if (value.length < 8) return "Use at least 8 characters";
      return "";
    },
    confirm(value) {
      if (!value) return "Confirm your password";
      if (value !== fields.password.value) return "Passwords don't match";
      return "";
    }
  };

  const stateLabels = {
    callsign: "#callsign-state",
    email: null,
    password: "#password-state",
    confirm: null
  };

  function isValid(name) {
    if (name === "terms") return fields.terms.checked;
    return rules[name](fields[name].value) === "";
  }

  function setStatus(name, valid, touched = true) {
    const item = document.querySelector(`[data-field="${name}"]`);
    if (!item) return;
    item.classList.toggle("is-invalid", touched && !valid);
    item.classList.toggle("is-valid", touched && valid);
    const error = document.querySelector(`#${name}-error`);
    if (error) error.textContent = touched && !valid
      ? (name === "terms" ? "Accept the terms to continue" : rules[name](fields[name].value))
      : "";
    const input = fields[name];
    if (input) input.setAttribute("aria-invalid", String(touched && !valid));
    const status = stateLabels[name] && document.querySelector(stateLabels[name]);
    if (status) {
      status.textContent = touched ? (valid ? "OK" : "Required") : "Pending";
      status.classList.toggle("valid", touched && valid);
      status.classList.toggle("invalid", touched && !valid);
    }
  }

  function updateOperator() {
    const names = ["callsign", "email", "password", "confirm", "terms"];
    const count = names.filter(isValid).length;
    document.querySelector("#ready-count").textContent = `${count}/5 ready`;
    document.querySelector("#operator-name").textContent =
      isValid("callsign") ? fields.callsign.value.trim() : "Unassigned";

    names.forEach(name => {
      const row = document.querySelector(`#status-${name}`);
      const valid = isValid(name);
      row.textContent = valid ? (name === "terms" ? "Accepted" : "OK") :
        (name === "terms" ? "Required" : "Pending");
      row.parentElement.classList.toggle("is-valid", valid);
      row.parentElement.classList.toggle("is-invalid", checked.has(name) && !valid);
    });
  }

  function validate(name, force = false) {
    if (force) checked.add(name);
    const touched = checked.has(name);
    const valid = isValid(name);
    if (touched) setStatus(name, valid, true);
    updateOperator();
    return valid;
  }

  function strength(value) {
    if (!value) return {score: 0, label: ""};
    if (value.length < 8) return {score: 1, label: "Weak"};
    let score = 1;
    if (value.length >= 12) score++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    score = Math.min(score, 4);
    return {score, label: ["", "Weak", "Fair", "Good", "Strong"][score]};
  }

  function updateStrength() {
    const result = strength(fields.password.value);
    const bars = document.querySelector(".strength-bars");
    bars.dataset.level = String(result.score);
    document.querySelector("#strength-label").textContent = result.label;
  }

  Object.entries(fields).forEach(([name, input]) => {
    if (name === "terms") {
      input.addEventListener("change", () => {
        if (checked.has("terms")) validate("terms");
        updateOperator();
      });
      return;
    }
    input.addEventListener("blur", () => {
      if (input.value.trim() !== "" || checked.has(name)) validate(name, true);
    });
    input.addEventListener("input", () => {
      if (checked.has(name)) validate(name);
      if (name === "password") {
        updateStrength();
        if (checked.has("confirm")) validate("confirm");
      }
      updateOperator();
    });
  });

  document.querySelectorAll("[data-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const input = fields[button.dataset.toggle];
      const reveal = input.type === "password";
      input.type = reveal ? "text" : "password";
      button.setAttribute("aria-pressed", String(reveal));
      button.setAttribute("aria-label", reveal ? "Ocultar contraseña" : "Mostrar contraseña");
      input.focus();
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (submitting) return;
    alertBox.classList.remove("visible");

    const names = ["callsign", "email", "password", "confirm", "terms"];
    names.forEach(name => checked.add(name));
    const invalid = names.filter(name => !validate(name, true));

    if (invalid.length) {
      alertBox.textContent = `${invalid.length} ${invalid.length === 1 ? "field needs" : "fields need"} attention. Revisa los campos señalados.`;
      alertBox.classList.add("visible");
      const first = fields[invalid[0]];
      first.focus();
      return;
    }

    submitting = true;
    document.querySelectorAll("#signup-form input").forEach(input => input.disabled = true);
    document.querySelectorAll(".eye-button").forEach(button => {
      const input = fields[button.dataset.toggle];
      input.type = "password";
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-label", "Mostrar contraseña");
      button.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.classList.add("is-submitting");
    window.setTimeout(() => {
      document.querySelector("#success-callsign").textContent = fields.callsign.value.trim();
      formView.hidden = true;
      successView.hidden = false;
      successView.focus();
      document.querySelector("#ready-count").textContent = "Provisioned";
      document.querySelector("#operator-name").textContent = fields.callsign.value.trim();
      names.forEach(name => {
        const row = document.querySelector(`#status-${name}`);
        row.textContent = name === "terms" ? "Accepted" : "Locked";
      });
    }, 1100);
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2600);
  }
  document.querySelectorAll(".policy-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    showToast("Demo académica: agrega aquí tus documentos de términos y privacidad.");
  }));
  ["#login-link", "#continue-login"].forEach(selector => {
    document.querySelector(selector).addEventListener("click", event => {
      event.preventDefault();
      showToast("El inicio de sesión requiere un backend; no forma parte de este reto.");
    });
  });

  updateStrength();
  updateOperator();
})();
