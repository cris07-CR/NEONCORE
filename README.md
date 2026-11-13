<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#070b10">
  <meta name="description" content="NEONCORE — crea tu identidad de operador y únete al nexus.">
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel="stylesheet" href="./css/styles.css">
  <title>NEONCORE | Registro de operador</title>
  <script src="./js/app.js" defer></script>
</head>
<body>
  <main class="page-shell">
    <section class="brand-panel" aria-labelledby="hero-title">
      <a class="brand" href="#" aria-label="NEONCORE, inicio">
        <span class="brand-mark" aria-hidden="true">⬡</span><span>NEONCORE</span>
      </a>
      <div class="hero-copy">
        <p class="eyebrow hero-kicker"><span class="slash">//</span> SYSTEM ACCESS</p>
        <h1 id="hero-title">Join the<br>nexus</h1>
        <p class="hero-subtitle">Initialize your NEONCORE identity</p>
      </div>

      <aside class="operator-card" aria-label="Estado del operador">
        <div class="operator-top">
          <span>Operator ID</span>
          <span id="ready-count">0/5 ready</span>
        </div>
        <p class="operator-name" id="operator-name">Unassigned</p>
        <ul class="status-list">
          <li><span>Callsign</span><span id="status-callsign">Pending</span></li>
          <li><span>Email</span><span id="status-email">Pending</span></li>
          <li><span>Password</span><span id="status-password">Pending</span></li>
          <li><span>Confirm</span><span id="status-confirm">Pending</span></li>
          <li><span>Terms</span><span id="status-terms">Required</span></li>
        </ul>
      </aside>
      <div class="brand-foot"><span>NC / SECURE NETWORK</span><span>EST. 2026</span></div>
    </section>

    <section class="form-panel" aria-labelledby="form-title">
      <div class="corner corner-top" aria-hidden="true"></div>
      <div class="corner corner-bottom" aria-hidden="true"></div>
      <div id="form-view">
        <header class="form-heading">
          <h2 id="form-title">New operator</h2>
          <p><span class="desktop-required">All fields required</span><span class="mobile-required">All required</span></p>
        </header>
        <div id="form-alert" class="form-alert" role="alert" aria-live="assertive"></div>
        <form id="signup-form" novalidate>
          <div class="field" data-field="callsign">
            <label for="callsign"><span class="label-chevron">›</span> Callsign</label>
            <input id="callsign" name="callsign" type="text" placeholder="e.g. Vortex_07" autocomplete="username" minlength="3" maxlength="20" aria-describedby="callsign-hint callsign-error" required>
            <div class="field-meta"><small id="callsign-hint">3–20 characters: letters, numbers, _ or -</small><span class="field-state" id="callsign-state">Pending</span></div>
            <p class="error-message" id="callsign-error"></p>
          </div>

          <div class="field" data-field="email">
            <label for="email"><span class="label-chevron">›</span> Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" aria-describedby="email-error" required>
            <p class="error-message" id="email-error"></p>
          </div>

          <div class="field" data-field="password">
            <label for="password"><span class="label-chevron">›</span> Password</label>
            <div class="password-wrap">
              <input id="password" name="password" type="password" placeholder="Create a secure password" autocomplete="new-password" aria-describedby="password-hint password-error strength-label" required>
              <button class="eye-button" type="button" data-toggle="password" aria-label="Mostrar contraseña" aria-pressed="false">
                <img src="./assets/images/icon-eye.svg" alt="" class="eye-open">
                <img src="./assets/images/icon-eye-off.svg" alt="" class="eye-closed">
              </button>
            </div>
            <div class="strength" aria-label="Indicador de fortaleza de contraseña">
              <div class="strength-bars" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
              <span id="strength-label" class="strength-label"></span>
            </div>
            <div class="field-meta"><small id="password-hint">At least 8 characters</small><span class="field-state" id="password-state">Pending</span></div>
            <p class="error-message" id="password-error"></p>
          </div>

          <div class="field" data-field="confirm">
            <label for="confirm"><span class="label-chevron">›</span> Confirm password</label>
            <div class="password-wrap">
              <input id="confirm" name="confirm" type="password" placeholder="Confirm your password" autocomplete="new-password" aria-describedby="confirm-error" required>
              <button class="eye-button" type="button" data-toggle="confirm" aria-label="Mostrar confirmación de contraseña" aria-pressed="false">
                <img src="./assets/images/icon-eye.svg" alt="" class="eye-open">
                <img src="./assets/images/icon-eye-off.svg" alt="" class="eye-closed">
              </button>
            </div>
            <p class="error-message" id="confirm-error"></p>
          </div>

          <div class="terms-field" data-field="terms">
            <label class="checkbox-label" for="terms">
              <input id="terms" name="terms" type="checkbox" aria-describedby="terms-error">
              <span class="custom-check" aria-hidden="true"><img src="./assets/images/icon-tick-16.svg" alt=""></span>
              <span>I accept the <a href="#terms-info" class="policy-link">Terms</a> and <a href="#privacy-info" class="policy-link">Privacy Policy</a>.</span>
            </label>
            <p class="error-message" id="terms-error"></p>
          </div>

          <button class="submit-button" id="submit-button" type="submit">
            <span class="button-text">Initialize account</span><span class="button-loading">Transmitting<span class="loading-dots">...</span></span>
          </button>
        </form>
        <p class="login-note">Already an operator? <a href="#login" id="login-link">Log in</a></p>
      </div>

      <section id="success-view" class="success-view" hidden tabindex="-1" aria-labelledby="success-title">
        <img src="./assets/images/icon-hex-check.svg" alt="" class="success-icon">
        <p class="eyebrow">Handshake complete</p>
        <h2 id="success-title">Identity<br>provisioned.</h2>
        <p class="success-copy">Operator <strong id="success-callsign"></strong> provisioned. Your account is ready.</p>
        <p class="success-note">Your local registration flow has completed successfully.</p>
        <a class="submit-button success-link" href="#login" id="continue-login">Continue to log in <span aria-hidden="true">→</span></a>
      </section>
      <p class="panel-footer">NEONCORE NETWORK <span>•</span> SECURE ONBOARDING</p>
    </section>
  </main>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <footer class="attribution">Challenge by <a href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <strong>Cristian Domínguez Sabino</strong> · 9.º semestre de Informática.</footer>
</body>
</html>
