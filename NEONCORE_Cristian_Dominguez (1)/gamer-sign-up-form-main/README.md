# NEONCORE — Gamer sign-up form

**Autor:** Cristian Domínguez Sabino  
**Formación:** 9.º semestre de Informática  
**Reto:** Frontend Mentor — Gamer sign-up form

## 1. Descripción

Implementación responsive de la interfaz de registro NEONCORE, construida con HTML5 semántico, CSS y JavaScript nativo. Se conservaron los recursos gráficos y tipográficos del material original y se desarrollaron los estados funcionales indicados en el enunciado.

## 2. Requisitos cubiertos

- [x] Formulario con callsign, correo, contraseña, confirmación y aceptación de términos.
- [x] Validación de campos vacíos.
- [x] Callsign de 3 a 20 caracteres, limitado a letras, números, guion y guion bajo.
- [x] Validación de formato de correo.
- [x] Contraseña de al menos 8 caracteres.
- [x] Confirmación de contraseña coincidente.
- [x] Mensaje de términos cuando se intenta enviar sin aceptar.
- [x] Validación al perder el foco y revalidación al escribir después del primer chequeo.
- [x] Errores asociados a sus controles mediante `aria-describedby` y `aria-invalid`.
- [x] Mostrar/ocultar contraseña y confirmación de forma independiente.
- [x] Medidor de fortaleza con cuatro niveles y reglas descritas en el reto.
- [x] Estado de envío `Transmitting...` y pantalla de éxito.
- [x] Envío inválido: recuento de errores y foco en el primer campo inválido.
- [x] Operador/contador que refleja el estado de los cinco requisitos.
- [x] Diseño adaptable desde 320 px, estados hover/focus y soporte de `prefers-reduced-motion`.
- [x] Navegación con teclado y regiones de anuncio para mensajes.

## 3. Tecnologías

- HTML5
- CSS3 (Grid, Flexbox, variables, media queries)
- JavaScript ES6+ sin dependencias
- Fuentes locales Orbitron y JetBrains Mono

No requiere Node.js, npm, base de datos ni servidor API.

## 4. Ejecución local

### Opción A — abrir directamente

1. Descomprime el ZIP.
2. Abre la carpeta `gamer-sign-up-form-main`.
3. Haz doble clic en `index.html` o ábrelo desde tu navegador.

### Opción B — servidor local (recomendado)

En la terminal, entra a la carpeta del proyecto y ejecuta:

```bash
python -m http.server 5500
```

Abre `http://localhost:5500` en el navegador. Para detener el servidor, vuelve a la terminal y pulsa `Ctrl + C`.

Si el comando `python` no existe en tu sistema, prueba `python3 -m http.server 5500`.

## 5. Pruebas manuales que debes realizar y documentar

1. Enviar el formulario vacío: deben marcarse los cinco requisitos y el foco debe ir a Callsign.
2. Probar callsign `ab`, uno de más de 20 caracteres y uno con espacios o símbolos no permitidos.
3. Probar un correo incorrecto y después corregirlo sin recargar.
4. Probar contraseña `abc`, `neoncore`, `neoncore99`, `Neoncore99` y `Tr4nsm1t!Nexus`. El indicador debe mostrar Weak, Weak, Fair, Good y Strong respectivamente.
5. Escribir dos contraseñas diferentes y comprobar el error de confirmación; corregir una y verificar que el error desaparezca.
6. Activar/desactivar los dos botones de ojo de manera independiente.
7. Intentar enviar sin aceptar términos y luego marcar la casilla.
8. Completar todos los campos y aceptar términos. Debe aparecer `Transmitting...` y después la pantalla de éxito.
9. Repetir navegación usando solo `Tab`, `Shift + Tab`, `Enter` y `Espacio`.
10. Probar anchos de 320, 375, 768, 1024 y 1440 px desde DevTools > Device Toolbar.
11. Revisar la consola del navegador: no deben existir errores JavaScript ni recursos faltantes.

## 6. Lo que queda fuera del alcance del reto

El enunciado indica expresamente que no hay servidor. Por eso, el registro es una simulación de frontend: **no crea usuarios reales, no guarda contraseñas, no envía información y no autentica cuentas**. Los enlaces de login y los enlaces de términos/privacidad muestran avisos de demostración.

Si la evaluación exige registro real, todavía se debe implementar por separado:
- API de registro y autenticación en un backend.
- Almacenamiento seguro de usuarios con hash de contraseña (nunca texto plano).
- Verificación de correo, sesiones y controles contra abuso.
- Páginas legales reales y flujo de inicio de sesión.
- HTTPS y configuración de despliegue.

No introduzcas credenciales reales en esta demostración.

## 7. Evidencias y entrega

Antes de entregar al docente:
- [ ] Ejecutar todos los casos de prueba de la sección 5.
- [ ] Guardar capturas de escritorio, móvil, errores, fortaleza y éxito.
- [ ] Confirmar que las capturas no muestren datos personales reales.
- [ ] Publicar el repositorio y el sitio si la consigna lo solicita.
- [ ] Sustituir los enlaces de entrega por las URLs reales; no inventar URLs.
- [ ] Revisar que el ZIP contenga `index.html`, `css/`, `js/` y `assets/`.

## 8. Estructura

```text
gamer-sign-up-form-main/
├── assets/
│   ├── fonts/
│   └── images/
├── css/
│   └── styles.css
├── design/
├── js/
│   └── app.js
├── index.html
└── README.md
```

## 9. Créditos

Diseño y especificaciones: Frontend Mentor, reto **Gamer sign-up form**.  
Implementación: Cristian Domínguez Sabino.
